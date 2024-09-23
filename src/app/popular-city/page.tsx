'use client';

import WhCard from '@/components/elements/WhCard';
import { FilterIcon } from '../../../public/assets/icons/system';
import { accompanyList, popularCityList } from '@/utils/sampleData';
import { flags } from '@/utils/nationalFlags';

export default function PopularCityPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const cityName = popularCityList.find(
    (el) => el.cityEng === searchParams.name
  )?.city;

  const country = popularCityList.find(
    (el) => el.cityEng === searchParams.name
  )?.countryEng;

  const flag = flags.find((el) => el.country === country)?.flag;

  return (
    <>
      <div className='max-xs:mb-10 mb-[59px] bg-nutral-white-02 py-[52px]'>
        <section className='mx-auto w-full max-w-7xl'></section>
      </div>
      <div className='mx-auto my-0 flex max-w-7xl flex-col items-center gap-[60px]'>
        <section className='w-full max-xl:pl-4'>
          <h1 className='text-headline-04 text-nutral-black-01'>
            {flag} {cityName} 동행 같이행
          </h1>
          <section className='mb-5 mt-3'>
            <button
              type='button'
              className='flex items-center justify-center gap-1 rounded-[20px] border border-nutral-white-03 bg-nutral-white-01 py-1 pl-1.5 pr-2 text-subtitle-02 text-nutral-black-03 transition'
            >
              <FilterIcon width={20} height={20} fill='#737373' />
              필터
            </button>
          </section>
          <section className='mb-[120px] h-full w-full'>
            <ul className='m-0 flex flex-wrap gap-5 p-0'>
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
            </ul>
          </section>
        </section>
      </div>
    </>
  );
}
