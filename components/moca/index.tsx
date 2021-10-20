import React, { useEffect, useState } from 'react';
import classnames from 'classnames';

import MocaCard, { DataItem } from '../moca-card';
import Bullet from './Bullet';
import avatar1 from '../../public/images/avatar1.png';

import styles from './index.module.less';

const dataList = [
  {
    url: 'https://assets.foundation.app/5Y/dX/Qmbu5SDtGjmr1xhAQie46fxrCVzBhiaZ55rCSSaPHe5YdX/nft.mp4',
    author: ['Baiwei'],
    twitter: ['https://twitter.com/baiweiart'],
    title: 'Identity',
    platform: 'Foundation',
    platformLink: 'https://foundation.app/@baiwei/identity-11381',
    type: 'video',
    desc: 'Energy bundle,Dancing through the tides of life,Looped, experiencing,The artwork explores the concept of identity on a personal level. Artist’s identity is shown as an animated specimen. This energy bundle is struggling to find and express itself within the limited space - connecting, reflecting, dancing, fighting to escape, and eventually embracing itself. The identity finds balance and transcends the limits.The loop of life begins again.Music by Baiwei.Inspired by Daoist dualist thought.',
  },
  {
    url: 'https://res.cloudinary.com/asynchronous-art-inc/image/upload/h_1280,f_auto/art/0x4bd3d08bae19c45b3bce064bfec0d5865baf458a/QmU9w19o9oWWoHvUH9JxDNdfQcuh4PGfLve6xkR9FrqE2s?01d3',
    author: ['IOYOI'],
    twitter: ['https://twitter.com/ioyoiioaoi'],
    title: 'Fortune telling bird 2.0',
    platform: 'Async',
    platformLink:
      'https://async.art/zh/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-2889?1629791698866',
    type: 'image',
    desc: '區塊鏈的社群通常用紅色眼睛代表幣圈覺醒，所有的市場事件被一切程序所掌控。創作者以鳥卦的形式製作日夜兩種版本，白天以XP桌面為背景，前面則擺放程序出錯的視窗，計算出一切可能出錯的視窗',
  },
  {
    url: 'https://lh3.googleusercontent.com/lmKHUmch0ZY7_iFsBIGu93n1w9e_Erd9wl54j-F-WCRHqOrJaWnZtYEBoNKBD9Z4sdXFKILPWNqF5_VoPXlQUS96SCIF-6yYcrqHHA=w600',
    author: ['metaSynth'],
    twitter: ['https://twitter.com/meta_Synth'],
    title: 'Time Currents',
    platform: 'OpenSea',
    platformLink:
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/92854960588464254555946828023973119272598955986146577935146406044824070258689/',
    type: 'image',
    desc: 'Time Currents is created amid musings: life unfolds itself in a patterned manner, yet we hold the power to choose how to ride waves of time. The pixels, which represent time units, are liquified and reborn into new shapes and shades.',
  },
  {
    url: 'https://storage.opensea.io/files/e27358c503e08a6b9896782a4761b3c2.mp4#t=0.001',
    author: ['N!q'],
    twitter: ['https://twitter.com/1percentNiq'],
    title: 'LuckyMask',
    platform: 'OpenSea',
    platformLink:
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/50607888083714916310772034386603713942255032774816121732233382217531961376769',
    type: 'video',
    desc: `《LuckyMask 生肖一刻值千金》是致敬圆明园十二生肖兽首铜像的数字生成作品，时长十五分钟，每一秒都会生成12*2个数字生成金色生肖兽首。作品中包含了子时(鼠)、丑时(牛)、寅时(虎)、卯时(兔)、辰时(龙)、巳时(蛇)、午时(马)、未时(羊)、申时(猴)、酉时(鸡)、戌时(狗)、亥时(猪)，总共12款面具主题，在一定范围的随机性内，一分钟共生成了1440个面具。
    在当年十二生肖铜像曾被时人称为“水力钟”。每日，十二生肖铜像会依次轮流喷水，分别代表全日不同时分，后来由于战乱流失海外。如今我使用数字与算法手段再创作，将生成渲染的帧映射到现实一分钟的每一秒，再现其展现时间流逝的功用。
    作品生成基于“柏林噪声”的算法模式，它的变化趋势是随机但又具有连续性的。在计算机图形领域常常用于模拟许多大规模场景生成，例如地形、建筑和植被等。
    作品同样是映射了我的个人经历，从古董到数字，对应着我在元宇宙中觉醒自我，从传统设计领域转向了数字创作领域。
    这幅作品是LuckyCot Beast Friends系列的起源象征艺术品。在项目启动之时，收藏家将会收到到编号为#1~#12的作品。LuckyCot Beast Friends是3D艺术家Niq继Luckycot100之后的全新系列，将会是一系列AR/VR预备的3d格式的元宇宙面具Avatar作品，其创作将通过生成+VR绘制的方式进行。
    `,
  },
  {
    url: 'https://mkpcdn.com/videos/d833a76ed61c8fb08c66e7a3a37021ea_648507.mp4',
    author: ['Reva'],
    twitter: ['https://twitter.com/Reva_fyw'],
    title: 'Starlike Inspirations',
    platform: 'makersplace',
    platformLink: 'https://makersplace.com/vulcandao/starlike-inspirations-1-of-1-79089/',
    type: 'video',
    desc: `The inspiration is like a sudden spark lit a star.
    The stars lit up each other and spread into a universe of thoughts.
    What if we try to squeeze or fold the universe?
    Maybe it will burst out a great idea.
    
    All images of this work are generated from fractal functions.
    BGM by Eric Yang.`,
  },
  {
    url: 'https://storage.opensea.io/files/91c3f9c2c033a5df9ce39c9f294c85a2.mp4#t=0.001',
    author: ['Riniifish'],
    twitter: ['https://twitter.com/riniifish'],
    title: 'Crew',
    platform: 'OpenSea',
    platformLink:
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/44442949386796894431554556088612716344816748171023677202865271269590562766849',
    type: 'video',
    desc: `Crew, a group of tiny independent light-sensitive tissues, are very sensitive to light. While the sun looks like it's always on to humans, to the bugs, it seems like a constant source of light that is bright and dim and not very stable.`,
  },
  {
    url: 'https://storage.opensea.io/files/39837aa0a5d1686f3f8d7b0f93afb49e.mp4#t=0.001',
    author: ['Sleepy'],
    twitter: ['https://twitter.com/0x13BlockBeats'],
    title: 'The Flower',
    mcp: 'https://mycryptoprofile.io/profile/@0x13blockbeats',
    platform: 'foundation',
    platformLink: 'https://foundation.app/@0x13BlockBeats/~/97092',
    type: 'video',
    desc: `The Flower Generative art by Sleepy. About beauty, about love, about radiance, about dreams, about life. 花儿，Sleepy的生成艺术作品，关于美、关于爱、关于璀璨、关于梦想、关于生命。
    `,
  },
  {
    url: 'https://bee-5.gateway.ethswarm.org/bzz/738979070073d6727872a3e786e4930d2e2014a76ca54db6292beff5d5b61158',
    author: ['TingSong'],
    twitter: ['https://twitter.com/Song11Ting'],
    title: 'Cyber Wonder Woman',
    platform: 'OpenSea',
    platformLink: 'https://opensea.io/assets/0x4690b1efab2ea1232fb95a89e175abd3331b0f62/5',
    type: 'image',
    desc: `"Cyber Wonder Woman" was identified as conditional class probability 0.80-0.85 as a real woman. We have really set a “Cyber wonder woman” in the cyber world.《Cyber Wonder Woman》是基于区块链的、AI 生成的中国科技女性力量数字雕塑。作品希望所有卓越的科技女性，实现自己 的梦想。`,
  },
  {
    url: 'https://lh3.googleusercontent.com/pNys7eUxGkJpUcVwiE5mf_xy8m8a9DRcRtdpV7ixscTaDTgfj9AONnETwM1tAwT9ujX-Ls7N99Q4zTejRKnGnEubVZ4OUMa2Xp0XWA=w600',
    author: ['Tonran'],
    twitter: ['https://twitter.com/Tonran1'],
    title: 'Children of space',
    platform: 'OpenSea',
    platformLink:
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/37724347662963635848339696881091927783627379649293885295953155393587333038081/',
    type: 'image',
    desc: 'Sleeping... waiting for the moment of awakening.',
  },
  {
    url: 'https://assets.foundation.app/Er/1U/QmdKnHMGp1f3c8UY18ZbnVP5VH1A7po8HK3ZRM6hNTEr1U/nft_q4.mp4',
    author: ['XI'],
    twitter: ['https://twitter.com/xix2033'],
    title: `Avatar's way of death`,
    platform: 'Foundation',
    platformLink: 'https://foundation.app/@xix/l-avatar-s-way-of-death-l-86967',
    type: 'video',
    desc: `Zhuangzi sleeps with the skull is a story from "Zhuangzi · Outer chapters". The artist quoted this story to discuss the relationship between the diversity of Avatar and the death of virtual identities.
    The work will be sold in two editions. Artists confuse the value of groups and individuals by bidding greatly differently.
    
    庄子叹骷髅是出自《庄子·外篇》的一个故事，艺术家引用这个故事旨在探讨Avatar身份的多样性和虚拟身份死亡的关系。
    作品将会有两个版本出售，艺术家通过差异极大出价，混淆群体价值和个人价值。`,
  },
  {
    url: 'https://mkpcdn.com/1000x/314198c652390f01cd4147a2c0cf2035_236718.jpg',
    author: ['Debbie Digital'],
    twitter: ['https://twitter.com/DebbieHdigital'],
    title: 'Spiritual Rebirth',
    platform: 'makersplace',
    platformLink: 'https://makersplace.com/debbiehdigital/spiritual-rebirth-1-of-1-80764/',
    type: 'image',
    desc: 'In order to rise from your own darkness, sometimes you have to die inside and believe in yourself and love yourself to become a new thing. This is a personal project for Shanghai Metaverse Week.',
  },
  {
    url: 'https://ipfs.pixura.io/ipfs/QmdU2YNW1coTtxHYEqC93LCrdHuPXPrDqKYDEwe6e84eyg/176FINAL.png',
    author: ['Facu'],
    twitter: ['https://twitter.com/fakito__'],
    title: 'SOÑAR DESPIERTO ',
    platform: 'superrare',
    platformLink: 'https://superrare.com/artwork-v2/so%C3%B1ar-despierto-27345',
    type: 'image',
    desc: 'La visión se te empaña de oscuridad al menos que cierres los ojos, ahí se encuentra todo el color, ahí están tus sueños y tus metas materializándose poco a poco en frente tuyo como por arte de magia. Al abrirlos te preguntas donde se fueron, como puede ser que no los veas más si estuviste tan cerca suyo. Queres volver a estar rodeado de todos esos colores pero se fueron, no los encontrás ni de noche ni de día. Sabes que están ahí, solo hace falta hacer cara a la oscuridad que te empaña los ojos cuando los abrís.',
  },
  {
    url: 'https://lh3.googleusercontent.com/sRxWbdZmYYI4MR1qnLfhDjIUIgl6WjCwG4nIuck7q3_VB3dgtdERNFOGtbqXwvhisdglq6FENxdHLOhi07csIoPz7ZZr3hC5P6xdag',
    author: ['Jay Delay'],
    twitter: ['https://twitter.com/Jay_Delay'],
    title: 'Reptile Style',
    platform: 'rarible',
    platformLink:
      'https://rarible.com/token/0x9b26616ee0cbd466e072e86a99b4bfa4a3489bf4:10042?tab=owners',
    type: 'image',
    desc: 'ELECTRIC FEELINGS ',
  },
  {
    url: 'https://ipfs.pixura.io/ipfs/QmVy5NeTWjxyYHJ3Xaii8Dc1KunVShPQonuy93mmbtpkDS/AncientGallery.jpg',
    author: ['Killer Acid'],
    twitter: ['https://twitter.com/killeracid'],
    title: 'Ancient Gallery',
    platform: 'dropbox',
    platformLink: 'https://superrare.com/artwork-v2/ancient-gallery--28790',
    type: 'image',
    desc: `Ancient Gallery playfully references the Doors rock classic ‘The End’ by juxtaposing the ancient mythological idea (channeled through 60's pop rock) of choosing a mask to wear with a scene of an NFT collector selecting an avatar from his collection. There is a bit of implied violence in the piece, a subtle nod to the individual ego death when one decides to be anonymous. The collector can be seen in the foreground, walking excitedly with his new face while the old him has been severed. This piece was created for The MOCA portion of Shanghai Metaverse week. The theme for the exhibit is Self Awakened: Quest for Identity. While meditating on this idea I heard ‘The End’ come through the radio and I made the random association between the lyrics and the assignment. Can you dig it, anon?`,
  },
  {
    url: 'https://pro2-bar-s3-cdn-cf4.myportfolio.com/02c5201375c3706250b26cf840ace79c/fb4df39b-0b0f-4fed-92c0-1765a023bb84_rw_1920.png?h=ec955c528be858843356532460634b02',
    author: ['Fabin Rasheed'],
    twitter: ['https://twitter.com/fabinrasheed'],
    title: 'Astraglade',
    platform: 'Opensea',
    platformLink: 'https://opensea.io/assets/astraglade',
    type: 'image',
    desc: '',
  },
  {
    url: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQcY4U81n3zdY3SbYi4QfUfBKqbPJIU1_P4-CuNVniRcw_d6w',
    author: ['Milton Sanz'],
    twitter: ['https://twitter.com/miltonsanz7'],
    title: 'Submerged',
    platform: 'superrare',
    platformLink: 'https://superrare.com/artwork-v2/submerged-27100',
    type: 'image',
    desc: '',
  },
  {
    url: 'https://ipfs.pixura.io/ipfs/QmUDiLnqAQmkDyZCCEnnJx36FEiwFQtE7h6Nf9QpZ1t3Qe/Mamihlapinatapai.png',
    author: ['Milton Sanz'],
    twitter: ['https://twitter.com/miltonsanz7'],
    title: 'Mamihlapinatapai',
    platform: 'superrare',
    platformLink: 'https://superrare.com/artwork-v2/mamihlapinatapai-26402',
    type: 'image',
    desc: '',
  },
  {
    url: 'https://ipfs.pixura.io/ipfs/QmR52y7dSwB16G4DyVyG4FmYJ9fd2gmqqj9Xza3ZKP48kn/Overthinking.gif',
    author: ['Skygolpe'],
    twitter: ['https://twitter.com/skygolpe'],
    title: 'Overthinking',
    platform: 'superrare',
    platformLink: 'https://superrare.com/artwork-v2/overthinking-10659',
    type: 'image',
    desc: 'The mind is a complex system that controls our thoughts and emotions. External pressures that modern society places on us as individuals can quickly become internalized to morph into mental millstones. This artwork captures the essence of our inability to rid ourselves of these issues. The background of the artwork first provides us with this view of this world. The coarse red texture is reminiscent of the external pressures that exist within society; dark, negative clouds are never too far from us. The textural qualities of the paint on the digital canvas help to reinforce the suggestion of the duality of the artwork; existing both physically and mentally. We see a subject silhouetted in this universe, struggling to avoid these mental stresses. The nondescript form tells us that this could be anyone. We can see that avoidance of these external factors is impossible as the built-up red-colored pressure spills inwards through the subject’s ears. Soundwaves soon become thoughts that take on gloomy green and grey tones. The face is obscured by these thoughts as if consuming and overwhelming the subject. An artist alone, in the solitude of their mind, alienated from anything other than thoughts of creation; a mind saturated like their paint-soaked sponge. Thought upon thought; nothing else; overthinking, until a zenith is finally reached to repeat through an infinite cycle. Puffin@Cent',
  },
  {
    url: 'https://res.cloudinary.com/asynchronous-art-inc/image/upload/h_1280,f_auto/art/0xdc546f477f273bcf327297bf4adcb671b5f20be1/QmcDan2mA93ZMV3izqLVNhCBqfPg6nuCRZuddVidNzURkr?6a0b',
    author: ['Sparrow'],
    twitter: ['https://twitter.com/blackboxdotart'],
    title: 'Eternity',
    platform: 'TBD',
    platformLink: 'https://async.art/art/master/0xb6dae651468e9593e4581705a09c10a76ac1e0c8-3276 ',
    type: 'image',
    desc: `"Eternity is in love with the productions of time." Night layer: "For man has closed himself up, till he sees all things thro' narrow chinks of his cavern"
    Sunrise layer: "He who binds to himself a joy Does the wingèd life destroy; But he who kisses the joy as it flies Lives in eternity's sunrise."
    Day layer: "If the doors of perception were cleansed everything would appear to man as it is, infinite."
    Sunset layer: "The moon like a flower In heaven's high bower, With silent delight, Sits and smiles on the night."
    All quotes from William Blake, who has taught me much about The Self, identity, and being in the world.  I turned to Blake to get inspiration for what it means to be in these new virtual worlds we are creating.
    `,
  },
  {
    url: 'https://d2iccaf7eutw5f.cloudfront.net/0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7/4963/large',
    author: ['Arc4g'],
    twitter: ['https://twitter.com/arc4g'],
    title: 'Unveil',
    platform: 'zora',
    platformLink: 'https://zora.co/collections/zora/4963',
    type: 'video',
    desc: '',
  },
  {
    url: 'https://assets.foundation.app/Td/Z9/QmcfnwASxnrH2hJnT5Lz83ADcvCpMof4GMCM31W9T7TdZ9/nft_q4.mp4',
    author: ['Arc4g', 'Baiwei'],
    twitter: ['https://twitter.com/arc4g', 'https://twitter.com/baiweiart'],
    title: 'Selphy',
    platform: 'Foundation',
    platformLink: 'https://foundation.app/@baiwei/selphy-77080',
    type: 'video',
    desc: `Collaboration between ARC4G and baiwei.

    An isolated element "Selphy" is injected into an experimental Amplified Reality Cube, also known as the "ARC". The incubated specimen symbolically undergoes the experience of existence, following the laws and music of given reality. With the achievement of metaphorical (and literal) breakthrough, the element transcends into a parallel ARC - the realm of mind and spirit. There, the concept of ego collapses revealing Selphy’s essential form. Awakened to the ultimate truth that "the journey is what matters", Selphy bends time and space to experience existence once more.
    
    Selphy pronounced as "self - I" associates with the concept of ego; thus its journey implies a process of self-awakening.
    
    The background music created by baiwei is also encrypted with Chinese calligraphy for "self-awakening".`,
  },
  {
    url: 'https://ipfs.pixura.io/ipfs/QmdBjsyWhVxCpYAk6RZHUEw6wbEw1s771yZ3ksp2gDkk5M/crashingintoMotherBoardplainwhiteSUPERRARE.glb',
    author: ['Rutger Van Der Tas', 'IOYOI'],
    twitter: ['https://twitter.com/rutgervandertas', 'https://twitter.com/ioyoiioaoi'],
    title: 'Crashing into Motherboard',
    platform: 'superrare',
    platformLink:
      'https://superrare.com/artwork-v2/crashing-into-motherboard---%E6%92%9E%E4%B8%8A%E4%B8%BB%E6%A9%9F%E6%9D%BF-28937',
    type: '3d',
    desc: 'The Motherboard is the backbone of the computer. Without it, none of the computer pieces, such as the CPU, GPU, or hard drive, could interact.The Internet and blockchain are becoming the backbone of our society. The devices in our lives are connected to our neural system. We indulge ourselves in the digital highway escapades, disconnecting ourselves from the direct touchable world around us. We as humans need to find the right balance between online and offline time. We are waking up to our new self. While the Old World still reigns over our heads. ',
  },
  {
    url: 'https://ipfs.pixura.io/ipfs/QmVXAA74QVsZ52HBEKwPnFLWRE8Nqd4G38KERbGPvLsHXz/IOYOIandRutgervanderTASuniversalplaygroundunderfire.glb',
    author: ['Rutger Van Der Tas', 'IOYOI'],
    twitter: ['https://twitter.com/rutgervandertas', 'https://twitter.com/ioyoiioaoi'],
    title: 'Universal playground under fire',
    platform: 'superrare',
    platformLink:
      'https://superrare.com/artwork-v2/universal-playground-under-fire.---%E9%81%8A%E6%A8%82%E5%A0%B4%E5%8F%97%E5%88%B0%E6%8A%A8%E6%93%8A-28943',
    type: '3d',
    desc: 'Our Awaking Self is at the doorstep. But do we open the door to let her in? 我們覺醒的自我就在門口。但我們是否打開門，讓她進來？',
  },
  {
    url: 'https://lh3.googleusercontent.com/JNF63vC9DLy5aOsxHVdcLhuSjF3S1575f55yx1yd1CVY-X3qng5IYt5ASZgeLT8brurAfKSW-pr_D1daNVpZpp8BhOACYLLordDlvw=w600',
    author: ['LuluxXX', 'Riniifish'],
    twitter: ['https://twitter.com/luluixixix', 'https://twitter.com/riniifish'],
    title: '闯入元宇宙世界的女孩',
    platform: 'knownorigin',
    platformLink:
      'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/52976075206626058040109150762651901835369219567962475591099848262217222848513',
    type: 'image',
    desc: `“collaboration with chinese cryptoartist @riniifish . created as our contribution to the "Metaverse Week 2021" in Shangai . big thanks to MOCA (Museum of Crypto Art) for the invitation and introduction. 感谢MOCA :)
    "Self-sovereign identities, independent personalities, and creative avatars are the prerequisites and assets for people to enter the metaverse to work, live and play freely in future"
    `,
  },
  {
    url: 'https://koda-image-service-gp2s5beobq-uc.a.run.app/cdn/images/network/1/edition/2343000',
    author: ['LuluxXX', 'Riniifish'],
    twitter: ['https://twitter.com/luluixixix', 'https://twitter.com/riniifish'],
    title: '闯入元宇宙世界的女孩',
    platform: 'knownorigin',
    platformLink: 'https://knownorigin.io/gallery/2343000-rin-ii-luluxxx',
    type: 'image',
    desc: `“collaboration with chinese cryptoartist @riniifish . created as our contribution to the "Metaverse Week 2021" in Shangai . big thanks to MOCA (Museum of Crypto Art) for the invitation and introduction. 感谢MOCA :)
    "Self-sovereign identities, independent personalities, and creative avatars are the prerequisites and assets for people to enter the metaverse to work, live and play freely in future"
    `,
  },
  {
    url: 'https://mkpcdn.com/videos/563c5e505f1b9500444f662fb8a0e3e4_331482.mp4',
    author: ['Debbie Digital', 'Reva'],
    twitter: ['https://twitter.com/DebbieHdigital', 'https://twitter.com/Reva_fyw'],
    title: 'Self-Recognition',
    platform: 'makersplace',
    platformLink: 'https://makersplace.com/debbiehdigital/self-recognition-1-of-1-80749/',
    type: 'video',
    desc: `"Self-recognition leads to self-awakening. Everyone can be as bright as stars, as gorgeous as flowers."
    This is a collaboration piece created by Debbie H Digital and Reva for Metaverse exhibition. Debbie's portrait and the geometric background of Reva have well balanced together and achieved to make a great depth and intricacy. The image of the portrait helped to balance the detailed effects of Reva's moving parts.¸
    `,
  },
];

