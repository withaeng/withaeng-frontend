'use client';

import { useState } from 'react';
import useAuth from '@/hooks/useAuth';
import WhButton from '@/components/elements/WhButton';
import WhInput from '@/components/elements/WhInput';
import {
  EyeHideIcon,
  EyeShowIcon,
} from '../../../../../../public/assets/icons/system';

const buttonStyle = 'w-full h-full flex justify-center items-center';
const dividerStyle = 'h-0 w-full border border-nutral-white-03';

export default function LoginModalContent() {
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin } = useAuth();

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    signin.mutate({ email, password });
  };

  return (
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
          value={password}
          handleInputChange={setPassword}
          size='lg'
          placeholder='비밀번호'
          isClearable={false}
          endAdornment={
            showPw ? (
              <button
                type='button'
                aria-label='show password'
                className={buttonStyle}
                onClick={() => setShowPw(false)}
              >
                <EyeShowIcon width={20} height={20} />
              </button>
            ) : (
              <button
                type='button'
                aria-label='hide password'
                className={buttonStyle}
                onClick={() => setShowPw(true)}
              >
                <EyeHideIcon width={20} height={20} />
              </button>
            )
          }
        />
        <WhButton type='submit' size='lg'>
          로그인하기
        </WhButton>
      </form>
    </div>
  );
}
