'use client';

import React from 'react';
import WhInput from '@/components/elements/WhInput';

export default function Page() {
  const handleInputChange = (value: string) => {
    console.log('Input value:', value); // 값 전달 확인하는 로그
  };

  return (
    <div className='flex m-8 gap-10'>
      {/* height 44 */}
      <div>
        <p className='mb-5'>👉 height 44(레이블 이름 유무 설정 가능)</p>

        <WhInput
          label='라벨 이름 lg'
          size='lg'
          placeholder='직접 내용입력'
          handleInputChange={handleInputChange}
        />

        <WhInput
          size='lg'
          handleInputChange={handleInputChange}
          isErr
          errorMsg='설명을 입력하세요.'
        />

        <WhInput handleInputChange={handleInputChange} size='lg' disabled />
      </div>

      {/* height 40 */}
      <div>
        <p className='mb-5'>👉 height 40(레이블 이름 유무 설정 가능) </p>

        <WhInput
          label='라벨 이름 md'
          handleInputChange={handleInputChange}
          size='md'
          placeholder='직접 내용입력'
        />

        <WhInput
          handleInputChange={handleInputChange}
          size='md'
          errorMsg='설명을 입력하세요.'
          isErr
        />

        <WhInput handleInputChange={handleInputChange} size='md' disabled />
      </div>

      {/* height 36 */}
      <div>
        <p className='mb-5'>👉 height 36(레이블 이름 유무 설정 가능) </p>

        <WhInput
          handleInputChange={handleInputChange}
          label='라벨 이름 sm'
          size='sm'
          placeholder='직접 내용입력'
        />
        <WhInput
          handleInputChange={handleInputChange}
          size='sm'
          errorMsg='설명을 입력하세요.'
          isErr
        />

        <WhInput handleInputChange={handleInputChange} size='sm' disabled />
      </div>
    </div>
  );
}