const generText = (n) => {
  const list = [];
  for (let i = 0; i < n; i = i + 1) {
    list.push({
      desc: `Time Currents is created amid musings: life unfolds itself in a patterned manner, yet we
      hold the power to choose how to ride waves of time. The pixels, which represent time units,
      are liquified and reborn into new shades and shapes.`.slice(0, Math.random() * 300),
      title: 'title',
      author: ['author'],
      twitter: ['baidu.com'],
      platform: 'plat',
      platformLink: 'baidu.com',
      type: 'img',
      url: avatar1,
    });
    list.push({
      desc: `Time Currents is created amid musings: life unfolds itself in a patterned manner, yet we
      hold the power to choose how to ride waves of time. The pixels, which represent time units,
      are liquified and reborn into new shades and shapes.`.slice(0, Math.random() * 300),
      title: 'title',
      author: ['author1', 'author2'],
      twitter: ['baidu.com', 'bing.com'],
      platform: 'plat',
      platformLink: 'baidu.com',
      type: 'img',
      url: avatar1,
    });
  }
  list.sort((a, b) => {
    return a.desc.length - b.desc.length;
  });
  return list;
};
const lists = dataList; // generText(20);

export default function Moca({ backCall }) {
  const wrap = classnames('flex w-screen min-h-screen bg-black justify-center', styles.wrap);
  const cls = classnames('flex justify-evenly items-center flex-wrap', styles.container);
  const con = classnames('flex justify-center items-center flex-wrap', styles.con);
  const [line, setLine] = useState(0);
  const [wid, setWid] = useState(0);
  // 发送弹幕
  useEffect(() => {
    const clientWidth = window.innerWidth || document.body.clientWidth;
    if (clientWidth < 600) {
      setLine(1);
      setWid(300);
    } else if (clientWidth < 900) {
      setLine(2);
      setWid(600);
    } else if (clientWidth < 1200) {
      setLine(3);
      setWid(900);
    } else {
      setLine(4);
      setWid(1200);
    }
  }, []);
  return (
    <div className={wrap} id="screen">
      <div className={styles.box}>
        <div className={cls}>
          <div className={styles.head}>
            <div className={styles.title}>
              MOCA Exhibition: Self Awakened
              <img src="/images/Vector.png" />
            </div>
            <div className={styles.cn}>MOCA 展：自我的觉醒</div>
            {/* <div className={styles.back} onClick={backCall}>
              <span className={styles.name}>metaverse exhibition</span>
              <div className={styles.ic}>
                <img src="/images/arrow.png"></img>
              </div>
            </div> */}
          </div>
          <div className={styles.list}>
            <div
              className={con}
              style={{
                MozColumnCount: line,
                WebkitColumnCount: line,
                columnCount: line,
                width: wid,
              }}
            >
              {lists.map((item, index) => {
                return <MocaCard {...item} key={index} />;
              })}
            </div>
            <div className={styles.text}>
              <div>*All the above artworks will be updated and displayed by October 22nd</div>
            </div>

            <Bullet channel="moca" domId="screen" />
          </div>
        </div>
      </div>
    </div>
  );
}
