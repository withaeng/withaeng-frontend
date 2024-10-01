'use client';

import dayjs from 'dayjs';
import useModal from '@/hooks/useModal';
import { ReactElement, useCallback, useEffect, useState } from 'react';
import WhTab, { TabData } from '@/components/elements/WhTab';
import {
  TAccompanyFilter,
  TAccompanyPost,
  TAccompanySearch,
} from '@/types/accompany';
import WhCard from '@/components/elements/WhCard';
import WhFilterLabel from '@/components/elements/WhFilterLabel';
import useAccompany from '@/hooks/useAccompany';
import WhNodata from '@/components/elements/WhNodata';
import { useRouter } from 'next/navigation';

interface AccompanyPostListProps {
  continentList: TabData[];
}

function formatSchedule(startDate: Date, endDate: Date = new Date()): string {
  const startDt = dayjs(startDate);
  const endDt = dayjs(endDate);
  const duration = endDt.diff(startDt, 'days') + 1;

  let startDateStr = '';

  if (duration > 0) {
    startDateStr = `${startDt.format('YY.MM.DD')}~${endDt.format('YY.MM.DD')}`;
  } else {
    startDateStr = startDt.format('YY.MM.DD');
  }

  return `${startDateStr}(${duration}일)`;
}

const accompanyPostList = (
  accompanyList: TAccompanyPost[],
  handlePostClick: (id: number) => void
): ReactElement => (
  <>
    {accompanyList.map((accompany) => (
      <li key={accompany.id} className='w-full'>
        <button type='button' onClick={() => handlePostClick(accompany.id)}>
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
        </button>
      </li>
    ))}
  </>
);
export default function AccompanyPostList({
  continentList,
}: AccompanyPostListProps) {
  const router = useRouter();

  const { filter } = useModal();
  const [accompanyList, setAccompanyList] = useState<TAccompanyPost[]>([]);
  const [filteredAccompanyList, setFilteredAccompanyList] = useState<
    TAccompanyPost[]
  >([]);
  const [continent, setContinent] = useState<string>('');
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
  const [searchParams, setSearchParams] = useState<TAccompanySearch>({
    city: '',
    continent: '',
    country: '',
    endDate: '',
    maxAllowedAge: 'MAX',
    maxMemberCount: 8,
    minAllowedAge: 'MIN',
    minMemberCount: 0,
    page: 1,
    preferGender: 'NO_PREFERENCE',
    size: 8,
    sort: '',
    startDate: '',
    status: '',
  });

  const { getAccompanyList, getDestinationList, getAccompanySearch } =
    useAccompany();

  const { data: allDestinationList, refetch: allDestinationListRefetch } =
    getDestinationList;
  const { data: allAccompanyList, refetch: allAccompanyListRefetch } =
    getAccompanyList;

  const { data: searchedAccompanyList, refetch: accompanySearchRefetch } =
    getAccompanySearch(searchParams);

  const handleChangeTabValue = useCallback(
    async (tabId: string) => {
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

      if (tabId === 'ALL') {
        setFilteredAccompanyList(accompanyList);
      } else if (tabId === 'KOREA') {
        setFilteredAccompanyList(
          accompanyList.filter((el) => el.destination.country === 'KOREA')
        );
      } else if (tabId === 'JAPAN') {
        setFilteredAccompanyList(
          accompanyList.filter((el) => el.destination.country === 'JAPAN')
        );
      } else {
        setFilteredAccompanyList(
          accompanyList.filter(
            (el) =>
              el.destination.continent === tabId &&
              el.destination.country !== 'KOREA' &&
              el.destination.country !== 'JAPAN'
          )
        );
      }
      await accompanySearchRefetch();
    },

    [continent]
  );

  const openFilterModal = async () => {
    const res = await filter(filterInfo);
    if (res === null) {
      return;
    }

    console.log(searchedAccompanyList?.data);
    setSearchParams({
      ...searchParams,
    });
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

  const setData = async () => {
    if (!sessionStorage.getItem('destinations')) {
      await allDestinationListRefetch();
    }
    await allAccompanyListRefetch();

    setContinent(continentList[0].id);
  };

  useEffect(() => {
    setData();
  }, []);

  useEffect(() => {
    if (allAccompanyList?.data) {
      setFilteredAccompanyList(allAccompanyList?.data);
      setAccompanyList(allAccompanyList?.data);
    }
  }, [allAccompanyList?.data]);

  useEffect(() => {
    if (!allDestinationList?.data) {
      return;
    }
    if (!sessionStorage.getItem('destinations')) {
      sessionStorage.setItem(
        'destinations',
        JSON.stringify(allDestinationList?.data || [])
      );
    }
  }, [allDestinationList?.data]);

  const handlePostClick = (id: string) => {
    router.push(`/accompany/${id}`);
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
            {filteredAccompanyList.length > 0 ? (
              accompanyPostList(filteredAccompanyList, handlePostClick)
            ) : (
              <WhNodata />
            )}
          </ul>
        </section>
      </WhTab>
    </div>
  );
}
