import React from 'react';
import ReactPlayer from 'react-player';
import classnames from 'classnames';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import PageTitle from '../page-title';
import VideoBg from '../../public/images/claim-bg.svg';
import LeftArrow from '../../public/images/left-arrow.svg';
import RightArrow from '../../public/images/right-arrow.svg';

import styles from './index.module.less';

const videoList = [
  {
    type: 'image',
    image: '/images/dehero.png',
    title: '10.13',
    link: 'https://www.dehero.co?utm_source=38',
    linkString: 'DEHERO',
  },
  {
    type: 'image',
    image: '/images/jhxq.png',
    title: '9.26',
    link: 'https://www.evolution.land/land/5/sign-in?invite=196b6f235f',
    linkString: 'Evolution Land',
  },
  {
    type: 'image',
    image: '/images/mirror-world.png',
    title: '9.25',
    link: 'https://forms.gle/a47psKUcrSSiVveS6',
    linkString: 'Mirror World',
  },
  // {
  //   type: 'video',
  //   video: '/video/moca.mp4',
  //   image: '/image/logo2.png',
  //   title: '9.15',
  //   link: '/',
  //   linkString: 'GOAT NFT',
  // },
];

export default function Claim({ isMobile }) {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-black">
      <PageTitle title="Airdrop" subTitle="空投" />
      <VideoBg className={styles.container} />
      <Carousel
        className={styles.carousel}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        renderArrowPrev={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div
              className={classnames({ 'flex justify-start items-center': isMobile }, styles.arrow)}
              onClick={onClickHandler}
              title={label}
              style={{ left: 15 }}
            >
              {isMobile ? <LeftOutlined style={{ fontSize: 16 }} /> : <LeftArrow />}
            </div>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <div
              className={classnames({ 'flex justify-end items-center': isMobile }, styles.arrow)}
              onClick={onClickHandler}
              title={label}
              style={{ right: 15 }}
            >
              {isMobile ? <RightOutlined style={{ fontSize: 16 }} /> : <RightArrow />}
            </div>
          )
        }
      >
        {videoList.map((item) => {
          return (
            <div className={styles.item} key={item.link}>
              <span className={styles.text}>{item.title}</span>
              {item.type === 'video' ? (
                <div className={styles.video}>
                  <ReactPlayer
                    controls
                    width="100%"
                    height="100%"
                    // @ts-ignore
                    url={item.video}
                    className="w-full h-full rounded-2xl overflow-hidden"
                  />
                </div>
              ) : (
                <div className={styles.video}>
                  <img
                    // width="100%"
                    // height="100"
                    style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto' }}
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              )}
              <a
                target="_blank"
                className={styles.text}
                style={{ textDecoration: 'underline' }}
                href={item.link}
              >
                {item.linkString}
              </a>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
