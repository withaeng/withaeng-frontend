'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import WhRadio from '@/components/elements/WhRadio';
import ButtonGroup from '../../components/FooterButtonList';
import WhCheckbox from '@/components/elements/WhCheckbox';

const secondarySpanCss = 'text-secondary-main text-subtitle-02';

export default function SignUpStep3Page() {
  const [gender, setGender] = useState<string>('');
  const [term, setTerm] = useState(false);

  const router = useRouter();
  const onClick = () => {
    router.push('/auth/sign-up/z03/step5');
  };

  const handleGenderChange = (value: string) => {
    setGender(value);
  };

  const handleCheckbox = () => {
    setTerm((prev) => !prev);
  };

  return (
    <>
      {/* modal - header */}
      <div className='text-headline-04 text-nutral-black-01 text-center pb-[25px] border-b border-nutral-white-03'>
        <h4>회원가입 정보 입력</h4>
      </div>
      {/* modal - container */}
      <div className='flex flex-col gap-10 mt-10 mx-[15px]'>
        <div>이메일 input 들어갈 자리</div>
        <div>비밀번호 input 들어갈 자리</div>
        <div>생년월일 calendar 들어갈 자리</div>
        <div>
          <label htmlFor='sign-up_gender'>
            성별
            {/* FIXME: required label 처리 (임시 작업) */}
            <span className='text-caption-main'>*</span>
          </label>
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
        <div className='flex justify-between mt-4'>
          <label
            htmlFor='이용약관'
            className='text-body-03 text-nutral-black-05'
          >
            <span className={secondarySpanCss}>만 14세 이용</span>에 동의하며,{' '}
            <Link href='/auth/sign-up/z02/step2'>
              <span className={`${secondarySpanCss} underline`}>
                개인정보 이용약관
              </span>
            </Link>
            에 동의합니다.
          </label>
          {/* FIXME: checkbox 들어갈 자리. (현재는 임시로 해둠...) */}
          {/* ================= checkbox 들어갈 자리. 시작 ================= */}
          <WhCheckbox
            id='이용약관'
            value='term'
            checked={term}
            onChange={handleCheckbox}
          >
            {''}
          </WhCheckbox>
          {/* ================= checkbox 들어갈 자리. 끝 ================= */}
        </div>
      </div>
      {/* modal - footer */}
      <div className=' mt-6'>
        <ButtonGroup
          prev
          onClick={onClick}
          label='동의하며, 계속 진행하겠습니다.'
        />
      </div>
    </>
  );
}
