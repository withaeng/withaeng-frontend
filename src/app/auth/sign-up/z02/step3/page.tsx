'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import WhRadio from '@/components/elements/WhRadio';
import ButtonGroup from '../../components/FooterButtonList';

const secondarySpanCss = 'text-secondary-main text-subtitle-02';

export default function SignUpStep3Page() {
  const [gender, setGender] = useState<string>('');

  const router = useRouter();
  const onClick = () => {
    router.push('/auth/sign-up/z02/step4');
  };

  const handleGenderChange = (value: string) => {
    setGender(value);
  };

  return (
    <div className='flex flex-col gap-10'>
      <h4 className='text-headline-04 text-nutral-black-01 text-center pb-[25px] border-b border-nutral-white-03'>
        회원가입 정보 입력
      </h4>
      <div>
        <label htmlFor='sign-up_gender'>성별</label>
        <div id='sign-up_gender' className='flex mt-3 gap-8'>
          <WhRadio
            id='male'
            name='gender'
            value='male'
            checked={gender === 'male'}
            onChange={handleGenderChange}
          >
            남성
          </WhRadio>
          <WhRadio
            id='female'
            name='gender'
            value='female'
            checked={gender === 'female'}
            onChange={handleGenderChange}
          >
            여성
          </WhRadio>
        </div>
      </div>
      <div>input 들어갈 자리</div>
      <div className='mt-4'>
        <div className='flex justify-between mb-6'>
          {/* FIXME: checkbox 들어갈 자리. (현재는 임시로 해둠...) */}
          {/* ================= checkbox 들어갈 자리. 시작 ================= */}
          <label
            htmlFor='이용약관'
            className='text-body-03 text-nutral-black-05'
          >
            <span className={secondarySpanCss}>만 14세 이용</span>에 동의하며,{' '}
            <Link href='/auth/sign-up/z02/step4'>
              <span className={`${secondarySpanCss} underline`}>
                개인정보 이용약관
              </span>
            </Link>
            에 동의합니다.
          </label>
          <input type='checkbox' id='이용약관' />
          {/* ================= checkbox 들어갈 자리. 끝 ================= */}
        </div>
        <div className='mt-2'>
          <ButtonGroup
            prev
            onClick={onClick}
            label='동의하며, 계속 진행하겠습니다.'
          />
        </div>
      </div>
    </div>
  );
}
