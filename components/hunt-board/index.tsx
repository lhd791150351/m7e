import React from 'react';
import classnames from 'classnames';

interface Props {
  rank: number;
  avatar: string;
  name: string;
  value: number;
  className?: string;
}

export default function HubtBoard({ rank, avatar, name, value, className }: Props) {
  return (
    <div
      className={classnames(
        'bg-purple-500 flex w-full items-center sm:px-6 sm:py-4 px-4 py-2 rounded-2xl transform transition hover:scale-110 duration-500',
        className,
      )}
    >
      <div className="fonts-anonymous-pro text-white text-2xl mr-4 w-6">{rank}</div>
      {avatar ? (
        <img src={avatar} alt="avatar" className="rounded-full sm:w-16 sm:h-16 w-12 h-12" />
      ) : (
        <span className="sm:w-16 sm:h-16 w-12 h-12 rounded-full flex justify-center items-center bg-green-500 text-4xl text-white">
          {name[0]}
        </span>
      )}
      <div className="ml-4 w-full flex-1 flex justify-between">
        <div className="fonts-anonymous-pro text-white text-2xl break-all pr-2">{name}</div>
        <div className="fonts-anonymous-pro text-white text-2xl">{value}</div>
      </div>
    </div>
  );
}
