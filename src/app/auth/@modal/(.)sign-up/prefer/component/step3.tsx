'use client';

import { useState } from 'react';
import WhChip from '@/components/elements/WhChip';

const genderList = [
  { id: 0, value: '동성' },
  { id: 1, value: '이성' },
  { id: 2, value: '상관 없음' },
];

const smokingList = [
  { id: 0, value: '자주 하는 편' },
  { id: 1, value: '선택적 흡연' },
  { id: 2, value: '금연 중' },
  { id: 3, value: '아예 흡연 안함' },
];

const drinkingList = [
  { id: 0, value: '자주 하는 편' },
  { id: 1, value: '선택적 음주' },
  { id: 2, value: '금주 중' },
  { id: 3, value: '아예 음주 안함' },
];

export default function SignUpPreferStep3Page() {
  const [gender, setGender] = useState<string[]>([]);
  const [smoking, setSmoking] = useState<string[]>([]);
  const [drinking, setDrinking] = useState<string[]>([]);

  function handleGenderChip(value: string) {
    if (!gender.includes(value)) {
      setGender((prev) => [...prev, value]);
    } else {
      setGender((prev) => prev.filter((item) => item !== value));
    }
  }
  function handleSmokingChip(value: string) {
    if (!smoking.includes(value)) {
      setSmoking((prev) => [...prev, value]);
    } else {
      setSmoking((prev) => prev.filter((item) => item !== value));
    }
  }
  function handleDrinkingChip(value: string) {
    if (!drinking.includes(value)) {
      setDrinking((prev) => [...prev, value]);
    } else {
      setDrinking((prev) => prev.filter((item) => item !== value));
    }
  }

  return (
    <>
      <h3 className='text-headline-03 my-5'>
        마지막 단계에요! <br />
        짝짝짝~
      </h3>
      <div className='flex flex-col gap-10 mb-11'>
        <div>
          <p className='mb-3'>원하는 동행자의 성별이 있나요?</p>
          <div className='flex gap-2 flex-wrap'>
            {genderList.map((item) => (
              <WhChip
                key={item.id}
                checked={gender.includes(item.value)}
                value={item.value}
                onClick={() => handleGenderChip(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>흡연은 어떻게 하세요?</p>
          <div className='flex gap-2 flex-wrap'>
            {smokingList.map((item) => (
              <WhChip
                key={item.id}
                checked={smoking.includes(item.value)}
                value={item.value}
                onClick={() => handleSmokingChip(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>음주는 어떻게 하세요?</p>
          <div className='flex gap-2 flex-wrap'>
            {drinkingList.map((item) => (
              <WhChip
                key={item.id}
                checked={drinking.includes(item.value)}
                value={item.value}
                onClick={() => handleDrinkingChip(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
