'use client';

import Image from 'next/image';
import WhTab, { TabData } from '@/components/elements/WhTab';
import { ReactElement, useCallback, useState } from 'react';
import WhCard from '@/components/elements/WhCard';
import HomeBannerImage from '../../public/assets/images/home-banner.webp';
import PopularCityCard from './components/PopularCityCard';
import { FilterIcon } from '../../public/assets/icons/system';

// TODO: api 호출 후 데이터 세팅 예정, 타입 지정 예정
const popularCityList = [
  {
    id: '1',
    name: '서울',
    country: '대한민국',
    continent: '국내',
    cityImageUrl:
      'https://images.unsplash.com/photo-1519010470956-6d877008eaa4?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    name: '도쿄',
    country: '일본',
    continent: '동아시아',
    cityImageUrl:
      'https://images.unsplash.com/photo-1519010470956-6d877008eaa4?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    name: '타이페이',
    country: '대만',
    continent: '동아시아',
    cityImageUrl:
      'https://images.unsplash.com/photo-1519010470956-6d877008eaa4?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '4',
    name: '제주도',
    country: '대한민국',
    continent: '국내',
    cityImageUrl:
      'https://images.unsplash.com/photo-1519010470956-6d877008eaa4?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const continentList: TabData[] = [
  { id: 'ALL', title: '전체' },
  { id: 'KR', title: '국내' },
  { id: 'JP', title: '일본' },
  { id: 'EA', title: '동아시아' },
  { id: 'SEA', title: '동남아시아' },
  { id: 'EU', title: '유럽' },
  { id: 'NA', title: '북미' },
  { id: 'SA', title: '남미' },
  { id: 'OC', title: '오세아니아' },
];

const accompanyList = [
  {
    id: 1,
    status: 'joining',
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    tags: null,
    startTripDate: '2024-03-15',
    endTripDate: '2024-03-16',
    accompanyCnt: 3,
    accompaniedCnt: 1,
    thumbnailImageUrl:
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
    continent: 'KR',
  },
  {
    id: 2,
    status: 'joining',
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    tags: null,
    startTripDate: '2024-07-15',
    endTripDate: '2024-07-16',
    accompanyCnt: 4,
    accompaniedCnt: 2,
    thumbnailImageUrl:
      'https://images.unsplash.com/photo-1601699233172-1bb3354b845b?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    continent: 'EU',
  },
  {
    id: 3,
    status: 'joining',
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    tags: ['태그 1', '태그 2', '태그 3'],
    startTripDate: '2024-08-15',
    endTripDate: '2024-08-16',
    accompanyCnt: 4,
    accompaniedCnt: 4,
    thumbnailImageUrl:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    continent: 'SEA',
  },
  {
    id: 4,
    status: 'joining',
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    tags: ['태그 1', '태그 2', '태그 3'],
    startTripDate: '2024-08-15',
    endTripDate: '2024-08-16',
    accompanyCnt: 4,
    accompaniedCnt: 4,
    thumbnailImageUrl:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    continent: 'JP',
  },
  {
    id: 5,
    status: 'joining',
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    tags: ['태그 1', '태그 2', '태그 3'],
    startTripDate: '2024-08-15',
    endTripDate: '2024-08-16',
    accompanyCnt: 4,
    accompaniedCnt: 4,
    thumbnailImageUrl:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    continent: 'NA',
  },
];

const showAccompanyList = (continentId: string): ReactElement => {
  if (continentId === 'ALL') {
    return (
      <>
        {accompanyList.map((accompany) => (
          <li key={accompany.id}>
            <WhCard
              status={accompany.status}
              profileImageUrl={accompany.profileImageUrl}
              nickname={accompany.nickname}
              title={accompany.title}
              tags={accompany.tags}
              startTripDate={accompany.startTripDate}
              endTripDate={accompany.endTripDate}
              accompanyCnt={accompany.accompanyCnt}
              accompaniedCnt={accompany.accompaniedCnt}
              thumbnailImageUrl={accompany.thumbnailImageUrl}
            />
          </li>
        ))}
      </>
    );
  }
  return (
    <>
      {accompanyList
        .filter((el) => el.continent === continentId)
        .map((accompany) => (
          <li key={accompany.id}>
            <WhCard
              status={accompany.status}
              profileImageUrl={accompany.profileImageUrl}
              nickname={accompany.nickname}
              title={accompany.title}
              tags={accompany.tags}
              startTripDate={accompany.startTripDate}
              endTripDate={accompany.endTripDate}
              accompanyCnt={accompany.accompanyCnt}
              accompaniedCnt={accompany.accompaniedCnt}
              thumbnailImageUrl={accompany.thumbnailImageUrl}
            />
          </li>
        ))}
    </>
  );
};

export default function HomePage() {
  const [continentId, setContinentId] = useState<string>('ALL');

  const handleChangeTabValue = useCallback((tabId: string) => {
    setContinentId(tabId);
  }, []);

  return (
    <div className='max-w-7xl flex flex-col gap-[60px] items-center my-0 mx-auto'>
      {/* banner image */}
      <section>
        <Image src={HomeBannerImage} alt='같이행 배너 이미지' />
      </section>
      <section className='w-full'>
        <span className='text-nutral-black-01 text-headline-04 text-left'>
          🚩 인기가 가장 많은 동행 여행지를 소개합니다.
        </span>
        <ul className='flex gap-5 pt-5'>
          {popularCityList.map((city) => (
            <li key={city.id}>
              <PopularCityCard
                name={city.name}
                country={city.country}
                continent={city.continent}
                cityImageUrl={city.cityImageUrl}
              />
            </li>
          ))}
        </ul>
      </section>
      <section className='w-full'>
        <span className='text-nutral-black-01 text-headline-04 text-left'>
          🛫 원하는 여행지를 설정하세요.
        </span>
        <WhTab
          dataList={continentList}
          value={continentId}
          onChange={handleChangeTabValue}
        >
          <section className='mt-3 mb-5'>
          <button
            type='button'
            className='py-1 pl-1.5 pr-2 rounded-[20px] bg-nutral-white-01 text-nutral-black-03 border border-nutral-white-03 transition text-subtitle-02 flex items-center justify-center gap-1'
          >
            <FilterIcon width={20} height={20} fill='#737373' />
            필터
          </button>
          </section>
          <section className='w-full h-full mb-[120px]'>
            <ul className='flex flex-wrap gap-5'>
              {showAccompanyList(continentId)}
            </ul>
          </section>
        </WhTab>
      </section>
    </div>
  );
}
