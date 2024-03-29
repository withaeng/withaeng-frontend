'use client';

import React, { useState } from 'react';
import WhInput from '@/components/elements/WhInput';

export default function Page() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='flex m-8 gap-10'>
      {/* height 44 */}
      <div>
        <p className='mb-5'>👉 height 44(레이블 이름 유무 설정 가능)</p>

        <WhInput
          label='라벨 이름 lg'
          size='lg'
          placeholder='직접 내용입력'
          inputValue={inputValue}
          setInputValue={setInputValue}
        />

        <WhInput
          size='lg'
          inputValue={inputValue}
          setInputValue={setInputValue}
          isErr
          errorMsg='설명을 입력하세요.'
        />

        <WhInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          size='lg'
          disabled
        />
      </div>

      {/* height 40 */}
      <div>
        <p className='mb-5'>👉 height 40(레이블 이름 유무 설정 가능) </p>

        <WhInput
          label='라벨 이름 md'
          inputValue={inputValue}
          setInputValue={setInputValue}
          size='md'
          placeholder='직접 내용입력'
        >
          내용을 입력해주세요.
        </WhInput>
        <WhInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          size='md'
          errorMsg='설명을 입력하세요.'
          isErr
        />

        <WhInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          size='md'
          disabled
        />
      </div>

      {/* height 36 */}
      <div>
        <p className='mb-5'>👉 height 36(레이블 이름 유무 설정 가능) </p>

        <WhInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          label='라벨 이름 sm'
          size='sm'
          placeholder='직접 내용입력'
        />
        <WhInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          size='sm'
          errorMsg='설명을 입력하세요.'
          isErr
        />

        <WhInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          size='sm'
          disabled
        />
      </div>
    </div>
  );
}
