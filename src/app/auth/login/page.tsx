'use client';

import Link from 'next/link';
import WhButton from '@/components/elements/WhButton';
import { ReactComponent as LogoImage } from '../../../../public/assets/images/withaeng-logo-transparent-h42.svg';

const dividerStyle = 'h-0 w-full border border-nutral-white-03';

export default function LoginPage() {
  return (
    <>
      <div className='mb-12 flex justify-center'>
        <LogoImage />
      </div>
      <div>
        <div className='flex gap-5 items-center text-center'>
          <div className={dividerStyle} />
          <span className='w-full text-nutral-black-01'>로그인 / 회원가입</span>
          <div className={dividerStyle} />
        </div>
        <div className='mt-11 mx-11 flex flex-col gap-5'>
          <div>이메일 input</div>
          <div>비밀번호 input</div>
          <WhButton size='lg' onClick={() => {}}>
            로그인하기
          </WhButton>
          <div className='flex justify-between'>
            <p className='text-body-03 text-nutral-black-03'>
              아직 회원이 아니신가요?
            </p>
            <Link href='/auth/sign-up/z02/step1'>
              <p className='text-subtitle-02 text-nutral-black-02'>회원가입</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
