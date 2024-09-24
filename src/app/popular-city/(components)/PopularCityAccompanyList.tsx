'use client';

import useModal from '@/hooks/useModal';
import { ReactElement, useState } from 'react';
import { TAccompanyFilter, TAccompanyPost } from '@/types/accompany';
import WhFilterLabel from '@/components/elements/WhFilterLabel';
import WhCard from '@/components/elements/WhCard';
import dateUtil from '@/utils/dateUtil';

interface PopularCityAccompanyListProps {
  accompanyList: TAccompanyPost[];
}

const accompanyPostList = (accompanyList: TAccompanyPost[]): ReactElement => (
  <>
    {accompanyList.map((accompany) => (
      <li key={accompany.id} className='max-xl:w-full'>
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

export default function PopularCityAccompanyList({
  accompanyList,
}: PopularCityAccompanyListProps) {
  const { filter } = useModal();
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
    <>
      <section className='mb-5 mt-3 flex gap-3 overflow-auto max-xl:pl-4'>
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
      <section className='mb-[120px] flex h-full w-full justify-center'>
        <ul className='m-0 flex w-full flex-wrap gap-5 pl-0 max-sm:justify-center'>
          {accompanyPostList(accompanyList)}
        </ul>
      </section>
    </>
  );
}
