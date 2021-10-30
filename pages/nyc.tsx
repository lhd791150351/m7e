import React from 'react';
import classnames from 'classnames';

import getHuntRank from '../lib/hunt';

import Page from '../components/page';
import H1 from '../components/h1';
import H2 from '../components/h2';
import H3 from '../components/h3';
import H4 from '../components/h4';
import HuntBoard from '../components/hunt-board';
import LogoPartner from '../components/logo-card';
import Footer from '../components/footer';

import m7edaoLogo from '../public/hunt/m7e.png';
import imtokenLogo from '../public/hunt/imtoken.png';
import polygonStudioLogo from '../public/hunt/polygonstudios.webp';
import tezosLogo from '../public/hunt/tezos.png';
import harmonyLogo from '../public/hunt/harmony.png';
import utuLogo from '../public/hunt/utuone.png';
import ovrLogo from '../public/hunt/ovr.png';
import defineLogo from '../public/hunt/define.png';
import mocaLogo from '../public/hunt/moca.png';
import m360Logo from '../public/hunt/m360.png';
import imkeyLogo from '../public/hunt/imkey.png';

import { SITE_NAME, META_DESCRIPTION } from '../common/const';

const LIST = [
  {
    title: 'Main Host',
    list: [
      { avatar: imtokenLogo, link: 'https://token.im/', name: 'imToken' },
      { avatar: polygonStudioLogo, link: 'https://polygonstudios.com/', name: 'Polygon Studios' },
    ],
  },
  {
    title: 'Host Support',
    list: [
      { avatar: defineLogo, name: 'DeFine', link: 'https://www.de-fine.art' },
      { avatar: tezosLogo, link: 'https://tezos.com/', name: 'Tezos' },
      { avatar: imkeyLogo, link: 'https://imkey.im/', name: 'imKey' },
      { avatar: utuLogo, link: 'https://utu.one/', name: 'UTU.ONE' },
      { avatar: harmonyLogo, link: 'https://www.harmony.one', name: 'Harmony' },
      { avatar: m360Logo, link: '', name: 'M360' },
      { avatar: mocaLogo, link: 'https://museumofcryptoart.com/', name: 'MOCA' },
    ],
  },
  {
    title: 'Technical Support',
    list: [{ avatar: ovrLogo, link: 'https://www.ovr.ai/', name: 'OVR' }],
  },
  {
    title: 'Organizer',
    list: [{ avatar: m7edaoLogo, link: 'https://twitter.com/m7e_io', name: 'M7e DAO' }],
  },
];

interface Hunt {
  user_uuid: string;
  user_name: string;
  user_pic: string;
  value: number;
}

interface Props {
  huntRank: Hunt[];
}

const usePage = (list = []) => {
  const [page, setPage] = React.useState(1);

  const nextPage = React.useCallback(() => {
    setPage(page + 1);
  }, [page, list]);

  const data = list.slice(0, page * 10);
  const totalPage = Math.ceil(list.length / 10);

  return { page, totalPage, total: data.length, nextPage, data };
};

