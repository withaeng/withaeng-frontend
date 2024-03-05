'use client';

import React from 'react';
import WhInput from '@/components/elements/WhInput';

const page = () => (
  <div className='flex  m-8 gap-10'>
    {/* height 44 */}
    <div>
      <p className='mb-[20px]'>👉 height 44(레이블 이름 유무 설정 가능)</p>

      <WhInput label='라벨 이름 lg' size='lg' placeholder='직접 내용입력' />

      <WhInput size='lg' />

      <WhInput size='lg' disabled />
    </div>

    {/* height 40 */}
    <div>
      <p className='mb-[20px]'>👉 height 44(레이블 이름 유무 설정 가능) </p>

      <WhInput label='라벨 이름 md' size='md' placeholder='직접 내용입력'>
        내용을 입력해주세요.
      </WhInput>
      <WhInput size='md' />

      <WhInput size='md' disabled />
    </div>

    {/* height 36 */}
    <div>
      <p className='mb-[20px]'>👉 height 36(레이블 이름 유무 설정 가능) </p>

      <WhInput label='라벨 이름 sm' size='sm' placeholder='직접 내용입력' />
      <WhInput size='sm' />

      <WhInput size='sm' disabled />
    </div>
  </div>
);

export default page;
