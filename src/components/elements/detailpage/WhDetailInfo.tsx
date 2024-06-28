'use client';

import Image from 'next/image';
import {
  Pencil20Icon,
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

const listCss = 'flex items-center gap-6';

const titleCss = 'text-nutral-black-01 text-headline-04 mt-[60px] mb-5';

const detailBtn =
  'flex items-center gap-1 text-nutral-black-04 text-caption-01';

export default function WhDetailInfo() {
  const isHost = false;

  return (
    <div className='max-w-[847px]'>
      <div className='px-5'>
        <div className='flex items-center justify-between text-nutral-black-04 text-caption-02 mb-5'>
          {/* left */}
          <div className='flex gap-6'>
            <span>게시 {detailList.regist_at}</span>
            <span>조회수 {detailList.view}</span>
          </div>

          {/* right */}
          <div className='flex gap-6'>
            <ChatIcon />
            <LinkIcon />
          </div>
        </div>
        <div className='flex items-center  justify-between'>
          <h1 className='text-nutral-black-02 text-headline-03'>
            {detailList.title}
          </h1>
          <div className='flex gap-5'>
            {isHost ? null : (
              <button type='button' className={detailBtn}>
                <Pencil20Icon />
                <span>수정하기</span>
              </button>
            )}
          </div>
        </div>
        <div className='flex gap-5'>
          {detailList.tags.map((tag) => (
            <span className='mt-2 text-primary-main text-subtitle-02'>
              {tag.title}
            </span>
          ))}
        </div>

        <h2 className={titleCss}>동행 정보</h2>
        <ul className='flex flex-col gap-3 text-nutral-black-03 text-subtitle-01 bg-nutral-white-02 p-5 max-h-[244px]'>
          <li className={listCss}>
            <MapPinIcon />
            {detailList.location}
          </li>
          <li className='flex items-center'>
            <UsersGroupIcon className='mr-6 ' />
            동행 인원&nbsp;
            <span>
              <span className='text-primary-main'>
                {detailList.companions}/{detailList.companionsCount}
              </span>
            </span>
            <Image
              className='inline object-cover rounded-full ml-2'
              src={detailList.profileImageUrl}
              width={24}
              height={24}
              alt='프로필 이미지'
            />
            <span className='text-nutral-black-05 ml-14'>
              호스트 승인 대기 인원 {detailList.wait}
            </span>
            <Image
              className='inline object-cover rounded-full ml-2'
              src={detailList.profileImageUrl}
              width={24}
              height={24}
              alt='프로필 이미지'
            />
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
        <div className='max-h-[170px] text-nutral-black-03 text-body-03'>
          {detailList.content}
        </div>
      </div>

      
      <WhReplyContent />
    </div>
  );
}
