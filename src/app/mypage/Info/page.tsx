'use client';

import WhMypageCard from '@/components/elements/mypage/WhMypageCard';
import WhMypageMoreButton from '@/components/elements/mypage/WhMypageMoreButton';
import WhMypageHeader from '../../../components/elements/mypage/WhMypageHeader';
import WhMypageInfo from '../../../components/elements/mypage/WhMypageInfo';
import WhMypageTravelType from '../../../components/elements/mypage/WhMypageTravelType';

export default function Info() {
  return (
    <div className='flex flex-col gap-10'>
      <WhMypageHeader title='내 정보 관리' />

      <WhMypageCard
        title='프로필'
        content='나의 프로필을 완성하여 상대방에게 나를 알리세요!!'
        linkText='수정'
      >
        <WhMypageInfo />
      </WhMypageCard>

      <WhMypageCard
        title='프로필'
        content='나의 여행 타입을 설정하여 보다 좋은 동행 파트너를 찾으세요!!'
        linkText='수정'
      >
        <WhMypageTravelType />
      </WhMypageCard>

      <WhMypageMoreButton />
    </div>
  );
}
