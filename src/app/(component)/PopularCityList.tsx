'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import { TPopularCity } from '@/types/accompany';
import PopularCityCard from '@/app/(component)/PopularCityCard';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../../../public/assets/icons/arrow';

interface PopularCityListProps {
  list: TPopularCity[];
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className='absolute right-1 top-[50%] z-10 -translate-y-2/4 rounded-full border border-nutral-white-03 bg-nutral-white-01 p-2 max-xl:hidden'
      aria-label='다음 버튼'
    >
      <ChevronRightIcon width={24} height={24} stroke='#737373' />
    </button>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className='absolute left-1 top-[50%] z-10 -translate-y-2/4 rounded-full border border-nutral-white-03 bg-nutral-white-01 p-2 max-xl:hidden'
      aria-label='이전 버튼'
    >
      <ChevronLeftIcon width={24} height={24} stroke='#737373' />
    </button>
  );
}

export default function PopularCityList({ list }: PopularCityListProps) {
  const [index, setIndex] = useState<number>(0);

  const handleAfterChange = (idx: number) => {
    setIndex(idx);
  };

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 5,
    variableWidth: true,
    infinite: false,
    draggable: false,
    initialSlide: index,
    afterChange: handleAfterChange,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <ul className='m-0 pl-0 pt-5 max-xl:pl-5'>
      <Slider {...settings}>
        {list?.map((item) => (
          <Link href={`/popular-city/${item.cityEng}`} key={item.id}>
            <div className='pr-5'>
              <PopularCityCard item={item} />
            </div>
          </Link>
        ))}
      </Slider>
    </ul>
  );
}