export default function NFTNYC({ huntRank }: Props) {
  const meta = {
    title: `Twin-City Treasure Hunt - ${SITE_NAME}`,
    description: META_DESCRIPTION,
  };

  const [initData, setInitData] = React.useState(huntRank);

  const updateHuntRank = React.useCallback(async () => {
    const data = await getHuntRank();

    setInitData(data);
  }, []);

  const loopFetchHuntRank = React.useCallback(async () => {
    setTimeout(() => {
      updateHuntRank();

      loopFetchHuntRank();
    }, 3000);
  }, [initData]);

  React.useEffect(() => {
    // loopFetchHuntRank();
  }, [null]);

  const { page, totalPage, data, nextPage } = usePage(initData);

  console.log(page, totalPage, data, nextPage);
  return (
    <Page meta={meta} className="bg-black">
      <main className="min-h-screen	flex flex-col w-full flex-1 bg-black pt-8	main-content">
        <div className="text-3xl text-white fonts-kumar-one sm:text-5xl">
          Twin-City Treasure Hunt
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base">
          NewYork: Nov 2nd 10am EST to Nov 5th 10am EST
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base">
          Shanghai: Nov 5th 18pm (UTC+8) to Nov 8th 18pm (UTC+8)
        </div>

        <div className="text-white fonts-kumar-one mt-10 mb-4 text-2xl sm:text-4xl">
          How to play
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base">
          1）Download{' '}
          <a href="https://link.ovr.ai/social" target="_blank" className="underline">
            OVR
          </a>
          , check around the NYC NFT/Shanghai M50 venue, collect treasures around Manhatthan（will
          specify hunt area in OVR app）
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base">
          2）The winners who collect the most treasures wins，total treausure is around 2000 in each
          city, check m7e.io/nyc to see the winners on time.
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base">
          3）Two cities have same time period to collect treasure and the treasures are randomly
          distributed，we will select final winners from both cities at 11.8th，then send rewards to
          winners at 11.9th
        </div>

        <div className="text-white fonts-kumar-one mt-10 mb-4 text-xl sm:text-4xl">
          Reward rules
        </div>
        <div className="text-white pl-4 mt-6 text-xl sm:text-3xl fonts-kumar-one">
          Participant Rewards
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base pl-4">
          Pass to the Polygon Studios, Private Breakfast and Define venue in New York and M50 in
          Shanghai
        </div>
        <div className="text-white pl-4 mt-6 text-xl sm:text-3xl fonts-kumar-one">
          Top 50 winners
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base pl-4">
          1) imToken Blue NFT limited Edition 1
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base pl-4">
          2) imToken HQ free tour in Decentraland
        </div>

        <div className="text-white pl-4 mt-6 text-xl sm:text-3xl fonts-kumar-one">
          Top 10 winners
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base pl-4">
          1) imKey hardwallet
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base pl-4">
          {' '}
          2) Share $1100 USD reward（$500 worth ETH/$500 worth $DFA/$100 worth XTZ)
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base pl-4">
          3) DeFine Special NFT{' '}
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base pl-4">
          {' '}
          4) M7E DAO NFT
        </div>

        <div className="text-white fonts-kumar-one mt-10 mb-4 text-xl sm:text-4xl">
          Claiming rewards
        </div>
        <div className="text-white fonts-anonymous-pro mt-2 sm:text-xl text-base">
          Contact us at{' '}
          <a href="https://discord.gg/5PjHmR7CwU" target="_blank" className="underline">
            M7e DAO Discord
          </a>{' '}
          to share your{' '}
          <a href="https://link.ovr.ai/social" target="_blank" className="underline">
            OVR
          </a>{' '}
          ID/Name and provide your wallet address, we will reward you at November 9th 2021.
        </div>

        <section className="flex flex-1 flex-col items-center mt-4">
          <div className="text-white my-10 text-2xl sm:text-4xl text-center font-roboto font-semibold ">
            TREASURE HUNT LEADER BOARD
          </div>
          <div className="max-w-2xl w-full">
            {data.map((hunt, idx) => (
              <HuntBoard
                rank={idx + 1}
                name={hunt.user_name}
                avatar={hunt.user_pic}
                value={hunt.value}
                key={hunt.user_uuid}
                className="mb-4"
              />
            ))}
          </div>
          <div className="mt-4 mb-6">
            {page < totalPage && (
              <span onClick={nextPage} className="button">
                Load more
              </span>
            )}
          </div>
        </section>

        <section>
          {LIST.map((item) => {
            return (
              <div key={item.title}>
                <h4 className="text-white fonts-kumar-one sm:mt-20 sm:mb-4 mt-10 mb-2 text-center text-3xl">
                  {item.title}
                </h4>
                <div className="flex w-full justify-center flex-wrap text-white">
                  {item.list.map((partner) => {
                    return (
                      <LogoPartner
                        key={partner.name}
                        avatar={partner.avatar}
                        link={partner.link}
                        name={partner.name}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        <img src="/hunt/utu-passport-compressed.png" className="mt-10" />

        <section className="block flex-1 flex-col bg-pink-500 rounded-2xl px-6 py-6 mt-10">
          <div className="sm:text-2xl text-xl text-white font-roboto font-semibold">
            WANNA STAY IN THE KNOW
          </div>
          <div className="mt-2 sm:text-lg text-base text-gray-100 font-en font-roboto">
            Come join one of the best and friendliest Discord channels in the NFT space.
          </div>
          <a
            href="https://discord.gg/5PjHmR7CwU"
            target="_blank"
            className="mt-4 button flex-grow-0 font-roboto font-semibold"
          >
            JOIN DISCORD
          </a>
        </section>

        <section>
          <Footer />
        </section>
      </main>
    </Page>
  );
}

export async function getServerSideProps() {
  // const data = await getHuntRank();
  const data = [
    {
      user_uuid: 'test',
      user_name: 'Not started',
      user_pic: '',
      value: 0,
    },
  ];
  return {
    props: {
      huntRank: data || [],
    },
  };
}
