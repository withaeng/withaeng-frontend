'use client';

import React from 'react';
import { WhButton } from '../ui-elements/WhButton';

import WhIcon from '../ui-elements/WhIcon';

const page = () => (
  <div className='m-6'>
    <h1 className='py-4'> this is Button page</h1>

    <div className='flex gap-16'>
      {/* left button */}
      <div>
        <section className='flex flex-col gap-4'>
          <h2>BTN TYPE - LARGE</h2>
          <div className='flex gap-8'>
            <WhButton onClick={() => {}} size='lg'>
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} size='lg'>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} size='lg'>
              버튼명 입력
              <WhIcon />
            </WhButton>

            <WhButton onClick={() => {}} size='lg' onlyIcon>
              <WhIcon />
            </WhButton>
          </div>

          <div className='flex gap-8'>
            {/* disabled */}
            <WhButton onClick={() => {}} size='lg' disabled>
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} size='lg' disabled>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} size='lg' disabled>
              버튼명 입력
              <WhIcon />
            </WhButton>
            <WhButton onClick={() => {}} size='lg' disabled onlyIcon>
              <WhIcon />
            </WhButton>
          </div>
        </section>

        <section className='mt-20 flex flex-col gap-4'>
          <h2>BTN TYPE - MIDDLE </h2>
          <div className='flex gap-8'>
            <WhButton onClick={() => {}}> 버튼명 입력</WhButton>
            <WhButton onClick={() => {}}>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}}>
              버튼명 입력 <WhIcon />
            </WhButton>
            <WhButton onClick={() => {}} onlyIcon>
              <WhIcon />
            </WhButton>
          </div>
          <div className='flex gap-8'>
            <WhButton onClick={() => {}} disabled>
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} disabled>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} disabled>
              버튼명 입력
              <WhIcon />
            </WhButton>
            <WhButton onClick={() => {}} disabled onlyIcon>
              <WhIcon />
            </WhButton>
          </div>
        </section>

        <section className='mt-20 flex flex-col gap-4'>
          <h2>BTN TYPE - SMALL</h2>
          <div className='flex gap-8'>
            <WhButton onClick={() => {}} size='sm'>
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} size='sm'>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} size='sm'>
              버튼명 입력
              <WhIcon />
            </WhButton>
          </div>
          <div className='flex gap-8'>
            <WhButton onClick={() => {}} disabled size='sm'>
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} disabled size='sm'>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} disabled size='sm'>
              버튼명 입력
              <WhIcon />
            </WhButton>
          </div>
        </section>
      </div>

      {/* right button */}
      <div>
        <section className='flex flex-col gap-4'>
          <h2>BTN TYPE OUTLINE LARGE</h2>
          <div className='flex gap-8'>
            <WhButton onClick={() => {}} outLine size='lg'>
              버튼명 입력
            </WhButton>

            <WhButton onClick={() => {}} outLine size='lg'>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} outLine size='lg'>
              버튼명 입력
              <WhIcon />
            </WhButton>
            <WhButton onClick={() => {}} outLine size='lg' onlyIcon>
              <WhIcon />
            </WhButton>
          </div>

          {/* disabled */}
          <div className='flex gap-8'>
            <WhButton onClick={() => {}} outLine disabled size='lg'>
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} outLine disabled size='lg'>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} outLine disabled size='lg'>
              버튼명 입력
              <WhIcon />
            </WhButton>
            <WhButton onClick={() => {}} outLine disabled size='lg' onlyIcon>
              <WhIcon />
            </WhButton>
          </div>
        </section>

        <section className='mt-20 flex flex-col gap-4'>
          <h2>BTN TYPE OUTLINE MIDDLE</h2>
          <div className='flex gap-8'>
            <WhButton onClick={() => {}} outLine>
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} outLine>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} outLine>
              버튼명 입력
              <WhIcon />
            </WhButton>
            <WhButton onClick={() => {}} outLine onlyIcon>
              <WhIcon />
            </WhButton>
          </div>
          <div className='flex gap-8'>
            <WhButton onClick={() => {}} outLine disabled>
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} outLine disabled>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} outLine disabled>
              버튼명 입력
              <WhIcon />
            </WhButton>
            <WhButton onClick={() => {}} outLine disabled onlyIcon>
              <WhIcon />
            </WhButton>
          </div>
        </section>

        <section className='mt-20 flex flex-col gap-4'>
          <h2>BTN TYPE OUTLINE - SMALL </h2>
          <div className='flex gap-8'>
            <WhButton onClick={() => {}} outLine size='sm'>
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} outLine size='sm'>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} outLine size='sm'>
              버튼명 입력
              <WhIcon />
            </WhButton>
          </div>
          <div className='flex gap-8'>
            <WhButton onClick={() => {}} outLine disabled size='sm'>
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} outLine disabled size='sm'>
              <WhIcon />
              버튼명 입력
            </WhButton>
            <WhButton onClick={() => {}} outLine disabled size='sm'>
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
