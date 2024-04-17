'use client';

import React, { useState } from 'react';
import WhChip from '@/components/elements/WhChip';

export default function WhMypageTravelType() {
  // const [mbtiList, setMbtiList] = useState<string[]>([]);
  // const mbtiList = [
  //   { id: 0, type: 'ISTJ' },
  //   { id: 1, type: 'ISTP' },
  //   { id: 2, type: 'ISFJ' },
  //   { id: 3, type: 'ISFP' },
  //   { id: 4, type: 'INFJ' },
  //   { id: 5, type: 'INTP' },
  //   { id: 6, type: 'INFP' },
  //   { id: 7, type: 'INTJ' },
  //   { id: 8, type: 'ESFJ' },
  //   { id: 9, type: 'ESFP' },
  //   { id: 10, type: 'ESTJ' },
  //   { id: 11, type: 'ENTP' },
  //   { id: 12, type: 'ESTP' },
  //   { id: 13, type: 'ENFP' },
  //   { id: 14, type: 'ENTJ' },
  //   { id: 14, type: 'ENFJ' },
  // ];

  function handleChip(value: string) {
    if (!mbtiList.includes(value)) {
      setMbtiList([...mbtiList, value]);
    } else {
      const index = mbtiList.findIndex((el) => el === value);
      const temp = [...mbtiList];
      temp.splice(index, 1);
      setMbtiList(temp);
    }
  }

  function isIncludes(value: string): boolean {
    return mbtiList.includes(value);
  }

  return (
    <div className='flex'>
      <h4 className='text-body-02 text-nutral-black-02'>
        당신의 MBTI는 무엇인가요?
      </h4>

      {/* <div className='flex gap-2'>
        {mbtiList.map((item) => (
          <div key={item.id}>
            <WhChip
              checked={isIncludes(item.type)}
              value={item.type}
              onClick={() => handleChip(item.type)}
            >
              {item.type}
            </WhChip>
          </div>
        ))}
      </div> */}
    </div>
  );
}
