import WhButton from '@/components/elements/WhButton';
import React, { useState } from 'react';
import dateUtil from '@/utils/dateUtil';
import WhChip from '@/components/elements/WhChip';
import WhCalendar from '@/components/elements/WhCalendar';
import WhCheckbox from '@/components/elements/WhCheckbox';
import WhSlider from '@/components/elements/WhSlider';
import { TAccompanyFilter } from '@/types/accompany';
import { ReloadArrowIcon } from '../../../public/assets/icons/arrow';

interface FilterModalProps {
  onHandle?: (value: TAccompanyFilter) => void;
}

const cityList = [
  { id: 'SEOUL', value: '서울' },
  { id: 'JEJU', value: '제주도' },
  { id: 'BUSAN', value: '부산' },
  { id: 'DAEGU', value: '대구' },
];

const genderList = [
  { id: 'M', value: '남성' },
  { id: 'F', value: '여성' },
  { id: 'ALL', value: '누구나' },
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

export default function FilterModal({ onHandle }: FilterModalProps) {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [today, setToday] = useState<boolean>(false);
  const [age, setAge] = useState<number | number[] | undefined>();
  const [companion, setCompanion] = useState<number | number[]>();
  const [companionFree, setCompanionFree] = useState<boolean>(false);
  const [ageFree, setAgeFree] = useState<boolean>(false);
  const [selectedCityList, setSelectededCityList] = useState<
    { id: string; value: string }[]
  >([]);
  const [selectedGenderList, setSelectedGenderList] = useState<
    { id: string; value: string }[]
  >([]);

  const isIncludes = (type: string, value: string): boolean => {
    if (type === 'city') {
      return selectedCityList.findIndex((el) => el.id === value) >= 0;
    }
    return selectedGenderList.findIndex((el) => el.id === value) >= 0;
  };

  const selectCity = (city: { id: string; value: string }) => {
    if (!isIncludes('city', city.id)) {
      if (selectedCityList.length >= 3) return;
      setSelectededCityList([...selectedCityList, city]);
    } else {
      setSelectededCityList(selectedCityList.filter((el) => el.id !== city.id));
    }
  };

  const selectGender = (gender: { id: string; value: string }) => {
    if (!isIncludes('gender', gender.id)) {
      setSelectedGenderList([...selectedGenderList, gender]);
    } else {
      setSelectedGenderList(
        selectedGenderList.filter((el) => el.id !== gender.id)
      );
    }
  };

  const resetFilter = () => {
    setSelectededCityList([]);
    setSelectedGenderList([]);
    setStartDate(null);
    setEndDate(null);
    setAge(undefined);
    setCompanion(undefined);
    setToday(false);
    setCompanionFree(false);
    setAgeFree(false);
  };

  const onHandleToday = (value: boolean) => {
    const t = new Date();
    if (value) {
      setStartDate(t);
      setEndDate(t);
    }
    setToday(value);
  };

  const onHandelSubmit = () => {
    const res: TAccompanyFilter = {
      city: selectedCityList,
      gender: selectedGenderList,
      startDate,
      endDate,
      companion: companionFree ? null : companion,
      age: ageFree ? null : age,
    };

    onHandle?.(res);
  };

  return (
    <>
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
      <div className='h-[619px] flex gap-10 flex-col mt-5 overflow-auto'>
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
            onChange={onHandleToday}
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
          <WhCheckbox
            id='companion-free'
            value='companion-free'
            checked={companionFree}
            onChange={setCompanionFree}
          >
            상관없음
          </WhCheckbox>
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
          <WhCheckbox
            id='age-free'
            value='age-free'
            checked={ageFree}
            onChange={setAgeFree}
          >
            상관없음
          </WhCheckbox>
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
      <div className='mt-10 w-[512px] my-0 mx-auto'>
        <WhButton onClick={onHandelSubmit}>확인</WhButton>
      </div>
    </>
  );
}
