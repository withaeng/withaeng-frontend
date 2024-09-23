import WhButton from '@/components/elements/WhButton';
import React, { useEffect, useState } from 'react';
import dateUtil from '@/utils/dateUtil';
import WhChip from '@/components/elements/WhChip';
import WhCalendar from '@/components/elements/WhCalendar';
import WhCheckbox from '@/components/elements/WhCheckbox';
import WhSlider from '@/components/elements/WhSlider';
import { TAccompanyFilter } from '@/types/accompany';
import { ReloadArrowIcon } from '../../../public/assets/icons/arrow';
import { CloseIcon } from '../../../public/assets/icons/menu';

interface FilterModalProps {
  options: TAccompanyFilter;
  onHandle?: (value: TAccompanyFilter | null) => void;
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

const tilteCss =
  'text-headline-04 text-nutral-black-02 max-xl:text-subtitle-01';
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

export default function FilterModal({ options, onHandle }: FilterModalProps) {
  const [startDate, setStartDate] = useState<Date | null>(null);
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
    return selectedGenderList?.findIndex((el) => el.id === value) >= 0;
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

  const handleSetCompanion = (value: number | number[]) => {
    if (companionFree) {
      setCompanion(undefined);
    } else {
      setCompanion(value);
    }
  };

  const handleSetCompanionFree = (value: boolean) => {
    if (value) {
      setCompanion(undefined);
    }
    setCompanionFree(value);
  };

  const handleSetAge = (value: number | number[]) => {
    if (companionFree) {
      setAge(undefined);
    } else {
      setAge(value);
    }
  };

  const handleSetAgeFree = (value: boolean) => {
    if (value) {
      setAge(undefined);
    }
    setAgeFree(value);
  };

  const onHandelSubmit = () => {
    const res: TAccompanyFilter = {
      city: selectedCityList,
      gender: selectedGenderList,
      startDate,
      endDate,
      isToday: today,
      companion,
      companionFree,
      age,
      ageFree,
    };

    onHandle?.(res);
  };

  const onHandleClose = () => {
    resetFilter();
    onHandle?.(null);
  };

  useEffect(() => {
    if (options === null) {
      resetFilter();
    } else {
      setSelectededCityList(options.city);
      setSelectedGenderList(options.gender);
      setStartDate(options.startDate);
      setEndDate(options.endDate);
      setAge(options.age);
      setCompanion(options.companion);
      setToday(options.isToday);
      setCompanionFree(options.companionFree);
      setAgeFree(options.ageFree);
    }
  }, [options]);

  return (
    <>
      <div className='mb-5 flex justify-end' onClick={onHandleClose}>
        <CloseIcon width={24} height={24} stroke='#333333' />
      </div>
      <div className='max-xl:h-[378px]'>
        <div className='flex items-center justify-between border-b border-b-nutral-white-03 pb-5'>
          <h1 className='m-0 text-headline-03 text-nutral-black-01'>필터</h1>
          <span
            className='flex cursor-pointer items-center gap-1.5 text-body-03 text-nutral-black-04'
            onClick={resetFilter}
          >
            <ReloadArrowIcon />
            초기화
          </span>
        </div>
        <div className='mt-5 flex h-[232px] flex-col gap-10 overflow-auto xl:h-[619px]'>
          <section className='flex w-full flex-col gap-5'>
            <div>
              <span className={tilteCss}>여행지</span>
              <span className={descriptionCss}>
                (최대 3개 도시까지 선택 가능합니다.)
              </span>
            </div>
            <div className='flex flex-wrap gap-5'>
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
          <section className='flex w-full flex-col gap-5'>
            <div>
              <span className={tilteCss}>동행 일정</span>
              {startDate && endDate && (
                <span className={descriptionCss}>
                  {selectedDateRange(today, startDate, endDate)}
                </span>
              )}

              {today && <span className={descriptionCss}>(당일)</span>}
            </div>
            <div className='z-[100] flex items-center gap-[22px] max-xl:gap-3'>
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
          <section className='flex w-full flex-col gap-5'>
            <div>
              <span className={tilteCss}>동행 인원</span>
              {companion && (
                <span className={descriptionCss}>
                  {selectedCompanionRange(companion)}
                </span>
              )}
            </div>
            <div className='max-xl:mr-3'>
              <WhSlider
                range
                min={3}
                max={8}
                step={1}
                marks={companionMarks}
                value={companion}
                onChange={handleSetCompanion}
              />
            </div>
            <WhCheckbox
              id='companion-free'
              value='companion-free'
              checked={companionFree}
              onChange={handleSetCompanionFree}
            >
              상관없음
            </WhCheckbox>
          </section>
          <section className='flex w-full flex-col gap-5'>
            <div>
              <span className={tilteCss}>연령대</span>
              {age && (
                <span className={descriptionCss}>{selectedAgeRange(age)}</span>
              )}
            </div>
            <div className='max-xl:mr-3'>
              <WhSlider
                range
                min={20}
                max={50}
                step={5}
                marks={ageMarks}
                value={age}
                onChange={handleSetAge}
              />
            </div>
            <WhCheckbox
              id='age-free'
              value='age-free'
              checked={ageFree}
              onChange={handleSetAgeFree}
            >
              상관없음
            </WhCheckbox>
          </section>
          <section className='flex w-full flex-col gap-5'>
            <span className={tilteCss}>성별</span>
            <div className='flex flex-wrap gap-5'>
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
        <div className='mx-auto my-0 mt-10 w-[512px] max-xl:mt-[34px] max-xl:w-full'>
          <WhButton onClick={onHandelSubmit} size='lg'>
            확인
          </WhButton>
        </div>
      </div>
    </>
  );
}
