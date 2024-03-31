'use client';

import WhTextarea from '@/components/elements/WhTextarea';
import React from 'react';

export default function Page() {
  const handleTextareaChange = (value: string) => {
    console.log('Textare value:', value);
  };

  return (
    <div className='flex m-8 gap-10'>
      <div>
        <WhTextarea
          label='레이블 이름'
          placeholder='직접 내용입력'
          handleTextareaChange={handleTextareaChange}
        />
      </div>

      <div>
        <WhTextarea
          label='레이블 이름'
          handleTextareaChange={handleTextareaChange}
          disabled
        />
      </div>
    </div>
  );
}
