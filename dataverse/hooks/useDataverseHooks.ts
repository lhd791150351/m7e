/* eslint-disable no-param-reassign */
import { useCallback, useState, useEffect, Dispatch, SetStateAction } from 'react';
import Web3Modal from 'web3modal';

import { isMobile } from '../utils';
import Message, { MessageTypes } from '../components/Message';
import { fetchNftCounts, reportSaveNft } from '../apis/report';
import {
  authenticateIDX,
  hasCollections,
  initCollections,
  initIDX,
  getDID,
  addBookmark,
} from '../apis/ceramic';

export default function useCurateHook(
  states: {
    did: string;
    authenticateLoading: boolean;
    likeLoading: boolean;
    setDid: Dispatch<SetStateAction<string>>;
    setAuthenticateLoading: Dispatch<SetStateAction<boolean>>;
    setLikeLoading: Dispatch<SetStateAction<boolean>>;
  },
  platformLink: string,
  data: {
    chain: string;
    contract: string;
    tokenId: string;
    likeCount: string;
    liked?: boolean;
    nftLink?: string;
  },
) {
  const [likeCountState, setLikeCountState] = useState(data.likeCount);
  const [likedState, setLikedState] = useState(data.liked);
  const [likeLoadingState, setLikeLoadingState] = useState(states.likeLoading);

  useEffect(() => {
    setLikeCountState(data.likeCount);
  }, [data.likeCount]);

  useEffect(() => {
    setLikedState(data.liked);
  }, [data.liked]);

  useEffect(() => {
    setLikeLoadingState(likeLoadingState);
  }, [likeLoadingState]);

  const authenticate = async () => {
    if (isMobile()) {
      Message({ content: 'For better experience, browse via your pc' });
      throw new Error('');
    }

    if (states.authenticateLoading) throw new Error('');

    if (states.did) return;

    states.setAuthenticateLoading(true);
    try {
      initIDX();
      Message({ content: 'Start authentication...' });
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

      const isCollectionInit = await hasCollections();
      if (!isCollectionInit) {
        Message({ content: 'Init your Dataverse...' });
        await initCollections();
      }
      const DID = getDID();
      states.setDid(DID);
      return DID;
    } catch {
      Message({ content: 'Failed Network!', type: MessageTypes.Error });
      throw new Error('');
    } finally {
      states.setAuthenticateLoading(false);
    }
  };

  const like = useCallback(async () => {
    let DID;
    try {
      DID = await authenticate();
    } catch {
      return;
    }
    if (states.likeLoading) {
      return;
    }
    try {
      const link = data.nftLink || platformLink;
      const likeList = localStorage.getItem('likedList');
      if (likeList) {
        const likeListParse = JSON.parse(likeList);
        if (likeListParse.includes(link)) {
          Message({
            content: 'Already saved!',
            type: MessageTypes.Info,
          });
          return;
        }
      }

      states.setLikeLoading(true);
      setLikeLoadingState(true);
      if (!data.tokenId) throw new Error(' ');

      Message({
        content: 'Start NFT curation...',
      });
      await addBookmark({
        chain: data.chain,
        contract: data.contract,
        tokenId: data.tokenId,
        url: link,
        note: '',
        tags: [],
        date: new Date().toISOString(),
      });

      if (likeList) {
        const likeListParse = JSON.parse(likeList);
        localStorage.setItem('likedList', JSON.stringify([...likeListParse, link]));
      } else {
        localStorage.setItem('likedList', JSON.stringify([link]));
      }

      setLikeCountState((s) => s + 1);
      setLikedState(true);

      await reportSaveNft({ chain: data.chain, token_id: data.tokenId, contract: data.contract });

      Message({ did: states.did || DID, duration: 0 });
    } catch {
      Message({
        content: 'Save NFT failed!',
        type: MessageTypes.Error,
      });
    } finally {
      states.setLikeLoading(false);
      setLikeLoadingState(false);
    }
  }, [states.did, states.authenticateLoading, states.likeLoading]);

  return { like, likedState, likeLoadingState, likeCountState };
}

export function useCurateCountHook(lists) {
  const [did, setDid] = useState('');
  const [authenticateLoading, setAuthenticateLoading] = useState(false);
  const [likeLoading, setLikeLoading] = useState(false);
  const [likeCountsRepData, setLikeCountsRepData] = useState([]);
  const [isLikedLists, setIsLikedLists] = useState<
    {
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
      nftLink?: string;
      liked?: boolean;
    }[]
  >(lists);
  useEffect(() => {
    (async () => {
      const countsRep = await fetchNftCounts(lists);
      const likeList = localStorage.getItem('likedList');
      if (likeList) {
        const likeListParse = JSON.parse(likeList) as string[];
        isLikedLists.map((el) => {
          el.liked = likeListParse.includes(el.nftLink || el.platformLink);
          return el;
        });
        setIsLikedLists(isLikedLists);
      }
      setLikeCountsRepData(countsRep.data.data);
    })();
  }, []);
  return {
    likeCountsRepData,
    isLikedLists,
    states: {
      did,
      authenticateLoading,
      likeLoading,
      setDid,
      setAuthenticateLoading,
      setLikeLoading,
    },
  };
}
