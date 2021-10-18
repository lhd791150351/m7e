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

  useEffect(() => {
    setLikeCountState(likeCount);
  }, [likeCount]);

  const authenticate = async () => {
    if (isMobile()) {
      Message({ content: 'For better experience, please browse on the computer' });
      throw new Error('');
    }

    if (authenticateLoading) throw new Error('');

    if (did) return;

    setAuthenticateLoading(true);
    try {
      initIDX();

      Message({ content: 'Start authenticating...' });

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

      Message({ content: 'Init your Dataverse...' });

      await initCollections();

      setDid(getDID());
    } catch {
      Message({ content: 'Failed Network!', type: MessageTypes.Error });
      throw new Error('');
    } finally {
      setAuthenticateLoading(false);
    }
  };

  const like = useCallback(async () => {
    try {
      await authenticate();
    } catch {
      return;
    }
    if (likeLoading) {
      return;
    }
    try {
      setLikeLoading(true);

      if (!tokenId) throw new Error(' ');

      Message({
        content: 'Saving...',
      });

      await addBookmark({
        chain,
        contract,
        tokenId,
        url: platformLink,
        note: '',
        tags: [],
        date: new Date().toISOString(),
      });

      setLikeCountState((s) => s + 1);

      await reportSaveNft({ chain, token_id: tokenId, contract });

      Message({
        content: 'Save NFT successfully!',
      });

      setTimeout(() => {
        const redirectUrl = `<a href='https://dataverse.art/#/${did}' target='_blank'>[View in Dataverse]</a>`;
        Message({ content: redirectUrl, duration: 0 });
      }, 3000);
    } catch {
      Message({
        content: 'Save NFT failed!',
        type: MessageTypes.Error,
      });
    } finally {
      setLikeLoading(false);
    }
  }, [authenticateLoading, likeLoading]);

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
        <img src="/images/like.png" className={styles.like} onClick={like}></img>
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
