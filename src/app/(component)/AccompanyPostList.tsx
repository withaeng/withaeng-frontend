'use client';

import useModal from '@/hooks/useModal';
import { ReactElement, useCallback, useState } from 'react';
import WhTab, { TabData } from '@/components/elements/WhTab';
import { TAccompanyPost } from '@/types/accompany';
import WhCard from '@/components/elements/WhCard';
import { FilterIcon } from '../../../public/assets/icons/system';
import WhFilterLabel from '@/components/elements/WhFilterLabel';
import dayjs from 'dayjs';

interface AccompanyPostListProps {
  continentList: TabData[];
  accompanyList: TAccompanyPost[];
}

function formatSchedule(startDate: Date, endDate: Date = new Date()): string {
  const startDt = dayjs(startDate);
  const endDt = dayjs(endDate);
  const duration = endDt.diff(startDt, 'days') + 1;

  let start_date_str = '';

  if (duration > 0) {
    start_date_str = `${startDt.format('YY.MM.DD')}~${endDt.format('YY.MM.DD')}`;
  } else {
    start_date_str = startDt.format('YY.MM.DD');
  }

  return `${start_date_str}(${duration}일)`;
}

const accompanyPostList = (
  accompanyList: TAccompanyPost[],
  continent: string
): ReactElement => {
  if (continent === 'ALL') {
    return (
      <>
        {accompanyList.map((accompany) => (
          <li key={accompany.id}>
            <WhCard
              status={accompany.status}
              profileImageUrl={accompany.userProfileImageUrl}
              nickname={accompany.userNickname}
              title={accompany.title}
              tags={accompany.tags}
              startTripDate={accompany.startTripDate}
              endTripDate={accompany.endTripDate}
              accompanyCnt={accompany.memberCount}
              accompaniedCnt={accompany.joinedCount}
              thumbnailImageUrl={accompany.bannerImageUrl}
            />
          </li>
        ))}
      </>
    );
  }
  return (
    <>
      {accompanyList
        .filter((el) => el.destination.continent === continent)
        .map((accompany) => (
          <li key={accompany.id}>
            <WhCard
              status={accompany.status}
              profileImageUrl={accompany.userProfileImageUrl}
              nickname={accompany.userNickname}
              title={accompany.title}
              tags={accompany.tags}
              startTripDate={accompany.startTripDate}
              endTripDate={accompany.endTripDate}
              accompanyCnt={accompany.memberCount}
              accompaniedCnt={accompany.joinedCount}
              thumbnailImageUrl={accompany.bannerImageUrl}
            />
          </li>
        ))}
    </>
  );
};
export default function AccompanyPostList({
  continentList,
  accompanyList,
}: AccompanyPostListProps) {
  const { filter } = useModal();
  const [continent, setContinent] = useState<string>(continentList[0].id);
  const [filterLabelList, setFilterLabelList] = useState<string[]>([]);
  const handleChangeTabValue = useCallback(
    (tabId: string) => {
      setContinent(tabId);
    },
    [continent]
  );

  const openFilterModal = async () => {
    const res = await filter();
    const list: string[] = [];

    // 동행인원
    if (res.companion && Array.isArray(res.companion)) {
      if (res.companion.length > 1) {
        list.push(
          `동행인원 : ${res.companion[0]}~${res.companion[res.companion.length - 1]}명`
        );
      } else {
        list.push(`동행인원 : ${res.companion[0]}명`);
      }
    }

    // 동행일정
    if (res.startDate && !res.endDate) {
      list.push(`동행일정 : ${formatSchedule(res.startDate)}`);
    }
    if (res.startDate && res.endDate) {
      list.push(`동행일정 : ${formatSchedule(res.startDate, res.endDate)}`);
    }

    // 연령대
    if (res.age && Array.isArray(res.age)) {
      if (res.age.length > 1) {
        list.push(`연령대 : ${res.age[0]}~${res.age[res.age.length - 1]}살`);
      } else {
        list.push(`연령대 : ${res.age[0]}살`);
      }
    }

    // 성별
    if (res.gender && Array.isArray(res.gender)) {
      list.push(`성별 : ${res.gender.map((item) => item.value).join(',')}`);
    }

    setFilterLabelList([...list]);
    // TODO: set filter label
    console.log('openFilterModal', res);
  };
  return (
    <WhTab
      dataList={continentList}
      value={continent}
      onChange={handleChangeTabValue}
    >
      <section className='mb-5 mt-3 flex gap-3'>
        <button
          type='button'
          className='flex items-center justify-center gap-1 rounded-[20px] border border-nutral-white-03 bg-nutral-white-01 py-1 pl-1.5 pr-2 transition'
          onClick={openFilterModal}
        >
          <FilterIcon width={20} height={20} fill='#737373' />
          <span className='text-caption-01 text-nutral-black-03'>필터</span>
        </button>
        <>
          <div className='border-r border-nutral-white-03' />
          {filterLabelList.map((label) => (
            <WhFilterLabel label={label} key={label} />
          ))}
        </>
      </section>
      <section className='mb-[120px] flex h-full w-full justify-center'>
        <ul className='flex flex-wrap gap-5 pl-0 max-sm:justify-center'>
          {accompanyPostList(accompanyList, continent)}
        </ul>
      </section>
    </WhTab>
  );
}
