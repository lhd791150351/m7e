/* eslint-disable no-nested-ternary */
import React, { Dispatch, SetStateAction } from 'react';
import useCurateHook from '../hooks/useDataverseHooks';

interface LikeComponentProps {
  platformLink: string;
  data: {
    chain: string;
    contract: string;
    tokenId: string;
    likeCount: string;
    liked?: boolean;
    nftLink?: string;
  };
  states: {
    did: string;
    authenticateLoading: boolean;
    likeLoading: boolean;
    setDid: Dispatch<SetStateAction<string>>;
    setAuthenticateLoading: Dispatch<SetStateAction<boolean>>;
    setLikeLoading: Dispatch<SetStateAction<boolean>>;
  };
  likeStyles: string;
  numStyles: string;
}

export default function LikeComponent({
  platformLink,
  data,
  states,
  likeStyles,
  numStyles,
}: LikeComponentProps) {
  const { like, likedState, likeLoadingState, likeCountState } = useCurateHook(
    states,
    platformLink,
    data,
  );
  return (
    <>
      <img
        src={
          likeLoadingState
            ? '/images/loading.svg'
            : likedState
            ? '/images/like_red.png'
            : '/images/like.png'
        }
        className={likeStyles}
        onClick={like}
      ></img>
      <span className={numStyles}>{likeCountState}</span>
    </>
  );
}
