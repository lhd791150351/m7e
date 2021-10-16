import React from 'react';
import classnames from 'classnames';
import Image from 'next/image';
import LogoBg from '../../public/images/logo-bg.svg';
import styles from './styles.module.less';

interface Props {
  className?: string;
  avatar: StaticImageData;
  name?: string;
  cnName?: string;
  link?: string;
}

export default function Card({ link, avatar, name, cnName, className, ...props }: Props) {
  const cls = classnames(styles['speaker-card'], className);
  if (link) {
    return (
      <a href={link} {...props} className={cls}>
        <div className={styles.bg1}>
          <LogoBg className={styles['bg1-img']} />
          <div className={styles['avatar-box']}>
            <Image className={styles.avatar} src={avatar} layout="fill" alt="avatar" />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.block}></div>
          <span className={styles.title}>
            {name && <span>{name}</span>}
            {cnName && <span>{cnName}</span>}
          </span>
        </div>
      </a>
    );
  }
  return (
    <div {...props} className={cls}>
      <div className={styles.bg1}>
        <LogoBg className={styles['bg1-img']} />
        <div className={styles['avatar-box']}>
          <Image className={styles.avatar} src={avatar} layout="fill" alt="avatar" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.block}></div>
        <span className={styles.title}>
          {name && <span>{name}</span>}
          {cnName && <span>{cnName}</span>}
        </span>
      </div>
    </div>
  );
}
