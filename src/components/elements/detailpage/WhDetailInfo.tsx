'use client';

import Image from 'next/image';
import { useState } from 'react';
import {
  PencilIcon,
  PaperclipIcon,
  LinkIcon,
} from '../../../../public/assets/icons/edit';
import {
  ChatIcon,
  UsersGroupIcon,
  CalendarCheckIcon,
  JoinTypeIcon,
  GenderIcon,
  MapPinIcon,
} from '../../../../public/assets/icons/communicate';
import detailList from '../../../data';
import WhReplyContent from './WhReplyContent';

const listCss = 'flex items-center gap-6 text-subtitle-01 text-nutral-black-03';

const titleCss =
  'text-nutral-black-01 text-headline-04 mt-[60px] max-xl:mt-10 mb-5 max-xl:mb-0 max-xl:pl-4';

const detailBtn =
  'flex items-center gap-1 text-nutral-black-04 text-caption-01';

const topInfoTextCss = 'text-caption-02 text-nutral-black-04';

const moreLookTextCss =
  'min-xl:hidden mt-3 max-xl:text-body-03 text-nutral-black-05';

const isHost = false;

export default function WhDetailInfo() {
  const [lookMore, setLookMore] = useState(false);

  const handleMoreClick = () => {
    setLookMore(!lookMore);
  };

  return (
    <div className='max-w-[847px] max-xl:w-full'>
      <div className='px-5 max-xl:px-0'>
        <div className='max-xl:px-4'>
          <div className='flex items-center justify-between text-caption-02'>
            {/* left */}
            <div className='flex gap-6'>
              <span className={topInfoTextCss}>
                게시 {detailList.regist_at}
              </span>
              <span className={topInfoTextCss}>조회수 {detailList.view}</span>
              <span className={topInfoTextCss}>
                모집 상태 {detailList.status}
              </span>
            </div>

            {/* right */}
            <div className='flex gap-6'>
              <ChatIcon className='pt-8' />
              <LinkIcon className='pt-8' />
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <h1 className='flex-wrap truncate text-headline-03 text-nutral-black-02 max-xl:text-headline-04'>
              {detailList.title}
            </h1>
            <div className='flex gap-5'>
              {isHost ? null : (
                <button type='button' className={detailBtn}>
                  <PencilIcon />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className='flex gap-5 max-xl:hidden'>
          {detailList.tags.map((tag) => (
            <span
              className='mt-2 text-subtitle-02 text-primary-main'
              key={tag.id}
            >
              {tag.title}
            </span>
          ))}
        </div>

        <h2 className={`${titleCss} max-xl:mb-3`}>동행 정보</h2>
        <ul className='flex flex-col gap-3 bg-nutral-white-02 p-5'>
          <li className={listCss}>
            <MapPinIcon />
            {detailList.location}
          </li>
          <li className='flex items-center'>
            <UsersGroupIcon className='mr-6' />
            <div className='flex max-xl:flex-col'>
              <div className='text-subtitle-01 text-nutral-black-03'>
                동행 인원&nbsp;
                <span className='text-primary-main'>
                  {detailList.companions}/{detailList.companionsCount}
                </span>
                <Image
                  className='ml-2 inline rounded-full object-cover'
                  src={detailList.profileImageUrl}
                  width={24}
                  height={24}
                  alt='프로필 이미지'
                />
              </div>
              <div className='ml-10 max-xl:ml-0'>
                <span className='text-nutral-black-05'>
                  호스트 승인 대기 인원 {detailList.wait}
                </span>
                <Image
                  className='ml-2 inline rounded-full object-cover'
                  src={detailList.profileImageUrl}
                  width={24}
                  height={24}
                  alt='프로필 이미지'
                />
              </div>
            </div>
          </li>
          <li className={listCss}>
            <CalendarCheckIcon />
            {detailList.period}
          </li>

          <li className={listCss}>
            <JoinTypeIcon />
            {detailList.age}
          </li>
          <li className={listCss}>
            <GenderIcon />
            {detailList.gender}
          </li>
          <li className={listCss}>
            <PaperclipIcon />
            {detailList.link}
          </li>
        </ul>

        <h2 className={titleCss}>동행 내용</h2>
        {/* 모바일에서는 여기서 태그가 나옴 */}
        <div className='min-xl:hidden flex gap-5 max-xl:px-4 max-xl:py-3'>
          {detailList.tags.map((tag) => (
            <span
              className='mt-2 text-subtitle-02 text-primary-main'
              key={tag.id}
            >
              {tag.title}
            </span>
          ))}
        </div>
        <div className='max-h-[735px] flex-col items-center max-xl:px-4'>
          <div className='max-h-[170px] text-body-03 text-nutral-black-03'>
            {detailList.content}
          </div>
          <button
            type='button'
            onClick={handleMoreClick}
            className={moreLookTextCss}
          >
            {lookMore ? '접기' : '더보기'}
          </button>
        </div>
      </div>

      <WhReplyContent />
    </div>
  );
}
