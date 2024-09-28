'use client';

import { popularCityList } from '@/utils/sampleData';
import PopularCityAccompanyList from '@/app/popular-city/(components)/PopularCityAccompanyList';
import Image from 'next/image';
import { flags } from '@/utils/nationalFlags';

export default function PopularCityPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const country = searchParams.country?.toString();
  const continent = searchParams.continent?.toString();
  const cityEng = searchParams.cityEng?.toString();
  const city = popularCityList.find((el) => el.cityEng === cityEng);
  const cityName = city?.city;
  const flag = flags.find(
    (el: { country: string; flag: string }) => el.country === city?.countryEng
  )?.flag;

  return (
    <>
      <div className='mb-15 bg-nutral-white-02 pb-15 pt-10 max-xl:mb-10 max-xl:px-4 max-xl:py-6'>
        <section className='mx-auto w-full max-w-7xl'>
          <div className='flex items-start gap-10 max-xl:gap-3'>
            <Image
              className='h-[250px] w-[200px] rounded-xl object-cover max-xl:h-[200px] max-xl:w-[150px]'
              src={city?.bannerImageUrl || ''}
              width={200}
              height={250}
              alt='도시 이미지'
            />
            <div className='py-12 max-xl:py-3'>
              <h1 className='mb-4 px-1 text-headline-01 text-nutral-black-02 max-xl:px-0 max-xl:text-headline-04'>
                {cityName}
              </h1>
              <div className='flex gap-2 *:text-subtitle-01 *:text-nutral-black-04 max-xl:hidden'>
                <span>게시글</span>
                <span>32개</span>
                <span>•</span>
                <span>총 조회수</span>
                <span>1,600회</span>
              </div>
              <div className='hidden gap-1 max-xl:flex max-xl:flex-col'>
                <div className='flex gap-2 *:text-subtitle-01 *:text-nutral-black-04'>
                  <span>게시글</span>
                  <span>32개</span>
                </div>
                <div className='flex gap-2 *:text-subtitle-01 *:text-nutral-black-04'>
                  <span>총 조회수</span>
                  <span>1,600회</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className='mx-auto my-0 flex max-w-7xl flex-col items-center gap-[60px]'>
        <section className='w-full'>
          <h1 className='text-headline-04 text-nutral-black-01 max-xl:pl-4'>
            {flag} {cityName} 동행 같이행
          </h1>
          <PopularCityAccompanyList
            country={country}
            continent={continent}
            cityEng={cityEng}
          />
        </section>
      </div>
    </>
  );
}
