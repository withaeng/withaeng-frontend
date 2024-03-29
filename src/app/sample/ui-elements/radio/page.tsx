'use client';

import { useState } from 'react';
import WhRadio from '@/components/elements/WhRadio';

export default function Page() {
  const [test1, setRadioValue1] = useState('');
  const [test2, setRadioValue2] = useState('');
  function handleRadio1(value: string) {
    setRadioValue1(value);
  }

  function handleRadio2(value: string) {
    setRadioValue2(value);
  }
  return (
    <div>
      <section className='flex gap-4'>
        <h2>선택 값 : {test1.toString()}</h2>
        <WhRadio
          id='apple'
          name='fruit1'
          value='사과'
          checked={test1 === '사과'}
          onChange={() => handleRadio1}
        >
          사과
        </WhRadio>
        <WhRadio
          id='banana'
          name='fruit1'
          value='바나나'
          checked={test1 === '바나나'}
          onChange={() => handleRadio1}
        >
          바나나
        </WhRadio>
        <WhRadio
          id='peach'
          name='fruit1'
          value='복숭아'
          checked={test1 === '복숭아'}
          onChange={() => handleRadio1}
        >
          복숭아
        </WhRadio>
        <WhRadio
          id='grape'
          name='fruit1'
          value='포도'
          checked={test1 === '포도'}
          onChange={() => handleRadio1}
        >
          포도
        </WhRadio>
      </section>
      <section className='flex gap-4 mt-4'>
        <h2>선택 값 : {test2.toString()}</h2>
        <WhRadio
          id='apple2'
          name='fruit2'
          value='사과'
          size='md'
          checked={test2 === '사과'}
          onChange={() => handleRadio2}
        >
          사과
        </WhRadio>
        <WhRadio
          id='banana2'
          name='fruit2'
          value='바나나'
          size='md'
          checked={test2 === '바나나'}
          onChange={() => handleRadio2}
        >
          바나나
        </WhRadio>
        <WhRadio
          id='peach2'
          name='fruit2'
          value='복숭아'
          size='md'
          checked={test2 === '복숭아'}
          onChange={() => handleRadio2}
        >
          복숭아
        </WhRadio>
        <WhRadio
          id='grape2'
          name='fruit2'
          value='포도'
          size='md'
          checked={test2 === '포도'}
          onChange={() => handleRadio2}
        >
          포도
        </WhRadio>
      </section>
    </div>
  );
}
