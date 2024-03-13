'use client';

import React from 'react';
import WhChip from '@/components/elements/WhChip';

const page = () => (
  <div className='flex  m-10 gap-8'>
    <div>
      <p className='mb-5'>👉 default</p>
      <WhChip
        onClick={() => {
          alert('태그 공용 컴포넌트입니다.');
        }}
      >
        태그 내용
      </WhChip>
    </div>
    <div>
      <p className='mb-5'>👉 disabled </p>
      <WhChip
        onClick={() => {
          alert('태그 공용 컴포넌트입니다.');
        }}
        disabled
      >
        태그 내용
      </WhChip>
    </div>
  </div>
);

export default page;
