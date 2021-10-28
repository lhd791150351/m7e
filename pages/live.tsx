import classnames from 'classnames';
import ReactPlayer from 'react-player';
import QRCode from 'qrcode.react';

import Page from '../components/page';
import H3 from '../components/h3';
import { SITE_NAME, META_DESCRIPTION } from '../common/const';
import styles from '../styles/live.module.less';

export default function Home() {
  const meta = {
    title: `Live - ${SITE_NAME}`,
    description: META_DESCRIPTION,
  };

  return (
    <Page meta={meta}>
      <main className="min-h-screen	flex flex-col w-full flex-1 justify-center items-center bg-black py-8	">
        <H3 className="text-white fonts-kumar-one text-center">
          Closing Party: Quest for Metaverse Identity
        </H3>
        <div className={styles.live}>
          <ReactPlayer
            url="https://live.nft4metaverse.io"
            width="100%"
            height="100%"
            controls
            playing
          />
        </div>
        {/* 
        <div className="fonts-anonymous-pro text-white text-center my-2">
          *The QR code address below will be updated before the live broadcast.
        </div> */}

        <div className="w-full flex main-content mt-10 justify-center items-center">
          <div className="flex flex-col justify-center items-center px-4">
            <div
              style={{
                backgroundColor: '#fff',
                padding: 2,
                height: 84,
                width: 84,
                marginBottom: 4,
              }}
            >
              <QRCode value="https://live.bilibili.com/22322865" size={80} />
            </div>
            <a
              className="underline text-white mt-2 fonts-anonymous-pro hover:text-white"
              href="https://live.bilibili.com/22322865"
              target="_blank"
            >
              Bilibili
            </a>
          </div>
          <div className="flex flex-col justify-center items-center px-4">
            <div
              style={{
                backgroundColor: '#fff',
                padding: 2,
                height: 84,
                width: 84,
                marginBottom: 4,
              }}
            >
              <QRCode value="https://youtube.nft4metaverse.io" size={80} />
            </div>
            <a
              className="underline text-white mt-2 fonts-anonymous-pro hover:text-white"
              href="https://youtube.nft4metaverse.io"
              target="_blank"
            >
              Youtube
            </a>
          </div>
          {/* <div className="flex flex-col justify-center items-center px-4">
            <div
              style={{
                backgroundColor: '#fff',
                padding: 2,
                height: 84,
                width: 84,
                marginBottom: 4,
              }}
            >
              <QRCode
                value="https://app.binance.com/en/qr/dplk50ddd92d21e24bfbb1f266062a4b1617"
                size={80}
              />
            </div>
            <a
              className="underline text-white mt-2 fonts-anonymous-pro hover:text-white"
              href="https://app.binance.com/en/qr/dplk50ddd92d21e24bfbb1f266062a4b1617"
              target="_blank"
            >
              Binance
            </a>
          </div> */}
          {/* <div className="flex flex-col justify-center items-center px-4">
            <div
              style={{
                backgroundColor: '#fff',
                padding: 2,
                height: 84,
                width: 84,
                marginBottom: 4,
              }}
            >
              <QRCode
                value="https://play.decentraland.org/?position=65%2C15&realm=fenrir-amber"
                size={80}
              />
            </div>
            <a
              className="underline text-white mt-2 fonts-anonymous-pro hover:text-white"
              href="https://play.decentraland.org/?position=65%2C15&realm=fenrir-amber"
              target="_blank"
            >
              Decentraland
            </a>
          </div> */}
        </div>
      </main>
    </Page>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../messages/common/${locale}.json`),
        ...require(`../messages/index/${locale}.json`),
      },
      now: new Date().getTime(),
    },
  };
}
