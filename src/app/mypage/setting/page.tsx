'use client';

import WhMypageCard from '@/components/elements/mypage/WhMypageCard';
import Link from 'next/link';

export default function Setting() {
  return (
    <WhMypageCard
      title='로그아웃'
      content='현재 계정에서 로그아웃 합니다.'
      linkText='로그아웃'
    >
      <div className='flex gap-[11px] mt-5'>
        <h4 className='text-caption-01 text-nutral-black-04'>
          서비스를 그만 이용하고 싶으신가요?
        </h4>
        <Link href='/' className='text-secondary-light text-subtitle-02'>
          회원탈퇴
        </Link>
      </div>
    </WhMypageCard>
  );
}
