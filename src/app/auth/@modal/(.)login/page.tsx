'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import LoginModalContent from '@/components/auth/login/LoginModalContent';
import WhModal from '@/components/elements/modal/WhModal';

export default function LoginPage() {
  const router = useRouter();

  return (
    <WhModal isOpen onClose={() => router.back()}>
      <div className='px-[101px] py-[116px]'>
        <LoginModalContent />
        <div className='flex justify-between mt-5 mx-11 text-nutral-black-03'>
          <Link href='/auth/findPassword'>
            <button type='button' className='text-body-03'>
              비밀번호 찾기
            </button>
          </Link>
          <div className='flex gap-2'>
            <p className='text-body-03'>아직 회원이 아니신가요?</p>
            <Link href='/auth/signup'>
              <button
                type='button'
                className='text-secondary-main text-body-03'
              >
                회원가입
              </button>
            </Link>
          </div>
        </div>
      </div>
    </WhModal>
  );
}
