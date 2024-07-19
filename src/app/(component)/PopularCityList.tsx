'use client';

import Slider from 'react-slick';
import { TPopularCity } from '@/types/accompany';
import PopularCityCard from '@/app/components/PopularCityCard';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface PopularCityListProps {
  list: TPopularCity[];
}

export default function PopularCityList({ list }: PopularCityListProps) {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <ul className='pt-5 m-0 pl-0 xs:max-lg:pl-5'>
      <div className='hidden xs:max-lg:block'>
        <Slider {...settings}>
          {list?.map((item) => (
            <Link
              href={`/popular-city/${item.cityEng}`}
              key={item.id}
              className='pr-5'
            >
              <PopularCityCard item={item} />
            </Link>
          ))}
        </Slider>
      </div>
      <div className='flex xs:max-lg:hidden'>
        {list?.map((item) => (
          <Link
            href={`/popular-city/${item.cityEng}`}
            key={item.id}
            className='pr-5'
          >
            <PopularCityCard item={item} />
          </Link>
        ))}
      </div>
    </ul>
  );
}
