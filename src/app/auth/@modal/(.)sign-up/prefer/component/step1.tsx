'use client';

import { useState } from 'react';
import WhChip from '@/components/elements/WhChip';
import WhInput from '@/components/elements/WhInput';

const mbtiList = [
  { id: 0, value: 'ISTJ' },
  { id: 1, value: 'ISTP' },
  { id: 2, value: 'ISFJ' },
  { id: 3, value: 'ISFP' },
  { id: 4, value: 'INFJ' },
  { id: 5, value: 'INTP' },
  { id: 6, value: 'INFP' },
  { id: 7, value: 'INTJ' },
  { id: 8, value: 'ESFJ' },
  { id: 9, value: 'ESFP' },
  { id: 10, value: 'ESTJ' },
  { id: 11, value: 'ENTP' },
  { id: 12, value: 'ESTP' },
  { id: 13, value: 'ENFP' },
  { id: 14, value: 'ENTJ' },
  { id: 15, value: 'ENFJ' },
];
const preferRegionList = [
  { id: 0, value: '국내' },
  { id: 1, value: '해외' },
];

export default function SignUpPreferStep1Page() {
  const [nickname, setNickname] = useState<string>('');
  const [mbti, setMbti] = useState<string[]>([]);
  const [preferRegion, setPreferRegion] = useState<string[]>([]);

  function handleMbtiChip(value: string) {
    if (!mbti.includes(value)) {
      setMbti((prev) => [...prev, value]);
    } else {
      setMbti((prev) => prev.filter((item) => item !== value));
    }
  }
  function handleRegionChip(value: string) {
    if (!preferRegion.includes(value)) {
      setPreferRegion((prev) => [...prev, value]);
    } else {
      setPreferRegion((prev) => prev.filter((item) => item !== value));
    }
  }

  return (
    <>
      <h3 className='text-headline-03 my-5'>
        닉네임, 본인의 여행 스타일을 선택해주세요. <br />
        선택된 여행 취향에 맞게 추천 해드려요 :)
      </h3>
      <div className='flex flex-col gap-10 mb-11'>
        <div>
          <WhInput
            value={nickname}
            handleInputChange={setNickname}
            size='lg'
            placeholder='닉네임은 2자 ~ 10자 이내로 입력 가능합니다.'
            label='닉네임을 입력해주세요.'
          />
        </div>
        <div>
          <p className='mb-3'>당신의 MBTI는 무엇인가요?</p>
          <div className='flex gap-2 flex-wrap'>
            {mbtiList.map((item) => (
              <WhChip
                key={item.id}
                checked={mbti.includes(item.value)}
                value={item.value}
                onClick={() => handleMbtiChip(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>여행 선호지역은 어디인가요?</p>
          <div className='flex gap-2 flex-wrap'>
            {preferRegionList.map((item) => (
              <WhChip
                key={item.id}
                checked={preferRegion.includes(item.value)}
                value={item.value}
                onClick={() => handleRegionChip(item.value)}
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
