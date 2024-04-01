'use client';

import WhTextarea from '@/components/elements/WhTextarea';
import React, { useState } from 'react';

export default function Page() {
  const [textareaValue, setTextareaValue] = useState('');
  const [textareaCount, setTextareaCount] = useState(0);

  const handleTextareaChange = (value: string) => {
    setTextareaValue(value);
    setTextareaCount(value.length);
  };

  return (
    <div className='m-8'>
      <p>👉 입력되고 있는 내용 : {textareaValue}</p>
      <p>👉 입력되고 있는 글자수 : {textareaCount}</p>

      <div className='flex gap-10'>
        <WhTextarea
          label='레이블 이름'
          placeholder='직접 내용입력'
          handleTextareaChange={handleTextareaChange}
        />

        <WhTextarea
          label='레이블 이름'
          handleTextareaChange={handleTextareaChange}
          disabled
        />
      </div>
    </div>
  );
}
