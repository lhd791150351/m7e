/* eslint-disable no-param-reassign */
import { useCallback, useState, useEffect, Dispatch, SetStateAction } from 'react';

import Message, { MessageTypes } from '../components/Message';
import { fetchNftCounts, reportSaveNft } from '../apis/report';
import { connectWithWeb3 } from '../apis/web3';
import {
  authenticateIDX,
  hasCollections,
  initCollections,
  initIDX,
  getDID,
  addBookmark,
} from '../apis/ceramic';

const isMetaMaskInstalled = () => {
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

export function isMobile() {
  return Boolean(navigator.userAgent.match(
    /(phone|pad|pod|iphone|ipod|ios|ipad|android|mobile|blackberry|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|windows phone)/i,
  ));
}

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
    if (!isMobile() && !isMetaMaskInstalled()) {
      Message({ content: 'No Metamask detected!', type: MessageTypes.Info });
      throw new Error('');
    }

    if (states.authenticateLoading) throw new Error('');

    if (states.did) return;

    states.setAuthenticateLoading(true);
    try {
      initIDX();
      Message({ content: 'Start authentication...', duration: 0 });

      const { provider, addresses } = await connectWithWeb3(isMobile());
      await authenticateIDX(provider, addresses[0]);
      document.querySelector('#dataverseMessageBox').remove();

      const isCollectionInit = await hasCollections();
      if (!isCollectionInit) {
        Message({ content: 'Init your Dataverse...', duration: 0 });
        await initCollections();
        document.querySelector('#dataverseMessageBox').remove();
      }

      const DID = getDID();
      states.setDid(DID);
      return DID;
    } catch {
      Message({ content: 'Failed Network!', type: MessageTypes.Error });
      document.querySelector('#dataverseMessageBox').remove();
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

      setLikedState(true);
      setLikeCountState((s) => s + 1);

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
      setLikeCountsRepData(countsRep.data.data);
    })();
    const likeList = localStorage.getItem('likedList');
    if (likeList) {
      const likeListParse = JSON.parse(likeList) as string[];
      isLikedLists.map((el) => {
        el.liked = likeListParse.includes(el.nftLink || el.platformLink);
        return el;
      });
      setIsLikedLists(isLikedLists);
    }
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
