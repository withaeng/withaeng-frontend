import type { Metadata } from 'next';
import HomeBanner from '@/app/(component)/HomeBanner';
import PopularCityList from '@/app/(component)/PopularCityList';
import {
  accompanyList,
  continentList,
  popularCityList,
} from '@/utils/sampleData';
import AccompanyPostList from '@/app/(component)/AccompanyPostList';

export const metadata: Metadata = {
  title: '같이행',
};

export default function Page() {
  return (
    <div className='max-w-7xl flex flex-col gap-[60px] items-center my-0 mx-auto'>
      <HomeBanner />
      <section className='w-full'>
        <span className='xs:max-lg:pl-4 text-nutral-black-01 text-headline-04 text-left'>
          🚩 인기 많은 동행 여행지를 소개합니다.
        </span>
        <PopularCityList list={popularCityList} />
      </section>
      <section className='w-full'>
        <span className='xs:max-lg:pl-4 text-nutral-black-01 text-headline-04 text-left'>
          🛫 원하는 여행지를 설정하세요.
        </span>
        <AccompanyPostList
          continentList={continentList}
          accompanyList={accompanyList}
        />
      </section>
    </div>
  );
}
