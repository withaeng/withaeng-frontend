'use client';

import { useRouter } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import WhButton from '@/components/elements/WhButton';

export default function CompleteChangePasswordModalPage() {
  const router = useRouter();
  return (
    <WhModal isOpen onClose={() => router.back()}>
      <div className='px-[84px] py-[72px]'>
        <WhModalHeader>비밀번호 재설정이 완료됐습니다.</WhModalHeader>
        <div className='flex flex-col gap-10 mx-5 mt-5 text-center'>
          <p>
            비밀번호 재설정을 완료하였습니다.
            <br />
            돌아가서 다시 로그인을 진행해주세요.
          </p>
          <WhButton
            size='lg'
            type='button'
            onClick={() => router.replace('/login')}
          >
            로그인 화면으로 이동
          </WhButton>
        </div>
      </div>
    </WhModal>
  );
}
