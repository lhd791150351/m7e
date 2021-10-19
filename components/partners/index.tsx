import React from 'react';
import classnames from 'classnames';
import PageTitle from '../page-title';
import Card from '../logo-card';
import avatar from '../../public/partners-logo/new/unnamed.png';
import avatar1 from '../../public/partners-logo/new/unnamed1.png';
import avatar2 from '../../public/partners-logo/new/unnamed2.png';
import avatar3 from '../../public/partners-logo/new/unnamed3.png';
import avatar4 from '../../public/partners-logo/new/unnamed4.png';
import avatar5 from '../../public/partners-logo/new/unnamed5.png';
import avatar6 from '../../public/partners-logo/new/unnamed6.png';
import avatar7 from '../../public/partners-logo/new/unnamed7.png';
import avatar8 from '../../public/partners-logo/new/unnamed8.png';
import avatar9 from '../../public/partners-logo/new/unnamed9.png';
import avatar11 from '../../public/partners-logo/new/next-scene.jpeg';
import avatar10 from '../../public/partners-logo/new/mirror-world.png';
import bonnybb from '../../public/event-support/new/bonnybb.png';
import sponsors from '../../public/event-sponsors/new/unnamed.png';
import sponsors1 from '../../public/event-sponsors/new/unnamed1.png';
import sponsors2 from '../../public/event-sponsors/new/unnamed2.png';
import sponsors3 from '../../public/event-sponsors/new/follow.top.png';
import sponsors4 from '../../public/event-sponsors/new/unnamed4.png';
import sponsors5 from '../../public/event-sponsors/new/unnamed5.png';
import sponsors6 from '../../public/event-sponsors/new/unnamed6.png';
import sponsors7 from '../../public/event-sponsors/new/mcp.png';
import sponsors8 from '../../public/event-sponsors/new/unnamed8.png';
import sponsors9 from '../../public/event-sponsors/new/unnamed9.png';
import sponsors10 from '../../public/event-sponsors/new/unnamed10.png';
import sponsors11 from '../../public/event-sponsors/new/unnamed11.png';
import sponsors12 from '../../public/event-sponsors/new/unnamed12.png';
import sponsors13 from '../../public/event-sponsors/new/utuone.png';
import sponsors14 from '../../public/event-sponsors/new/flow.png';
import support from '../../public/event-support/new/unnamed.png';
import support1 from '../../public/event-support/new/unnamed1.png';
import support2 from '../../public/event-support/new/unnamed2.png';
import support3 from '../../public/event-support/new/unnamed3.png';
import support4 from '../../public/event-support/new/unnamed4.png';
import support5 from '../../public/event-support/new/unnamed5.png';
import support6 from '../../public/event-support/new/unnamed6.png';
import support7 from '../../public/event-support/new/unnamed7.png';
import support8 from '../../public/event-support/new/unnamed8.png';
import support9 from '../../public/event-support/new/unnamed9.png';
import support10 from '../../public/event-support/new/unnamed10.png';
import support11 from '../../public/event-support/new/unnamed11.png';
import support12 from '../../public/event-support/new/unnamed12.png';
import metaestate from '../../public/event-support/new/metaestate.png';
import support14 from '../../public/event-support/new/unnamed14.png';
import support15 from '../../public/event-support/new/unnamed15.png';
import support16 from '../../public/event-support/new/unnamed16.png';
import support17 from '../../public/event-support/new/unnamed17.png';
import support18 from '../../public/event-support/new/unnamed18.png';
import omarblack from '../../public/event-support/new/omarblack.png';
import blockvita from '../../public/event-support/new/blockvita.png';
import dg from '../../public/event-support/new/dg.png';
import cryptomondays from '../../public/event-support/new/cryptomondays.jpeg';
import tianmo from '../../public/event-support/new/tianmo.png';
import metacat from '../../public/partners-logo/new/metacat.png';
import hotneutrostudio from '../../public/media/hot-neutro-studio.png';
import artgee from '../../public/media-support/artgee.png';
import cesme from '../../public/event-support/new/cesm-E.png';
import mrameng from '../../public/media/mrmeng.png';
import chainnews from '../../public/media-support/media15.png';
import cointelegraphcn from '../../public/media-support/cointelegraphcn.png';
import panews from '../../public/media-support/media18.png';
import chaindd from '../../public/media-support/media12.png';
import blockbeats from '../../public/media-support/media16.png';
import odaily from '../../public/media-support/media20.png';
import tuoluocaijing from '../../public/media-support/media4.png';
import tangent from '../../public/media-support/media8.png';
import orangepaper from '../../public/media-support/media10.png';
import tencent from '../../public/media-support/media19.png';
import jazzyear from '../../public/media-support/media6.png';
import tmtpost from '../../public/media-support/media21.png';
import geekpark from '../../public/media-support/geekpark.png';
import jiemiannews from '../../public/media-support/jiemiannews.png';
import eightbit from '../../public/media-support/media1.png';
import xiyuecaijing from '../../public/media/xiyuecaijing.png';
import sc from '../../public/partners-logo/new/Semicolon C.png';
import tkys from '../../public/event-support/new/tkys.png';
import xfhk from '../../public/event-support/new/xfhk.png';

