'use client';

import React, { useEffect, useState } from 'react';
import WhChip from '@/components/elements/WhChip';
import useStore from '@/store/UserStore';
import WhMoreButton from './WhMoreButton';

export default function WhMypageTravelType() {
  const [chipList, setChipList] = useState<string[]>([]);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const { user, fetchUser } = useStore();

  useEffect(() => {
    fetchUser;
  }, [fetchUser]);

  function handleChip(value: string) {
    if (!chipList.includes(value)) {
      setChipList([...chipList, value]);
    } else {
      const index = chipList.findIndex((el) => el === value);
      const temp = [...chipList];
      temp.splice(index, 1);
      setChipList(temp);
    }
  }

  function isIncludes(value: string): boolean {
    return chipList.includes(value);
  }

  const myTravelType = [
    {
      id: 0,
      title: '당신의 MBTI는 무엇인가요?',
      mbti: [
        { id: 0, type: 'ISTJ' },
        { id: 1, type: 'ISTP' },
        { id: 2, type: 'ISFJ' },
        { id: 3, type: 'ISFP', status: 'true' },
        { id: 4, type: 'INFJ' },
        { id: 5, type: 'INTP' },
        { id: 6, type: 'INFP' },
        { id: 7, type: 'INTJ' },
        { id: 8, type: 'ESFJ' },
        { id: 9, type: 'ESFP' },
        { id: 10, type: 'ESTJ' },
        { id: 11, type: 'ENTP' },
        { id: 12, type: 'ESTP' },
        { id: 13, type: 'ENFP' },
        { id: 14, type: 'ENTJ' },
        { id: 15, type: 'ENFJ' },
      ],
    },

    {
      id: 1,
      title: '여행 선호지역은 어디인가요?',
      preferTravelType: [
        { id: 0, type: '국내' },
        { id: 1, type: '해외', status: 'true' },
      ],
    },

    {
      id: 2,
      title: '여행 관심사는 어떻게 되세요?',
      preferTravelThemes: [
        { id: 0, type: '사진' },
        { id: 1, type: '음식' },
        { id: 2, type: '관광지', status: 'true' },
        { id: 3, type: '자연' },
        { id: 4, type: '카페' },
        { id: 5, type: '박물관' },
        { id: 6, type: '전시관' },
        { id: 7, type: '미술관' },
        { id: 8, type: '마을 축제' },
        { id: 9, type: '힐링 케어' },
        { id: 10, type: '쇼핑' },
        { id: 11, type: '호캉스' },
      ],
    },

    {
      id: 3,
      title: '여행에서의 소비 스타일은 어때요?',
      consumeStyle: [
        { id: 0, type: '가성비' },
        { id: 1, type: '쓸 때 쓰는 스타일' },
        { id: 2, type: '황제투어', status: 'true' },
      ],
    },

    {
      id: 4,
      title: '못 먹는 음식 있으세요?',
      foodRestrictions: [
        { id: 0, type: '갑각류' },
        { id: 1, type: '해산물' },
        { id: 2, type: '매운 음식' },
        { id: 3, type: '육류' },
        { id: 4, type: '향이 센 음식' },
        { id: 5, type: '유제품' },
        { id: 6, type: '날 것' },
        { id: 7, type: '기름진 음식' },
        { id: 8, type: '면 요리' },
        { id: 9, type: '밀가루' },
        { id: 10, type: '탄산', status: 'true' },
      ],
    },

    {
      id: 5,
      title: '원하는 동행자의 성별이 있나요?',
      preferAccompanyGender: [
        { id: 0, type: '남성' },
        { id: 1, type: '여성' },
        { id: 2, type: '상관 없음', status: 'true' },
      ],
    },

    {
      id: 6,
      title: '흡연은 어떻게 하세요?',
      smokingType: [
        { id: 0, type: '자주 하는 편' },
        { id: 1, type: '선택적 흡연' },
        { id: 2, type: '금연 중' },
        { id: 3, type: '아예 흡연 안함', status: 'true' },
      ],
    },

    {
      id: 7,
      title: '음주는 어떻게 하세요?',
      drinkingType: [
        { id: 0, type: '자주 하는 편' },
        { id: 1, type: '선택적 음주' },
        { id: 2, type: '금주 중', status: 'true' },
        { id: 3, type: '아예 음주 안함' },
      ],
    },
  ];

  return (
    <div className='relative'>
      <div
        className={`flex flex-col gap-10 overflow-hidden  ${isMoreOpen ? 'h-[429px]' : ''}`}
      >
        {/* MBTI 타입 */}
        <div>
          <h4 className='text-body-02 text-neutral-black-02 pb-3'>
            당신의 MBTI는 무엇인가요?
          </h4>
          {myTravelType.map((item) => (
            <div key={item.id} className='flex gap-2 w-[510px] flex-wrap'>
              {item.mbti &&
                item.mbti.map((option) => (
                  <WhChip
                    key={option.id}
                    value={option.type}
                    checked={isIncludes(option.type)}
                    onClick={() => handleChip(option.type)}
                  >
                    {option.type}
                  </WhChip>
                ))}
            </div>
          ))}
        </div>
        {/* 여행 선호지역 타입 */}
        <div>
          <h4 className='text-body-02 text-neutral-black-02 pb-3'>
            여행 선호지역은 어디인가요?
          </h4>
          {myTravelType.map((item) => (
            <div key={item.id} className='flex gap-2 w-[510px] flex-wrap'>
              {item.preferTravelType &&
                item.preferTravelType.map((option) => (
                  <WhChip
                    key={option.id}
                    value={option.type}
                    checked={isIncludes(option.type)}
                    onClick={() => handleChip(option.type)}
                  >
                    {option.type}
                  </WhChip>
                ))}
            </div>
          ))}
        </div>
        {/* 여행 관심사 타입 */}
        <div>
          <h4 className='text-body-02 text-neutral-black-02 pb-3'>
            여행 관심사는 어떻게 되세요?
          </h4>
          {myTravelType.map((item) => (
            <div key={item.id} className='flex gap-2 w-[510px] flex-wrap'>
              {item.preferTravelThemes &&
                item.preferTravelThemes.map((option) => (
                  <WhChip
                    key={option.id}
                    value={option.type}
                    checked={isIncludes(option.type)}
                    onClick={() => handleChip(option.type)}
                  >
                    {option.type}
                  </WhChip>
                ))}
            </div>
          ))}
        </div>
        {/* 소비 스타일 타입 */}
        <div>
          <h4 className='text-body-02 text-neutral-black-02 pb-3'>
            여행에서의 소비 스타일은 어때요?
          </h4>
          {myTravelType.map((item) => (
            <div key={item.id} className='flex gap-2 w-[510px] flex-wrap'>
              {item.consumeStyle &&
                item.consumeStyle.map((option) => (
                  <WhChip
                    key={option.id}
                    value={option.type}
                    checked={isIncludes(option.type)}
                    onClick={() => handleChip(option.type)}
                  >
                    {option.type}
                  </WhChip>
                ))}
            </div>
          ))}
        </div>
        {/* 못 먹는 음식 타입 */}
        <div>
          <h4 className='text-body-02 text-neutral-black-02 pb-3'>
            못 먹는 음식 있으세요?
          </h4>
          {myTravelType.map((item) => (
            <div key={item.id} className='flex gap-2 w-[510px] flex-wrap'>
              {item.foodRestrictions &&
                item.foodRestrictions.map((option) => (
                  <WhChip
                    key={option.id}
                    value={option.type}
                    checked={isIncludes(option.type)}
                    onClick={() => handleChip(option.type)}
                  >
                    {option.type}
                  </WhChip>
                ))}
            </div>
          ))}
        </div>
        {/* 동행자 타입 */}
        <div>
          <h4 className='text-body-02 text-neutral-black-02 pb-3'>
            원하는 동행자의 성별이 있나요?
          </h4>
          {myTravelType.map((item) => (
            <div key={item.id} className='flex gap-2 w-[510px] flex-wrap'>
              {item.preferAccompanyGender &&
                item.preferAccompanyGender.map((option) => (
                  <WhChip
                    key={option.id}
                    value={option.type}
                    checked={isIncludes(option.type)}
                    onClick={() => handleChip(option.type)}
                  >
                    {option.type}
                  </WhChip>
                ))}
            </div>
          ))}
        </div>
        {/* 흡연 타입 */}
        <div>
          <h4 className='text-body-02 text-neutral-black-02 pb-3'>
            흡연은 어떻게 하세요?
          </h4>
          {myTravelType.map((item) => (
            <div key={item.id} className='flex gap-2 w-[510px] flex-wrap'>
              {item.smokingType &&
                item.smokingType.map((option) => (
                  <WhChip
                    key={option.id}
                    value={option.type}
                    checked={isIncludes(option.type)}
                    onClick={() => handleChip(option.type)}
                  >
                    {option.type}
                  </WhChip>
                ))}
            </div>
          ))}
        </div>
        {/* 음주 타입 */}
        <div>
          <h4 className='text-body-02 text-neutral-black-02 pb-3'>
            음주는 어떻게 하세요?
          </h4>
          {myTravelType.map((item) => (
            <div key={item.id} className='flex gap-2 w-[510px] flex-wrap'>
              {item.drinkingType &&
                item.drinkingType.map((option) => (
                  <WhChip
                    key={option.id}
                    value={option.type}
                    checked={isIncludes(option.type)}
                    onClick={() => handleChip(option.type)}
                  >
                    {option.type}
                  </WhChip>
                ))}
            </div>
          ))}
        </div>
      </div>
      <WhMoreButton
        onClick={() => setIsMoreOpen(!isMoreOpen)}
        isOpen={isMoreOpen}
      />
    </div>
  );
}
