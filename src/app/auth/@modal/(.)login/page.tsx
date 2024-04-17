'use client';

import { useState } from 'react';
import { ReactComponent as LogoImage } from '../../../../../public/assets/images/withaeng-logo-transparent-h42.svg';
import WhButton from '@/components/elements/WhButton';
import WhModal from '@/components/elements/modal/WhModal';
import WhInput from '@/components/elements/WhInput';
import Link from 'next/link';
import {
  EyeHide20Icon,
  EyeShow20Icon,
} from '../../../../../public/assets/icons/system';
import { useRouter } from 'next/navigation';

const buttonStyle = 'w-full h-full flex justify-center items-center';
const dividerStyle = 'h-0 w-full border border-nutral-white-03';

export default function LoginModal() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [showPw, setShowPw] = useState(false);

  const login = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 서버연결필요
    console.log(email, pw);
  };

  return (
    <WhModal
      isOpen={true}
      onClose={() => router.back()}
      className='px-[101px] py-[116px]'
    >
      <div className='mb-12 flex justify-center'>
        <LogoImage />
      </div>
      <div>
        <div className='flex gap-5 items-center text-center'>
          <div className={dividerStyle} />
          <span className='w-full text-nutral-black-01'>로그인 / 회원가입</span>
          <div className={dividerStyle} />
        </div>
        <form onSubmit={login} className='mt-11 mx-11 flex flex-col gap-5'>
          <WhInput
            type='email'
            value={email}
            handleInputChange={setEmail}
            size='lg'
            placeholder='이메일'
          />
          <WhInput
            type={showPw ? 'text' : 'password'}
            value={pw}
            handleInputChange={setPw}
            size='lg'
            placeholder='비밀번호'
            isClearable={false}
            endAdornment={
              showPw ? (
                <button
                  type='button'
                  className={buttonStyle}
                  onClick={() => setShowPw(false)}
                >
                  <EyeShow20Icon />
                </button>
              ) : (
                <button
                  type='button'
                  className={buttonStyle}
                  onClick={() => setShowPw(true)}
                >
                  <EyeHide20Icon />
                </button>
              )
            }
          />
          <WhButton type='submit' size='lg'>
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
        </form>
      </div>
    </WhModal>
  );
}