import styles from './index.module.less';

const LIST = [
  {
    title: 'Legendary Partners',
    list: [
      { avatar: sponsors9, link: '', name: 'Ownership Labs' },
      { avatar: sponsors8, link: '', name: 'Litentry' },
      { avatar: sponsors13, link: '', name: 'UTU.ONE' },
    ],
  },
  {
    title: 'Epic Partners',
    list: [
      { avatar: sponsors1, link: '', name: 'Polygon' },
      { avatar: sponsors14, link: '', name: 'FLOW' },
      { avatar: sponsors, link: '', name: 'Harmony' },
      { avatar: sponsors2, link: '', name: 'Nash Metaverse' },
      { avatar: sponsors10, link: '', name: 'RMRK' },
      { avatar: sponsors4, link: '', name: 'MixMarvel' },
      { avatar: sponsors6, link: '', name: 'Tezos' },
      { avatar: avatar6, link: '', name: 'Mynft' },
      { avatar: sponsors12, link: '', name: 'Social Future' },
      { avatar: sponsors3, link: '', name: 'Follow.top' },
    ],
  },
  {
    title: 'Top Partners',
    list: [
      { avatar: avatar3, link: '', name: 'MOCA (Museum of Crypto Art)' },
      { avatar: sponsors7, link: '', name: 'My Crypto Profile' },
      { avatar: avatar5, link: '', name: 'Mask Network' },
    ],
  },
  {
    title: 'Industry Partners',
    list: [
      { avatar: support, link: '', name: 'Binance' },
      { avatar: support9, link: '', name: 'imToken' },
      { avatar: support10, link: '', name: 'Yuanyuzhou Venture' },
      { avatar: support16, link: '', name: 'Digital Renaissance' },
    ],
  },
  {
    title: 'Exhibition Support',
    list: [
      { avatar, link: '', name: 'Technology Art' },
      { avatar: avatar9, link: '', name: 'Cryptoart.ai' },
      { avatar: bonnybb, link: '', name: 'Bonnybb.eth' },
      { avatar: metacat, link: '', name: 'MetaCat' },
      { avatar: support17, link: '', name: 'Super ACG' },
      { avatar: sc, link: '', name: 'Semicolon C' },
      { avatar: support3, link: '', name: 'Innovation+ Art' },
      { avatar: tianmo, link: '', name: 'Talent mart' },
    ],
  },
  {
    title: 'Content Support',
    list: [
      { avatar: support8, link: '', name: 'Crypto Playground' },
      { avatar: avatar1, link: '', name: 'M360' },
      { avatar: hotneutrostudio, link: '', name: 'Hot Neutron Studio' },
      { avatar: avatar11, link: '', name: 'Next Scene' },
    ],
  },
  {
    title: 'Metaverse Support',
    list: [
      { avatar: dg, link: '', name: 'Decentral Games' },
      { avatar: sponsors11, link: '', name: 'MetaV' },
      { avatar: metaestate, link: '', name: 'MetaEstate' },
      { avatar: support15, link: '', name: 'Sandbox' },
      { avatar: support11, link: '', name: 'OVR' },
      { avatar: support2, link: '', name: 'Evolution Land' },
      { avatar: avatar10, link: '', name: 'Mirror World' },
    ],
  },
  {
    title: 'Art Support',
    list: [
      { avatar: support7, link: '', name: 'Hanshan Art Museum' },
      { avatar: support12, link: '', name: 'Arium' },
      { avatar: cesme, link: '', name: 'CESM' },
      { avatar: artgee, link: '', name: 'ArtGee' },
      { avatar: sponsors5, link: '', name: 'da Vinci' },
      { avatar: tkys, link: '', name: 'Trend Key FILM' },
      { avatar: xfhk, link: '', name: 'FUNTASTIC' },
    ],
  },
  {
    title: 'Music Support',
    list: [
      { avatar: omarblack, link: '', name: 'OMARBLACK' },
      { avatar: support4, link: '', name: 'Caotai Music' },
      { avatar: support14, link: '', name: 'Sound Blanc' },
    ],
  },
  {
    title: 'Community Support',
    list: [
      { avatar: blockvita, link: '', name: 'BlockVita' },
      { avatar: avatar7, link: '', name: 'Blocklike' },
      { avatar: support6, link: '', name: 'MetaVenturer' },
      { avatar: support1, link: '', name: 'OG Labs' },
      { avatar: support5, link: '', name: 'Sssnodes' },
      { avatar: avatar8, link: '', name: 'Lying Gallery' },
      { avatar: cryptomondays, link: '', name: 'Crypto Mondays' },
      { avatar: mrameng, link: '', name: 'Mr Ameng' },
    ],
  },
  {
    title: 'Metaverse Exclusive Live Stream',
    list: [{ avatar: support18, link: '', name: 'Decentraland' }],
  },
  {
    title: 'Strategic Media Partners',
    list: [
      { avatar: chainnews, link: '', name: 'ChainNews' },
      { avatar: cointelegraphcn, link: '', name: 'Cointelegraph CN' },
      { avatar: panews, link: '', name: 'PANews' },
    ],
  },
  {
    title: 'Blockchain Media Partners',
    list: [
      { avatar: chaindd, link: '', name: 'CHAINDD' },
      { avatar: blockbeats, link: '', name: 'BlockBeats' },
      { avatar: odaily, link: '', name: 'ODAILY' },
      { avatar: tuoluocaijing, link: '', name: 'tuoluocaijing' },
      { avatar: tangent, link: '', name: 'TANGENT' },
      { avatar: orangepaper, link: '', name: 'orangepaper' },
      { avatar: eightbit, link: '', name: '巴比特' },
      { avatar: xiyuecaijing, link: '', name: '禧钥财经' },
    ],
  },
  {
    title: 'Tech Media Partners',
    list: [
      { avatar: tencent, link: '', name: '腾讯科技（区块链鹅探长）' },
      { avatar: jazzyear, link: '', name: 'JAZZYEAR' },
      { avatar: jiemiannews, link: '', name: '界面新闻' },
      { avatar: tmtpost, link: '', name: 'TMTPOST' },
      { avatar: geekpark, link: '', name: 'GEEKPARK' },
    ],
  },
  {
    title: 'Event Coordinators',
    list: [
      { avatar: avatar2, link: '', name: 'NFT4Metaverse' },
      { avatar: avatar4, link: '', name: 'CryptoC' },
    ],
  },
];

export default function partnersPartners() {
  const cls = classnames(styles.container);
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-black">
      <PageTitle title="Partners" subTitle="合作方" />
      <div className={cls}>
        {LIST.map((item) => {
          return (
            <div className={styles.box} key={item.title}>
              <h4 className={`${styles.title} text-left text-white fonts-kumar-one mt-40`}>
                {item.title}
              </h4>
              {/* <div className="grid grid-cols-2 lg:grid-cols-5"> */}
              <div className="flex w-full justify-center flex-wrap">
                {item.list.map((partner) => {
                  return (
                    <Card
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
        <div className={styles.text}>
          <div>*The above partners are in alphabetical order and are being added...</div>
        </div>
      </div>
    </div>
  );
}
