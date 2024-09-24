'use client';

import useModal from '@/hooks/useModal';
import { ReactElement, useCallback, useState } from 'react';
import WhTab, { TabData } from '@/components/elements/WhTab';
import { TAccompanyFilter, TAccompanyPost } from '@/types/accompany';
import WhCard from '@/components/elements/WhCard';
import WhFilterLabel from '@/components/elements/WhFilterLabel';
import dateUtil from '@/utils/dateUtil';

interface AccompanyPostListProps {
  continentList: TabData[];
  accompanyList: TAccompanyPost[];
}

const accompanyPostList = (
  accompanyList: TAccompanyPost[],
  continent: string
): ReactElement => {
  if (continent === 'ALL') {
    return (
      <>
        {accompanyList.map((accompany) => (
          <li key={accompany.id} className='w-full'>
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
  const [filterInfo, setFilterInfo] = useState<TAccompanyFilter>({
    age: undefined,
    ageFree: false,
    city: [],
    companion: undefined,
    companionFree: false,
    endDate: null,
    isToday: false,
    gender: [],
    startDate: new Date(),
  });
  const [filterLabelList, setFilterLabelList] = useState<string[]>([]);
  const handleChangeTabValue = useCallback(
    (tabId: string) => {
      setContinent(tabId);
      setFilterLabelList([]);
      setFilterInfo({
        age: undefined,
        ageFree: false,
        city: [],
        companion: undefined,
        companionFree: false,
        endDate: null,
        gender: [],
        isToday: false,
        startDate: new Date(),
      });
    },
    [continent]
  );

  const openFilterModal = async () => {
    const res = await filter(filterInfo);
    if (res === null) {
      return;
    }

    setFilterInfo(res);

    const list: string[] = [];

    // 여행지
    if (Array.isArray(res.city) && res.city.length > 0) {
      list.push(`여행지 : ${res.city.map((item) => item.value).join(',')}`);
    }

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
    if (res.companionFree) {
      list.push(`동행인원 : 상관없음`);
    }

    // 동행일정
    if (res.isToday && res.startDate && !res.endDate) {
      list.push(`동행일정 : ${dateUtil.formatSchedule(res.startDate)}`);
    }
    if (res.startDate && res.endDate) {
      list.push(
        `동행일정 : ${dateUtil.formatSchedule(res.startDate, res.endDate)}`
      );
    }

    // 연령대
    if (res.age && Array.isArray(res.age)) {
      if (res.age.length > 1) {
        list.push(`연령대 : ${res.age[0]}~${res.age[res.age.length - 1]}살`);
      } else {
        list.push(`연령대 : ${res.age[0]}살`);
      }
    }
    if (res.ageFree) {
      list.push(`연령대 : 상관없음`);
    }

    // 성별
    if (Array.isArray(res.gender) && res.gender.length > 0) {
      list.push(`성별 : ${res.gender.map((item) => item.value).join(',')}`);
    }

    setFilterLabelList([...list]);
    // TODO: set filter label
    console.log('openFilterModal', res);
  };

  const handleDeleteFilterOption = (label: string) => {
    // TODO setFilterInfo() 기능 구현
    setFilterLabelList(filterLabelList.filter((lb) => lb !== label));
  };

  return (
    <div className='max-xl:pl-4'>
      <WhTab
        dataList={continentList}
        value={continent}
        onChange={handleChangeTabValue}
      >
        <section className='mb-5 mt-3 flex gap-3 overflow-auto'>
          <WhFilterLabel label='필터' icon='left' onClick={openFilterModal} />

          {filterLabelList.map((label) => (
            <WhFilterLabel
              label={label}
              key={label}
              icon='right'
              onDelete={handleDeleteFilterOption}
            />
          ))}

          {filterLabelList.length > 0 && (
            <WhFilterLabel
              label='전체 초기화'
              icon='none'
              onClick={() => setFilterLabelList([])}
            />
          )}
        </section>
        <section className='max-xl:[calc(100%+1rem)] mb-[120px] flex h-full justify-center max-xl:-ml-4'>
          <ul className='m-0 flex w-full flex-wrap gap-5 pl-0 max-sm:justify-center'>
            {accompanyPostList(accompanyList, continent)}
          </ul>
        </section>
      </WhTab>
    </div>
  );
}
