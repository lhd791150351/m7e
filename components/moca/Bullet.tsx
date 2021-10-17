import React, { useEffect, useState, useRef } from 'react';
import classnames from 'classnames';
import { Input } from 'antd';
import BulletScreen from 'rc-bullets';
import { useWalletProvider } from '../web3modal';

import styles from './index.module.less';

const headUrl = 'https://zerosoul.github.io/rc-bullets/assets/img/heads/girl.jpg';
export default function Bullet({ channel, domId }) {
  const { connect, data: walletData } = useWalletProvider();
  const inputRef = React.useRef<any>(null);
  const [sending, setSending] = useState(false);
  const lastMsgId = useRef(null);
  const sendLock = useRef(false);
  const [focus, setFocus] = useState(false);
  const historyList = useRef(null);
  // 弹幕屏幕
  const [screen, setScreen] = useState(null);
  // 弹幕内容
  const [bullet, setBullet] = useState('');
  const [bulletRender, setBulletRender] = useState(0);
  let doGet = () => {
    console.log(1);
  };

  // 获取历史消息
  const getHistory = async () => {
    const res = await fetch(`/api/bullet?method=history&channel=${channel}`);
    const data = await res.json();
    console.log(data);
    return data.result.messages;
  };

  useEffect(() => {
    console.log('bullet');
    // 给页面中某个元素初始化弹幕屏幕，一般为一个大区块。此处的配置项全局生效
    const s = new BulletScreen(`#${domId}`, { duration: 20 });
    setScreen(s);

    // 定时获取弹幕
    let timer = null;
    const timeouts = [];
    doGet = async () => {
      const history = await getHistory();
      let currentShowList = [];
      if (historyList.current === null) {
        historyList.current = history;
      } else {
        history.find((item, index) => {
          /* eslint-disable */
          if (lastMsgId.current === item._id) {
            return true;
          }
          currentShowList.push(item);
          return false;
        });
      }

      /* eslint-disable */
      lastMsgId.current = history[0]._id;
      currentShowList = currentShowList.concat(historyList.current.splice(0, 2));

      currentShowList.forEach((item) => {
        const t = setTimeout(() => {
          s.push({
            msg: item.msg,
            // head: headUrl,
            color: '#eee',
            size: 'small',
            backgroundColor: 'rgba(2,2,2,.3)',
          });
          setBulletRender((n) => {
            return n + 1;
          });
        }, Math.random() * 10000);
        timeouts.push(t);
      });
    };
    timer = setInterval(() => {
      timeouts.forEach((item) => {
        clearTimeout(item);
      });
      doGet();
    }, 10000);
    doGet();
    return () => {
      timeouts.forEach((item) => {
        clearTimeout(item);
      });
      // 组件销毁时，清除定时器
      clearInterval(timer);
    };
  }, []);

  // 弹幕内容输入事件处理
  const handleChange = ({ target: { value } }) => {
    setBullet(value);
  };

  // 登录
  const login = async (address) => {
    await fetch(`/api/bullet?method=login&userName=${address}&channel=${channel}`);
    return true;
  };
  // 发送消息
  const sendMsg = async (msg, userName) => {
    return fetch(`/api/bullet?method=send&userName=${userName}&channel=${channel}`, {
      method: 'post',
      body: msg,
    });
  };
  // 发送弹幕
  const handleSend = async () => {
    if (bullet) {
      // screen.push({
      //   msg: bullet,
      //   head: headUrl,
      //   color: 'red',
      //   size: 'small',
      //   backgroundColor: 'rgba(1,2,2,.3)',
      // });
      if (!walletData.address) {
        connect();
        return;
      }
      if (sendLock.current) return;
      sendLock.current = true;
      setSending(true);
      const res = await sendMsg(bullet, walletData.address);
      res
        .clone()
        .text()
        .then(async (data) => {
          if (data === '401') {
            await login(walletData.address);
            await sendMsg(bullet, walletData.address);
            doGet();
          }
        })
        .finally(() => {
          setSending(false);
          sendLock.current = false;
        });
      setBullet('');
    }
  };

  console.log('--------------------------------');

  return (
    <div
      data-bulles={bulletRender}
      className={classnames({
        [styles.iptBox]: true,
        [styles.foc]: focus,
      })}
    >
      {sending ? <span className={styles.loading}></span> : ''}
      <Input
        placeholder="share thoughts.."
        className={styles.ipt}
        value={bullet}
        onChange={handleChange}
        onPressEnter={handleSend}
        onFocus={() => setFocus(true)}
        onBlur={() => {
          setTimeout(() => {
            setFocus(false);
          }, 300);
        }}
        ref={inputRef}
      ></Input>
      {focus ? (
        <a href="https://mycryptoprofile.io/" target="_blank">
          <img src="/images/input_icon2.png" className={styles.ic} onClick={handleSend} />
        </a>
      ) : (
        <a href="https://mycryptoprofile.io/" target="_blank">
          <img
            src="/images/input_icon2.png"
            className={styles.ic}
            onClick={() => {
              inputRef.current!.focus({
                cursor: 'start',
              });
            }}
          />
        </a>
      )}
    </div>
  );
}
