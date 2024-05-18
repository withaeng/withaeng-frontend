'use client';

import WhCalendar from '@/components/elements/WhCalendar';
import WhCheckbox from '@/components/elements/WhCheckbox';
import WhChip from '@/components/elements/WhChip';
import WhSlider from '@/components/elements/WhSlider';
import WhModal from '@/components/elements/modal/WhModal';
import useModal from '@/components/elements/modal/useModal';
import dateUtil from '@/utils/dateUtil';
import { useState } from 'react';
import { ReloadArrowIcon } from '../../../public/assets/icons/arrow';

interface FilterModalProps {
  isOpen: boolean;
}

// TODO
const cityList = [
  { id: 'seoul', value: '서울' },
  { id: 'jeju', value: '제주도' },
  { id: 'busan', value: '부산' },
  { id: 'daegu', value: '대구' },
];

const genderList = [
  { id: 'm', value: '남성' },
  { id: 'f', value: '여성' },
  { id: 'all', value: '누구나' },
];

const ageMarks = {
  20: '20',
  25: '25',
  30: '30',
  35: '35',
  40: '40',
  45: '45',
  50: '50+',
};

const companionMarks = {
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
};

const tilteCss = 'text-headline-04 text-nutral-black-02';
const descriptionCss = 'text-subtitle-02 text-nutral-black-05 ml-2';

const selectedDateRange = (today: boolean, startDate: Date, endDate: Date) => {
  if (today) {
    return dateUtil.dateFormat(new Date().toString());
  }
  return `${dateUtil.dateFormat(startDate.toString())} ~
                ${dateUtil.dateFormat(endDate.toString())}`;
};
const selectedCompanionRange = (companion: number | number[]): string => {
  if (Array.isArray(companion)) {
    if (companion.length === 2 && companion[0] === companion[1]) {
      return `${companion[0]}명`;
    }
    return `${companion.join('~')}명`;
  }
  return `${companion}살`;
};

const selectedAgeRange = (age: number | number[]): string => {
  if (Array.isArray(age)) {
    if (age.length === 2 && age[0] === age[1]) {
      return `${age[0]}살`;
    }
    return `${age.join('~')}살`;
  }
  return `${age}살`;
};

export default function FilterModal({ isOpen }: FilterModalProps) {
  const { onClose } = useModal();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [today, setToday] = useState<boolean>(false);
  const [age, setAge] = useState<number | number[] | undefined>();
  const [companion, setCompanion] = useState<number | number[]>();
  const [filteredCityList, setFilteredCityList] = useState<
    { id: string; value: string }[]
  >([]);
  const [filteredGenderList, setFilteredGenderList] = useState<
    { id: string; value: string }[]
  >([]);

  const isIncludes = (type: string, value: string): boolean => {
    if (type === 'city') {
      return filteredCityList.findIndex((el) => el.id === value) >= 0;
    }
    return filteredGenderList.findIndex((el) => el.id === value) >= 0;
  };

  const selectCity = (city: { id: string; value: string }) => {
    if (!isIncludes('city', city.id)) {
      if (filteredCityList.length >= 3) return;

      setFilteredCityList([...filteredCityList, city]);
    } else {
      setFilteredCityList(filteredCityList.filter((el) => el.id !== city.id));
    }
  };

  const selectGender = (gender: { id: string; value: string }) => {
    if (!isIncludes('gender', gender.id)) {
      setFilteredGenderList([...filteredGenderList, gender]);
    } else {
      setFilteredGenderList(
        filteredGenderList.filter((el) => el.id !== gender.id)
      );
    }
  };

  const resetFilter = () => {
    setFilteredCityList([]);
    setFilteredGenderList([]);
    setStartDate(null);
    setEndDate(null);
    setAge(undefined);
    setCompanion(undefined);
    setToday(false);
  };

  return (
    <WhModal isOpen={isOpen} onClose={onClose}>
      <div className='flex justify-between pb-5 border-b border-b-nutral-white-03'>
        <h1 className='text-headline-03 text-nutral-black-01'>필터</h1>
        <span
          className='flex items-center gap-1.5 text-body-03 text-nutral-black-04 cursor-pointer'
          onClick={resetFilter}
        >
          <ReloadArrowIcon />
          초기화
        </span>
      </div>
      <div className='flex gap-10 flex-col mt-5'>
        <section className='w-full flex gap-5 flex-col'>
          <div>
            <span className={tilteCss}>여행지</span>
            <span className={descriptionCss}>
              (최대 3개 도시까지 선택 가능합니다.)
            </span>
          </div>
          <div className='flex gap-5 flex-wrap'>
            {cityList.map((city) => (
              <WhChip
                key={city.id}
                value={city.value}
                checked={isIncludes('city', city.id)}
                onClick={() => selectCity(city)}
              >
                {city.value}
              </WhChip>
            ))}
          </div>
        </section>
        <section className='w-full flex gap-5 flex-col'>
          <div>
            <span className={tilteCss}>동행 일정</span>
            {startDate && endDate && (
              <span className={descriptionCss}>
                {selectedDateRange(today, startDate, endDate)}
              </span>
            )}

            {today && <span className={descriptionCss}>(댱일)</span>}
          </div>
          <div className='flex items-center gap-[22px] z-[100]'>
            <WhCalendar value={startDate} onChange={setStartDate} />
            ~
            <WhCalendar value={endDate} onChange={setEndDate} />
          </div>
          <WhCheckbox
            id='today'
            value='today'
            checked={today}
            onChange={setToday}
          >
            당일
          </WhCheckbox>
        </section>
        <section className='w-full flex gap-5 flex-col'>
          <div>
            <span className={tilteCss}>동행 인원</span>
            {companion && (
              <span className={descriptionCss}>
                {selectedCompanionRange(companion)}
              </span>
            )}
          </div>
          <WhSlider
            range
            min={3}
            max={8}
            step={1}
            marks={companionMarks}
            value={companion}
            onChange={setCompanion}
          />
        </section>
        <section className='w-full flex gap-5 flex-col'>
          <div>
            <span className={tilteCss}>연령대</span>
            {age && (
              <span className={descriptionCss}>{selectedAgeRange(age)}</span>
            )}
          </div>
          <WhSlider
            range
            min={20}
            max={50}
            step={5}
            marks={ageMarks}
            value={age}
            onChange={setAge}
          />
        </section>
        <section className='w-full flex gap-5 flex-col'>
          <span className={tilteCss}>성별</span>
          <div className='flex gap-5 flex-wrap'>
            {genderList.map((gender) => (
              <WhChip
                key={gender.id}
                value={gender.value}
                checked={isIncludes('gender', gender.id)}
                onClick={() => selectGender(gender)}
              >
                {gender.value}
              </WhChip>
            ))}
          </div>
        </section>
      </div>
    </WhModal>
  );
}
