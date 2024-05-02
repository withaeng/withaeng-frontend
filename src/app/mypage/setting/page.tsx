'use client';

import WhMypageCard from '@/components/elements/mypage/WhMypageCard';
import WhMypageHeader from '@/components/elements/mypage/WhMypageHeader';
import WithdrawModal from '@/components/elements/mypage/withdraw';

export default function Setting() {
  return (
    <div className='flex flex-col gap-10'>
      <WhMypageHeader title='설정' />

      <WhMypageCard
        title='로그아웃'
        content='현재 계정에서 로그아웃 합니다.'
        linkText='로그아웃'
      >
        <div className='flex gap-[11px] mt-5 items-center'>
          <h4 className='text-caption-01 text-nutral-black-04'>
            서비스를 그만 이용하고 싶으신가요?
          </h4>
          <WithdrawModal />
        </div>
      </WhMypageCard>
    </div>
  );
}
