'use client';

import { useState } from 'react';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import WhRadio from '@/components/elements/WhRadio';
import Link from 'next/link';
import WhCheckbox from '@/components/elements/WhCheckbox';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import WhInput from '@/components/elements/WhInput';

const secondarySpanCss = 'text-secondary-main text-subtitle-02';
const initFormData = {
  email: '',
  password: '',
  birth: new Date(),
  gender: 'male',
  term: false,
};

export default function PhotoModal() {
  const [form, setForm] = useState(initFormData);

  const onClick = () => {};

  return (
    <WhModal className='px-[105px] py-[72px]'>
      <WhModalHeader>회원가입 정보 입력</WhModalHeader>
      <div className='flex flex-col gap-10 mt-10 mb-6 mx-[15px]'>
        <WhInput
          label='이메일'
          handleInputChange={(value) =>
            setForm((prev) => ({ ...prev, email: value }))
          }
          size='lg'
          placeholder='이메일'
        />
        <WhInput
          label='비밀번호'
          handleInputChange={(value) =>
            setForm((prev) => ({ ...prev, password: value }))
          }
          size='lg'
          placeholder='비밀번호'
        />
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
              checked={form.gender === 'male'}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, gender: value }))
              }
            >
              남성
            </WhRadio>
            <WhRadio
              id='female'
              name='gender'
              value='female'
              checked={form.gender === 'female'}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, gender: value }))
              }
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
            <Link
              href='/auth/sign-up/term'
              className={`${secondarySpanCss} underline cursor-pointer`}
            >
              개인정보 이용약관
            </Link>
            에 동의합니다.
          </label>
          <WhCheckbox
            id='이용약관'
            value='term'
            checked={form.term}
            onChange={() => setForm((prev) => ({ ...prev, term: !prev.term }))}
          >
            {''}
          </WhCheckbox>
        </div>
      </div>
      <WhModalButtonList
        onClick={onClick}
        label='동의하며, 계속 진행하겠습니다.'
      />
    </WhModal>
  );
}
