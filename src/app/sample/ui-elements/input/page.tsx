'use client';

import React, { useState } from 'react';
import WhInput from '@/components/elements/WhInput';

export default function Page() {
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');

  const handleInputChange1 = (value: string) => {
    setInputValue1(value);
    console.log('Input value:', value);
  };

  const handleInputChange2 = (value: string) => {
    setInputValue2(value);
    console.log('Input value:', value);
  };

  const handleInputChange3 = (value: string) => {
    setInputValue3(value);
    console.log('Input value:', value);
  };

  return (
    <div className='flex m-8 gap-10'>
      {/* height 44 */}
      <div>
        <p className='mb-5'>👉 height 44(레이블 이름 유무 설정 가능)</p>
        <p>👉 입력 내용 : {inputValue1}</p>
        <WhInput
          label='라벨 이름 lg'
          size='lg'
          placeholder='직접 내용입력'
          handleInputChange={handleInputChange1}
        />

        <WhInput
          size='lg'
          handleInputChange={handleInputChange1}
          isErr
          errorMsg='설명을 입력하세요.'
        />

        <WhInput handleInputChange={handleInputChange1} size='lg' disabled />
      </div>

      {/* height 40 */}
      <div>
        <p className='mb-5'>👉 height 40(레이블 이름 유무 설정 가능) </p>
        <p>👉 입력 내용 : {inputValue2}</p>
        <WhInput
          label='라벨 이름 md'
          handleInputChange={handleInputChange2}
          size='md'
          placeholder='직접 내용입력'
        />

        <WhInput
          handleInputChange={handleInputChange2}
          size='md'
          errorMsg='설명을 입력하세요.'
          isErr
        />

        <WhInput handleInputChange={handleInputChange2} size='md' disabled />
      </div>

      {/* height 36 */}
      <div>
        <p className='mb-5'>👉 height 36(레이블 이름 유무 설정 가능) </p>
        <p>👉 입력 내용 : {inputValue3}</p>

        <WhInput
          handleInputChange={handleInputChange3}
          label='라벨 이름 sm'
          size='sm'
          placeholder='직접 내용입력'
        />
        <WhInput
          handleInputChange={handleInputChange3}
          size='sm'
          errorMsg='설명을 입력하세요.'
          isErr
        />

        <WhInput handleInputChange={handleInputChange3} size='sm' disabled />
      </div>
    </div>
  );
}
