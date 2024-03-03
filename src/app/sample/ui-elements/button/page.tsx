'use client';

import React from 'react';
import WhIcon from '@/components/ui/WhIcon';
import WhButton from '@/components/ui/WhButton';

const page = () => (
  <div className='m-6'>
    <div className='flex gap-16'>
      {/* left button */}
      <div>
        <section className='flex flex-col gap-2'>
          <h2>BTN TYPE - LARGE</h2>
          <div className='flex gap-8'>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='lg'
            >
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='lg'
            >
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='lg'
            >
              버튼명 입력
              <WhIcon />
            </WhButton>

            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='lg'
              onlyIcon
            >
              <WhIcon />
            </WhButton>
          </div>

          <div className='flex gap-8'>
            {/* disabled */}
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='lg'
              disabled
            >
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='lg'
              disabled
            >
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='lg'
              disabled
            >
              버튼명 입력
              <WhIcon />
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='lg'
              disabled
              onlyIcon
            >
              <WhIcon />
            </WhButton>
          </div>
        </section>

        <section className='mt-20 flex flex-col gap-2'>
          <h2>BTN TYPE - MIDDLE </h2>
          <div className='flex gap-8'>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='md'
            >
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='md'
            >
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='md'
            >
              버튼명 입력 <WhIcon />
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='md'
              onlyIcon
            >
              <WhIcon />
            </WhButton>
          </div>
          <div className='flex gap-8'>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='md'
              disabled
            >
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='md'
              disabled
            >
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='md'
              disabled
            >
              버튼명 입력
              <WhIcon />
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='md'
              disabled
              onlyIcon
            >
              <WhIcon />
            </WhButton>
          </div>
        </section>

        <section className='mt-20 flex flex-col gap-2'>
          <h2>BTN TYPE - SMALL</h2>
          <div className='flex gap-8'>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='sm'
            >
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='sm'
            >
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='sm'
            >
              버튼명 입력
              <WhIcon />
            </WhButton>
          </div>
          <div className='flex gap-8'>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              disabled
              size='sm'
            >
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              disabled
              size='sm'
            >
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              disabled
              size='sm'
            >
              버튼명 입력
              <WhIcon />
            </WhButton>
          </div>
        </section>
      </div>

      {/* right button */}
      <div>
        <section className='flex flex-col gap-2'>
          <h2>BTN TYPE OUTLINE LARGE</h2>
          <div className='flex gap-8'>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              size='lg'
            >
              버튼명 입력
            </WhButton>

            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              size='lg'
            >
              <WhIcon  src='/assets/icons/like.svg' alt='하트 아이콘' />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              size='lg'
            >
              버튼명 입력
              <WhIcon  src='/assets/icons/like.svg' alt='하트 아이콘' />
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              size='lg'
              onlyIcon
            >
              <WhIcon  src='/assets/icons/like.svg' alt='하트 아이콘' />
            </WhButton>
          </div>

          {/* disabled */}
          <div className='flex gap-8'>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              disabled
              size='lg'
            >
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              disabled
              size='lg'
            >
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              disabled
              size='lg'
            >
              버튼명 입력
              <WhIcon />
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              disabled
              size='lg'
              onlyIcon
            >
              <WhIcon />
            </WhButton>
          </div>
        </section>

        <section className='mt-20 flex flex-col gap-2'>
          <h2>BTN TYPE OUTLINE MIDDLE</h2>
          <div className='flex gap-8'>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              size='md'
            >
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              size='md'
            >
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              size='md'
            >
              버튼명 입력
              <WhIcon />
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              size='md'
              onlyIcon
            >
              <WhIcon />
            </WhButton>
          </div>
          <div className='flex gap-8'>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              disabled
              size='md'
            >
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              disabled
              size='md'
            >
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              disabled
              size='md'
            >
              버튼명 입력
              <WhIcon />
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              disabled
              size='md'
              onlyIcon
            >
              <WhIcon />
            </WhButton>
          </div>
        </section>

        <section className='mt-20 flex flex-col gap-2'>
          <h2>BTN TYPE OUTLINE - SMALL </h2>
          <div className='flex gap-8'>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              size='sm'
            >
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              size='sm'
            >
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              size='sm'
            >
              버튼명 입력
              <WhIcon />
            </WhButton>
          </div>
          <div className='flex gap-8'>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              disabled
              size='sm'
            >
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              disabled
              size='sm'
            >
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              outLine
              disabled
              size='sm'
            >
              버튼명 입력
              <WhIcon />
            </WhButton>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default page;
