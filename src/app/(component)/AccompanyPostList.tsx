'use client';

import useModal from '@/hooks/useModal';
import { ReactElement, useCallback, useState } from 'react';
import WhTab, { TabData } from '@/components/elements/WhTab';
import { TAccompanyPost } from '@/types/accompany';
import WhCard from '@/components/elements/WhCard';
import { FilterIcon } from '../../../public/assets/icons/system';

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
  const handleChangeTabValue = useCallback(
    (tabId: string) => {
      setContinent(tabId);
    },
    [continent]
  );

  const openFilterModal = async () => {
    const res = await filter();

    // TODO: set filter label
    console.log('openFilterModal', res);
  };
  return (
    <WhTab
      dataList={continentList}
      value={continent}
      onChange={handleChangeTabValue}
    >
      <section className='mt-3 mb-5'>
        <button
          type='button'
          className='py-1 pl-1.5 pr-2 rounded-[20px] bg-nutral-white-01 text-nutral-black-03 border border-nutral-white-03 transition text-subtitle-02 flex items-center justify-center gap-1'
          onClick={openFilterModal}
        >
          <FilterIcon width={20} height={20} fill='#737373' />
          필터
        </button>
      </section>
      <section className='w-full h-full mb-[120px]'>
        <ul className='flex flex-wrap gap-5 m-0 pl-0'>
          {accompanyPostList(accompanyList, continent)}
        </ul>
      </section>
    </WhTab>
  );
}
