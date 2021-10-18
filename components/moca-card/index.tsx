/* eslint-disable no-nested-ternary */
import React, { useCallback, useState, SetStateAction, Dispatch, useEffect } from 'react';
import classnames from 'classnames';
import ReactPlayer from 'react-player';
import Head from 'next/head';
import Web3Modal from 'web3modal';

// import Image from 'next/image';
import styles from './styles.module.less';
import { isMobile } from '../../dataverse/utils';
import Message, { MessageTypes } from '../../dataverse/components/Message';
import { reportSaveNft } from '../../dataverse/apis/report';
import {
  authenticateIDX,
  hasCollections,
  initCollections,
  initIDX,
  getDID,
  addBookmark,
} from '../../dataverse/apis/ceramic';

export interface DataItem {
  url: string;
  author: string[];
  twitter: string[];
  platform: string;
  platformLink: string;
  title: string;
  type: string;
  desc: string;
  mcp?: string;
  chain?: string;
  contract?: string;
  tokenId?: string;
  nftLink?: string;
  liked?: boolean;
  likeCount: string;
  did: string;
  authenticateLoading: boolean;
  likeLoading: boolean;
  setDid: Dispatch<SetStateAction<string>>;
  setAuthenticateLoading: Dispatch<SetStateAction<boolean>>;
  setLikeLoading: Dispatch<SetStateAction<boolean>>;
}

export default function MocaCard({
  url,
  desc,
  type,
  title,
  author,
  platform,
  platformLink,
  twitter,
  mcp,
  chain,
  contract,
  tokenId,
  nftLink,
  liked,
  likeCount,
  did,
  authenticateLoading,
  likeLoading,
  setDid,
  setAuthenticateLoading,
  setLikeLoading,
}: DataItem) {
  const cls = classnames(styles['moca-card']);
  const [likeCountState, setLikeCountState] = useState(likeCount);
  const [likedState, setLikedState] = useState(liked);
  const [likeLoadingState, setLikeLoadingState] = useState(likeLoading);

  useEffect(() => {
    setLikeCountState(likeCount);
  }, [likeCount]);

  useEffect(() => {
    setLikedState(liked);
  }, [liked]);

  useEffect(() => {
    setLikeLoadingState(likeLoadingState);
  }, [likeLoadingState]);

  const authenticate = async () => {
    if (isMobile()) {
      Message({ content: 'For better experience, browse via your pc' });
      throw new Error('');
    }

    if (authenticateLoading) throw new Error('');

    if (did) return;

    setAuthenticateLoading(true);
    try {
      initIDX();
      Message({ content: 'Start authentication...' });
      const web3Modal = new Web3Modal({
        network: process.env.WEB3_NETWORK,
        cacheProvider: true,
        disableInjectedProvider: false,
        providerOptions: {},
      });
      const provider = await web3Modal.connect();
      const addresses = (await provider.request({
        method: 'eth_requestAccounts',
      })) as Array<string>;

      await authenticateIDX(provider, addresses[0]);
      // await authenticateIDX(window['ethereum' as keyof typeof window], address);

      const isCollectionInit = await hasCollections();
      if (!isCollectionInit) {
        Message({ content: 'Init your Dataverse...' });
        await initCollections();
      }
      const DID = getDID();
      setDid(DID);
      return DID;
    } catch {
      Message({ content: 'Failed Network!', type: MessageTypes.Error });
      throw new Error('');
    } finally {
      setAuthenticateLoading(false);
    }
  };

  const like = useCallback(async () => {
    let DID;
    try {
      DID = await authenticate();
    } catch {
      return;
    }
    if (likeLoading) {
      return;
    }
    try {
      const link = nftLink || platformLink;
      const likeList = localStorage.getItem('likedList');
      if (likeList) {
        const likeListParse = JSON.parse(likeList);
        if (likeListParse.includes(link)) {
          Message({
            content: 'Already saved!',
            type: MessageTypes.Info,
          });
          return;
        }
      }

      setLikeLoading(true);
      setLikeLoadingState(true);
      if (!tokenId) throw new Error(' ');

      Message({
        content: 'Start NFT curation...',
      });
      await addBookmark({
        chain,
        contract,
        tokenId,
        url: link,
        note: '',
        tags: [],
        date: new Date().toISOString(),
      });

      if (likeList) {
        const likeListParse = JSON.parse(likeList);
        localStorage.setItem('likedList', JSON.stringify([...likeListParse, link]));
      } else {
        localStorage.setItem('likedList', JSON.stringify([link]));
      }

      setLikeCountState((s) => s + 1);
      setLikedState(true);

      await reportSaveNft({ chain, token_id: tokenId, contract });

      Message({ did: did || DID, duration: 0 });
    } catch {
      Message({
        content: 'Save NFT failed!',
        type: MessageTypes.Error,
      });
    } finally {
      setLikeLoading(false);
      setLikeLoadingState(false);
    }
  }, [did, authenticateLoading, likeLoading]);

  return (
    <div className={cls}>
      <Head>
        <script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        ></script>
      </Head>
      <div className={styles.header}>
        <div className={styles.name}>{title}</div>
        <img
          src={
            likeLoadingState
              ? '/images/loading.svg'
              : likedState
              ? '/images/like_red.png'
              : '/images/like.png'
          }
          className={styles.like}
          onClick={like}
        ></img>
        <span className={styles.num}>{likeCountState}</span>
      </div>
      <div className={styles.body}>
        <div className={styles.tit}>
          <div className={styles.name}>
            Powered by{' '}
            <a className="underline" target="_blank" href="https://mycryptoprofile.io/">
              MyCryptoProfile
            </a>
          </div>
        </div>
        <div className={styles.prod}>
          {type === 'image' && <img src={url} alt="production" />}
          {type === 'video' && (
            <ReactPlayer
              controls
              width="100%"
              height="100%"
              url={url}
              loop
              // playing
              // muted
              className="w-full h-full rounded-2xl overflow-hidden justify-center items-center"
            />
          )}
          {/* @ts-ignore */}
          {type === '3d' && <model-viewer src={url} auto-rotate camera-controls />}
        </div>
      </div>
      <div className={styles.hip}>
        <div
          className={classnames({
            [styles.l]: true,
            [styles.more]: author.length > 1,
          })}
        >
          <a href="https://mycryptoprofile.io/" target="_blank">
            <img src="/event-sponsors/new/mcp.png" className={styles.smile}></img>
          </a>
          {author.map((item, i) => {
            if (i === 1) {
              return (
                <React.Fragment key={item}>
                  <span className={styles.x}>x</span>
                  <a href={twitter[i]} className={styles.link} target="_blank">
                    {item}
                  </a>
                </React.Fragment>
              );
            }
            return (
              <a href={twitter[i]} className={styles.link} target="_blank" key={item}>
                {item}
              </a>
            );
          })}
        </div>
        <div
          className={classnames({
            [styles.r]: true,
            [styles.more]: author.length > 1,
          })}
        >
          <a href={platformLink} className={styles.link} target="_blank">
            {platform.toLocaleUpperCase()}
          </a>
          {author.length === 1 &&
            (mcp ? (
              <a href={mcp} className={styles.link} target="_blank">
                PROOF
              </a>
            ) : (
              <a href={twitter[0]} className={styles.link} target="_blank">
                TWITTER
              </a>
            ))}
        </div>
      </div>

      <div className={styles.footer}>{desc}</div>
    </div>
  );
}
