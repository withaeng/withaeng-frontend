import type { Metadata } from 'next';
import PopularCityList from '@/app/(component)/PopularCityList';
import {
  accompanyList,
  continentList,
  popularCityList,
} from '@/utils/sampleData';
import AccompanyPostList from '@/app/(component)/AccompanyPostList';
import FloatingButton from '@/app/(component)/FloatingButton';

export const metadata: Metadata = {
  title: '같이행',
};

export default function Page() {
  return (
    <>
      <div className='max-xs:mb-10 mb-[59px] bg-nutral-white-02 py-[52px]'>
        <section className='mx-auto w-full max-w-7xl'>
          <span className='inline-block text-left text-headline-04 text-nutral-black-03 max-xl:pl-4 xl:hidden xl:text-headline-02'>
            ✈️ 지금, 가장 많이 떠나는 곳이에요
          </span>
          <span className='hidden text-left text-headline-04 text-nutral-black-03 max-xl:pl-4 xl:inline-block xl:text-headline-02'>
            지금,
            <br />
            가장 많이 떠나는 곳이에요 ✈️
          </span>
          <PopularCityList list={popularCityList} />
        </section>
      </div>
      <div className='mx-auto my-0 flex max-w-7xl flex-col items-center gap-[60px]'>
        <section className='w-full'>
          <span className='text-left text-headline-04 text-nutral-black-01 max-xl:pl-4'>
            🛫 원하는 여행지를 설정하세요.
          </span>
          <AccompanyPostList
            continentList={continentList}
            accompanyList={accompanyList}
          />
        </section>
      </div>
      <FloatingButton />
    </>
  );
}
