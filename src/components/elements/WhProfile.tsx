'use client';

import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import {
  ThumbsDownIcon,
  ThumbsUpIcon,
} from '../../../public/assets/icons/profile';

interface WhProfileProps {
  profileImage: StaticImageData | string;
  nick: string;
  age: number;
  gender: string;
  score: number;
  review: number;
  period: string;
  onLikeClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onHateClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const defaultBtnCss =
  'flex items-center gap-2 py-2 rounded-[20px] border border-nutral-white-03 bg-nutral-white-01 text-nutral-black-04 text-caption-01';

export default function WhProfile({
  onLikeClick,
  onHateClick,
  profileImage,
  nick = '',
  age,
  gender = '',
  score,
  review,
  period = '',
}: WhProfileProps) {
  const infoItems = [
    { value: score, label: '매너점수' },
    { value: review, label: '후기' },
    { value: period, label: '접속 기간' },
  ];

  const [likeBtnText, setLikeBtnText] = useState('좋아요');
  const [hateBtnText, setHateBtnText] = useState('싫어요');
  const [isLikeHover, setIsLikeHover] = useState(false);
  const [isHateHover, setIsHateHover] = useState(false);

  return (
    <div className='relative flex justify-center bg-nutral-white-02 rounded shadow-modal min-w-64 pb-5 pt-10 px-[14px]'>
      <div className='flex flex-col justify-center items-center'>
        <Image
          className='absolute -top-7 rounded-full'
          src={profileImage}
          width={56}
          height={56}
          alt='샘플 이미지'
        />
        <p className='pb-[5px] text-subtitle-01 text-nutral-black-02'>{nick}</p>
        <span className='text-nutral-black-04 text-caption-01'>
          {age}&nbsp; ∙ &nbsp;{gender}
        </span>
        <ul className='flex justify-center py-5 pl-4 gap-4 text-center'>
          {infoItems.map((item, index) => (
            <li
              key={item.value}
              className={`flex flex-col ${index < infoItems.length - 1 ? 'border-r border-nutral-white-03 pr-4' : ''}`}
            >
              <p className='mb-2 text-subtitle-02 text-nutral-black-02'>
                {item.value}
              </p>
              <span className='text-nutral-black-04 text-caption-02'>
                {item.label}
              </span>
            </li>
          ))}
        </ul>

        <div className='flex gap-2'>
          <button
            className={`hover:bg-primary-main hover:border-primary-main hover:text-nutral-white-01 ${defaultBtnCss} ${isLikeHover ? 'px-[11px]' : 'px-7'}`}
            onMouseEnter={() => {
              setLikeBtnText('매너점수 상승');
              setIsLikeHover(true);
            }}
            onMouseLeave={() => {
              setLikeBtnText('좋아요');
              setIsLikeHover(false);
            }}
            onClick={onLikeClick}
          >
            {isLikeHover ? (
              <ThumbsUpIcon fill='#ffffff' stroke='#FFA500' />
            ) : (
              <ThumbsUpIcon fill='#ffffff' stroke='#737373' />
            )}
            {likeBtnText}
          </button>
          <button
            className={`hover:bg-nutral-white-03  ${defaultBtnCss} ${isHateHover ? 'px-[11px]' : 'px-7'}`}
            onMouseEnter={() => {
              setHateBtnText('매너점수 하락');
              setIsHateHover(true);
            }}
            onMouseLeave={() => {
              setHateBtnText('싫어요');
              setIsHateHover(false);
            }}
            onClick={onHateClick}
          >
            {isHateHover ? (
              <ThumbsDownIcon fill='#737373' stroke='#FFFFFF' />
            ) : (
              <ThumbsDownIcon fill='#FFFFFF' stroke='#39230d' />
            )}
            {hateBtnText}
          </button>
        </div>
      </div>
    </div>
  );
}
