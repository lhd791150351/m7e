import React from 'react';
import classnames from 'classnames';
import PageTitle from '../page-title';
import Card from '../logo-card';
import avatar from '../../public/speakers-logo/unnamed.jpeg';
import avatar1 from '../../public/speakers-logo/unnamed1.png';
import avatar2 from '../../public/speakers-logo/unnamed2.jpeg';
import avatar3 from '../../public/speakers-logo/unnamed3.jpeg';
import avatar4 from '../../public/speakers-logo/unnamed4.jpeg';
import avatar5 from '../../public/speakers-logo/unnamed5.jpeg';
import avatar6 from '../../public/speakers-logo/unnamed6.jpeg';
import avatar7 from '../../public/speakers-logo/unnamed7.jpeg';
import avatar8 from '../../public/speakers-logo/unnamed8.jpeg';
import avatar9 from '../../public/speakers-logo/unnamed9.jpeg';
import avatar10 from '../../public/speakers-logo/unnamed10.jpeg';
import avatar11 from '../../public/speakers-logo/unnamed11.jpeg';
import avatar12 from '../../public/speakers-logo/unnamed12.jpeg';
import avatar13 from '../../public/speakers-logo/unnamed13.png';
import avatar14 from '../../public/speakers-logo/unnamed14.png';
import avatar15 from '../../public/speakers-logo/unnamed15.jpeg';
import avatar16 from '../../public/speakers-logo/unnamed16.jpeg';
import avatar17 from '../../public/speakers-logo/unnamed17.png';
import avatar18 from '../../public/speakers-logo/unnamed18.jpeg';
import avatar19 from '../../public/speakers-logo/unnamed19.png';
import avatar20 from '../../public/speakers-logo/jay_delay.png';
import avatar21 from '../../public/speakers-logo/killer_acid .png';

import chw from '../../public/speakers-logo/程翰文  Litentry 创始人_CEO.jpg';
import jackey from '../../public/speakers-logo/姜超 Jackey MetaEstate联合创始人.jpeg';
import mss from '../../public/speakers-logo/三水 Mask Network 市场负责人.jpeg';
import amber from '../../public/speakers-logo/Amber, head of China, Dapper Labs.jpeg';
import carlHuang from '../../public/speakers-logo/Carl Huang Follow协议创始人.jpeg';
import charlieHu from '../../public/speakers-logo/Charlie Hu Polygon Head of South East Asia.jpeg';
import christineQian from '../../public/speakers-logo/Christine Qian Founder of M360.jpeg';
import colborn from '../../public/speakers-logo/colborn.glil.jpeg';
import diana from '../../public/speakers-logo/Diana VP of Community UTU.jpeg';
import hainaLyu from '../../public/speakers-logo/Haina Lyu, Cofounder _ Head of Creative,The ea + Partners.png';
import jessie from '../../public/speakers-logo/Jessie Founder of fat-garage.com memester for dataverse.jpg';
import jo from '../../public/speakers-logo/Jo Founder of Crypto Playground.jpeg';
import maryMa from '../../public/speakers-logo/Mary Ma，Co-founder of Rangers Protocol.png';
import stephen from '../../public/speakers-logo/Stephen CTO of UTU.jpeg';

import styles from './index.module.less';

const LIST = [
  {
    avatar: chw,
    name: '程翰文, CEO @Litentry',
  },
  {
    avatar: jackey,
    name: 'Jackey, Co-founder @MetaEstate',
  },
  {
    avatar: mss,
    name: '三水, CMO @Mask Network',
  },
  {
    avatar: amber,
    name: 'Amber, head of China @Dapper Labs',
  },
  {
    avatar: carlHuang,
    name: 'Carl Huang, Founder @Follow',
  },
  {
    avatar: charlieHu,
    name: 'Charlie Hu, Head of South East Asia @Polygon',
  },
  {
    avatar: christineQian,
    name: 'Christine Qian, Founder @M360',
  },
  {
    avatar: colborn,
    name: 'Colborn, Founder @MOCA',
  },
  {
    avatar: diana,
    name: 'Diana, VP @Community UTU',
  },
  {
    avatar: hainaLyu,
    name: 'Haina Lyu, Co-founder, Head of Creative @The ea + Partners',
  },
  {
    avatar: jessie,
    name: 'Jessie, Founder @fat-garage.com, memester @Dataverse',
  },
  {
    avatar: jo,
    name: 'Jo, Founder @Crypto Playground',
  },
  {
    avatar: maryMa,
    name: 'Mary Ma，Co-founder @Rangers Protocol',
  },
  {
    avatar: stephen,
    name: 'Stephen, CTO @UTU',
  },
];

export default function Speakers() {
  const cls = classnames(styles.container);
  return (
    <div
      className="relative flex flex-col justify-center items-center w-screen h-screen bg-black"
      style={{ paddingBottom: 50 }}
    >
      <PageTitle title="VIPs" />
      <div className={cls}>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          <Card avatar={avatar8} name="Baiwei" />
          <Card avatar={avatar2} name="IOYOI" />
          <Card avatar={avatar6} name="metaSynth" />
          <Card avatar={avatar1} name="Niq" />
          <Card avatar={avatar4} name="Reva" />
          <Card avatar={avatar9} name="Rinii fish" />
          <Card avatar={avatar3} name="Sleepy" />
          <Card avatar={avatar5} name="TingSong" />
          <Card avatar={avatar10} name="Ton ran" />
          <Card avatar={avatar7} name="XIx" />
          <Card avatar={avatar12} name="Arc4g" />
          <Card avatar={avatar14} name="Debbie Digital" />
          <Card avatar={avatar} name="Fabin Rasheed" />
          <Card avatar={avatar16} name="Facu" />
          <Card avatar={avatar20} name="Jay Delay" />
          <Card avatar={avatar21} name="Killer Acid" />
          <Card avatar={avatar18} name="Luluxx" />
          <Card avatar={avatar19} name="Milton Sanz" />
          <Card avatar={avatar15} name="Olive Allen" />
          <Card avatar={avatar11} name="Rutger Van Der Tas" />
          <Card avatar={avatar17} name="Skygolpe" />
          <Card avatar={avatar13} name="Sparrow" />
        </div>
        <div className={styles.text}>
          <div>* The above VIP list will be updated at any time</div>
        </div>
      </div>
    </div>
  );
}
