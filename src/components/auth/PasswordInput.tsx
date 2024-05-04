'use client';

import { useCallback, useState } from 'react';
import WhInput from '../elements/WhInput';
import {
  CheckIcon,
  EyeHideIcon,
  EyeShowIcon,
} from '../../../public/assets/icons/system';

const buttonStyle = 'w-full h-full flex justify-center items-center';

export default function PasswordInput({
  password,
  setPassword,
}: {
  password: string;
  setPassword: (value: string) => void;
}) {
  const [showPw, setShowPw] = useState(false);
  const isMinWords = useCallback(
    () => (password.length > 0 ? password.length >= 8 : undefined),
    [password]
  );

  const isCombination = useCallback(
    () =>
      password.length > 0
        ? /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(password)
        : undefined,
    [password]
  );

  const iconColor = useCallback((bol: boolean | undefined): string => {
    if (bol !== undefined) {
      if (bol) {
        return '#36C304';
      }
      return '#EC5C53';
    }
    return '#BAB8B6';
  }, []);

  const textColor = useCallback((bol: boolean | undefined): string => {
    if (bol !== undefined) {
      if (bol) {
        return 'text-caption-success';
      }
      return 'text-caption-main';
    }
    return 'text-nutral-white-04';
  }, []);

  return (
    <div>
      <WhInput
        type={showPw ? 'text' : 'password'}
        value={password}
        handleInputChange={setPassword}
        size='lg'
        placeholder='비밀번호를 입력하세요.'
        label='비밀번호'
        isClearable={false}
        isErr={
          password.length > 0 ? !isMinWords() || !isCombination() : undefined
        }
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
      <div className='flex gap-6 mt-1'>
        <div className='flex gap-1 items-center'>
          <CheckIcon width={20} height={20} stroke={iconColor(isMinWords())} />
          <span className={`${textColor(isMinWords())} text-caption-02`}>
            최소 8자 입력
          </span>
        </div>
        <div className='flex gap-1 items-center'>
          <CheckIcon
            width={20}
            height={20}
            stroke={iconColor(isCombination())}
          />
          <span className={`${textColor(isCombination())} text-caption-02`}>
            영문자 + 숫자 조합
          </span>
        </div>
      </div>
    </div>
  );
}
