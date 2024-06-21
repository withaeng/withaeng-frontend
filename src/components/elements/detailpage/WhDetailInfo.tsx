'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Pencil20Icon } from '../../../../public/assets/icons/edit';
import { PaperclipIcon } from '../../../../public/assets/icons/edit';
import { ChatIcon } from '../../../../public/assets/icons/communicate';
import { UsersGroupIcon } from '../../../../public/assets/icons/communicate';
import { CalendarCheckIcon } from '../../../../public/assets/icons/communicate';
import { LinkIcon } from '../../../../public/assets/icons/edit';
import { JoinTypeIcon } from '../../../../public/assets/icons/communicate';
import { GenderIcon } from '../../../../public/assets/icons/communicate';
import { MapPinIcon } from '../../../../public/assets/icons/communicate';

const listCss = 'flex items-center gap-6';

const titleCss = 'text-nutral-black-01 text-headline-04 mt-[60px] mb-5';

const detailBtn =
  'flex items-center gap-1 text-nutral-black-04 text-caption-01';

export default function WhDetailInfo() {
  const [lookMore, setLookMore] = useState(false);

  const detailList = {
    id: '0',
    thumbnailImageUrl: '/assets/images/thumbnailImageUrl.png',
    regist_at: '2024.12.12',
    view: 99,
    title: '호스트가 작성한 타이틀 노출',
    tags: [
      { id: 0, title: '태그0' },
      { id: 1, title: '태그1' },
      { id: 2, title: '태그2' },
    ],
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플1',
    name: '기묘림',
    score: '36.5',
    companions: 2,
    companionsCount: 3,
    wait: 3,
    location: '일본, 교토',
    review: 3,
    period: '24.03.21 ~ 24.03.24 (3박)',
    nick: '기묘림',
    introduce: '안녕하세요. 잘 부탁 드립니다.',
    sex: '여성',
    age: '누구나',
    birth: '2024.04.11',
    gender: '여성만',
    link: 'opentalklink.com//1231421 ',
    content:
      'Lorem ipsum dolor sit amet consectetur. Ultrices massa lobortis ac aliquet. Eget cras eget purus elementum eu dictum sem morbi. Id fermentum commodo proin magna nullam netus. Facilisis vehicula metus vitae pretium blandit. Feugiat nec justo tortor sed. Scelerisque ultricies ornare et donec tincidunt. Tincidunt massa sit augue iaculis ultricies. Diam quis gravida nunc at vulputate amet faucibus. Ante aliquam amet suscipit facilisi vehicula sed. Dui purus cursus risus auctor et pharetra auctor. Ullamcorper at at elit ipsum. Adipiscing eget nunc pellentesque eu tortor posuere sed. Quam viverra enim feugiat at duis aliquam arcu. Ultrices enim blandit sapien at aliquet lacus. Varius sed sociis in faucibus nulla lectus morbi ultrices. Pulvinar accumsan nunc euismod ac. Aenean sapien vel diam nascetur enim a amet eu nulla. Tempor aliquam nunc massa elit. Maecenas at nunc mattis arcu fermentum lobortis suspendisse. Nulla nulla condimentum nunc pretium ut auctor egestas cras. Luctus enim mi aenean et dictum ipsum. Rhoncus varius ultrices ullamcorper fames.',
    requestList: [{}, {}, {}],
    itemList: [
      {
        host: true,
        id: 0,
        age: '20대',
        status: 'joining',
        gender: '여성',
        period: '1년 11개월',

        profileImageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: '도쿄피플2',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: null,
        startTripDate: '2024-03-15',
        endTripDate: '2024-03-16',
        accompanyCnt: 3,
        accompaniedCnt: 1,
        thumbnailImageUrl:
          'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        host: true,
        id: 1,
        age: '30대',
        status: 'joining',
        gender: '여성',
        period: '1년 11개월',

        profileImageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: '도쿄피플3',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: null,
        startTripDate: '2024-03-15',
        endTripDate: '2024-03-16',
        accompanyCnt: 3,
        accompaniedCnt: 1,
        thumbnailImageUrl:
          'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        host: false,
        id: 2,
        age: '30대',
        status: 'joined',
        gender: '남성',
        period: '1년 11개월',

        profileImageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: '도쿄피플4',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: null,
        startTripDate: '30일',
        endTripDate: '2024-07-16',
        accompanyCnt: 4,
        accompaniedCnt: 2,
        thumbnailImageUrl:
          'https://images.unsplash.com/photo-1601699233172-1bb3354b845b?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        host: true,
        id: 2,
        age: '30대',
        status: 'accompanied',
        gender: '남성',

        period: '1년 11개월',

        profileImageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: '도쿄피플5',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: ['태그 1', '태그 2', '태그 3'],
        startTripDate: '2024-08-15',
        endTripDate: '2024-08-16',
        accompanyCnt: 4,
        accompaniedCnt: 4,
        thumbnailImageUrl:
          'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },

      {
        host: false,
        id: 2,
        status: 'accompanied',
        gender: '여성',
        period: '1년 11개월',

        profileImageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: '도쿄피플',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: ['태그 1', '태그 2', '태그 3'],
        startTripDate: '2024-08-15',
        endTripDate: '2024-08-16',
        accompanyCnt: 4,
        accompaniedCnt: 4,
        thumbnailImageUrl:
          'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  };

  const isHost = false;

  const handleMoreClick = () => {
    setLookMore(!lookMore);
  };

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
            {/* <span className='text-nutral-black-01'>
                호스트 승인 대기 인원 {detailList.wait}
              </span> */}
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
      {/* 댓글 리스트 */}
      <div>
        <h2 className={titleCss}>
          댓글&nbsp;<span className='text-primary-main'>N</span>
        </h2>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-5'>
            <Image
              className='inline object-cover rounded-full h-full'
              src={detailList.profileImageUrl}
              width={48}
              height={48}
              alt='프로필 이미지'
            />
            <div>
              <p className='text-nutral-black-02 text-Subtitle-01'>
                도쿄피플도쿄피플
              </p>
              <p className='text-caption-01 text-black-04 mt-[5px]'>1시간 전</p>
            </div>
          </div>
          <div className={`flex items-center max-w-[735px]  ${lookMore ? 'flex-wrap' : ''}`}>
            <p className={`text-body-02 text-nutral-black-03  ${!lookMore && 'truncate'}`}>
              {detailList.content}
            </p>
              <button type='button' onClick={handleMoreClick} className={`text-nutral-black-05 ${!lookMore && 'w-4/5'}`}>
                {lookMore ? '접기' : '더보기'}
              </button>
          </div>
          <div className='w-[807px] flex justify-between items-center mt-3 py-2 px-4 border border-nutral-white-03 rounded placeholder:text-nutral-white-04'>
            <input
              placeholder='답글을 입력해주세요. (최대 100자)'
              className='min-w-[700px] placeholder:text-nutral-white-04 placeholder:text-body-02 outline-0'
            />
            <button type='button' className='text-subtitle-02 text-primary-main'>
              댓글남기기
            </button>
          </div>

          {/* reply */}
          <div className='flex items-center gap-5 mt-10'>
            <Image
              className='inline object-cover rounded-full h-full'
              src={detailList.profileImageUrl}
              width={48}
              height={48}
              alt='프로필 이미지'
            />
            <div>
              <p className='text-nutral-black-02 text-Subtitle-01'>
                다른 게스트
              </p>
              <p className='text-caption-01 text-black-04 mt-[5px]'>1시간 전</p>
            </div>
          </div>
          <div className={`flex items-center max-w-[735px]  ${lookMore ? 'flex-wrap' : ''}`}>
            <p className={`text-body-02 text-nutral-black-03  ${!lookMore && 'truncate'}`}>
              {detailList.content}
            </p>
              <button type='button' onClick={handleMoreClick} className={`text-nutral-black-05 ${!lookMore && 'w-4/5'}`}>
                {lookMore ? '접기' : '더보기'}
              </button>
          </div>
          <p className='text-caption-01 text-primary-main'>답글달기</p>
        </div>

        {/* 댓글남기기  */}
        <div className='w-[807px] flex justify-between items-center mt-3 py-2 px-4 border border-nutral-white-03 rounded placeholder:text-nutral-white-04'>
          <input placeholder='답글을 입력해주세요. (최대 100자)' className='min-w-[700px] placeholder:text-nutral-white-04 placeholder:text-body-02 outline-0'
 />
          <span className='text-subtitle-02 text-primary-main'>댓글남기기</span>
        </div>
      </div>
    </div>
  );
}
