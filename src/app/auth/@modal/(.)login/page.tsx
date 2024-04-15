'use client';

import { useState } from 'react';
import { ReactComponent as LogoImage } from '../../../../../public/assets/images/withaeng-logo-transparent-h42.svg';
import WhButton from '@/components/elements/WhButton';
import WhModal from '@/components/elements/modal/WhModal';
import WhInput from '@/components/elements/WhInput';
import Link from 'next/link';

const dividerStyle = 'h-0 w-full border border-nutral-white-03';

export default function LoginModal() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const login = () => {};

  return (
    <WhModal className='px-[101px] py-[116px] w-[680px]'>
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
          <WhInput
            type='email'
            value={email}
            handleInputChange={setEmail}
            size='lg'
            placeholder='이메일'
          />
          <WhInput
            type='password'
            value={pw}
            handleInputChange={setPw}
            size='lg'
            placeholder='비밀번호'
          />
          <WhButton size='lg' onClick={login}>
            로그인하기
          </WhButton>
          <div className='flex justify-between'>
            <p className='text-body-03 text-nutral-black-03'>
              아직 회원이 아니신가요?
            </p>
            <Link
              href='/auth/sign-up'
              replace
              className='text-subtitle-02 text-nutral-black-02 cursor-pointer'
            >
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </WhModal>
  );
}
