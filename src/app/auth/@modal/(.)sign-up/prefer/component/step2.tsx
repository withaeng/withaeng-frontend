'use client';

import WhChip from '@/components/elements/WhChip';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const interestsList = [
  { id: 0, value: '사진' },
  { id: 1, value: '음식' },
  { id: 2, value: '관광지' },
  { id: 3, value: '자연' },
  { id: 4, value: '카페' },
  { id: 5, value: '박물관' },
  { id: 6, value: '전시관' },
  { id: 7, value: '미술관' },
  { id: 8, value: '마을 축제' },
  { id: 9, value: '힐링 케어' },
  { id: 10, value: '쇼핑' },
  { id: 11, value: '호캉스' },
];

const consumeList = [
  { id: 0, value: '가성비' },
  { id: 1, value: '쓸 때 쓰는 스타일' },
  { id: 2, value: '황제투어' },
];

const cantEatList = [
  { id: 0, value: '갑각류' },
  { id: 1, value: '해산물' },
  { id: 2, value: '매운 음식' },
  { id: 3, value: '육류' },
  { id: 4, value: '향이 센 음식' },
  { id: 5, value: '유제품' },
  { id: 6, value: '날 것' },
  { id: 7, value: '기름진 음식' },
  { id: 8, value: '면 요리' },
  { id: 9, value: '밀가루' },
  { id: 10, value: '탄산' },
];

export default function SignUpPreferStep2Page() {
  const [interests, setInterests] = useState<string[]>([]);
  const [consume, setConsume] = useState<string[]>([]);
  const [cantEat, setCantEat] = useState<string[]>([]);

  const router = useRouter();
  const onClick = () => {
    router.push('/auth/sign-up/z03/step7');
  };

  function handleInterestsChip(value: string) {
    if (!interests.includes(value)) {
      setInterests((prev) => [...prev, value]);
    } else {
      setInterests((prev) => prev.filter((item) => item !== value));
    }
  }
  function handleConsumeChip(value: string) {
    if (!consume.includes(value)) {
      setConsume((prev) => [...prev, value]);
    } else {
      setConsume((prev) => prev.filter((item) => item !== value));
    }
  }
  function handleCantEatChip(value: string) {
    if (!cantEat.includes(value)) {
      setCantEat((prev) => [...prev, value]);
    } else {
      setCantEat((prev) => prev.filter((item) => item !== value));
    }
  }

  return (
    <>
      <h3 className='text-headline-03 my-5'>
        잘하고 계세요 :) <br />
        조금만 화이팅 해주세요!
      </h3>
      <div className='flex flex-col gap-10 mb-11'>
        <div>
          <p className='mb-3'>여행 관심사는 어떻게 되세요?</p>
          <div className='flex gap-2 flex-wrap'>
            {interestsList.map((item) => (
              <WhChip
                key={item.id}
                checked={interests.includes(item.value)}
                value={item.value}
                onClick={() => handleInterestsChip(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>여행에서의 소비 스타일은 어때요?</p>
          <div className='flex gap-2 flex-wrap'>
            {consumeList.map((item) => (
              <WhChip
                key={item.id}
                checked={consume.includes(item.value)}
                value={item.value}
                onClick={() => handleConsumeChip(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>못 먹는 음식 있으세요?</p>
          <div className='flex gap-2 flex-wrap'>
            {cantEatList.map((item) => (
              <WhChip
                key={item.id}
                checked={cantEat.includes(item.value)}
                value={item.value}
                onClick={() => handleCantEatChip(item.value)}
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
