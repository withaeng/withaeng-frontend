'use client';

import React, { useState } from 'react';

import WhMypageCard from '@/components/elements/mypage/WhMypageCard';
import WhMypageMoreButton from '@/components/elements/mypage/WhMypageMoreButton';
import WhMypageHeader from './WhMypageHeader';
import WhMypageInfo from './WhMypageInfo';
import WhMypageTravelType from './WhMypageTravelType';

export default function Setting() {
  return (
    <div className='flex flex-col gap-10'>
      <WhMypageHeader title='내 정보 관리' />

      <WhMypageCard
        title='프로필'
        content='프로필에 대한 설명 문구가 있는 경우, 없는 경우.'
        linkText='수정'
      >
        <WhMypageInfo />
      </WhMypageCard>

      <WhMypageCard
        title='프로필'
        content='여행타입에 대한 설명 문구가 들어갈 곳입니다.'
      >
        <WhMypageTravelType />
      </WhMypageCard>

      <WhMypageMoreButton />
    </div>
  );
}
