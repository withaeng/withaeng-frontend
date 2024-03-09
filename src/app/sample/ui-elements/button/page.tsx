'use client';

import React from 'react';
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
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='lg'
            >
              버튼명 입력
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
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='md'
            >
              버튼명 입력 
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
              
              버튼명 입력
            </WhButton>
            <WhButton
              onClick={() => {
                alert('버튼컴포넌트');
              }}
              size='sm'
            >
              버튼명 입력
              
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
              
            </WhButton>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default page;
