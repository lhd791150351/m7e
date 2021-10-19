/* eslint-disable no-nested-ternary */
import React, { SetStateAction, Dispatch } from 'react';
import classnames from 'classnames';
import ReactPlayer from 'react-player';
import Head from 'next/head';

// import Image from 'next/image';
import styles from './styles.module.less';
import LikeComponent from '../../dataverse/components/LikeComponent';

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
  data: {
    chain: string;
    contract: string;
    tokenId: string;
    likeCount: string;
    liked?: boolean;
    nftLink?: string;
  };
  states: {
    did: string;
    authenticateLoading: boolean;
    likeLoading: boolean;
    setDid: Dispatch<SetStateAction<string>>;
    setAuthenticateLoading: Dispatch<SetStateAction<boolean>>;
    setLikeLoading: Dispatch<SetStateAction<boolean>>;
  };
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
  data,
  states,
}: DataItem) {
  const cls = classnames(styles['moca-card']);
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
        <LikeComponent
          platformLink={platformLink}
          data={data}
          states={states}
          likeStyles={styles.like}
          numStyles={styles.num}
        />
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
