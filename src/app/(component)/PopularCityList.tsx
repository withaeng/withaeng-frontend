'use client';

import { useState } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import { TPopularCity } from '@/types/accompany';
import PopularCityCard from '@/app/(component)/PopularCityCard';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../../../public/assets/icons/arrow';
import '@/app/(component)/custom-react-slick.css';

interface PopularCityListProps {
  list: TPopularCity[];
}

function NextArrow(props: CustomArrowProps) {
  const { onClick, currentSlide } = props;
  const hidden = currentSlide === 3 ? 'hidden' : 'inline-block'; // 하드코딩
  return (
    <button
      onClick={onClick}
      className={`${hidden} group absolute right-1 top-[50%] z-10 -translate-y-2/4 rounded-full border border-nutral-white-03 bg-nutral-white-01 p-2 hover:border-primary-main max-xl:hidden`}
      aria-label='다음 버튼'
    >
      <ChevronRightIcon
        width={24}
        height={24}
        stroke='#737373'
        className='group-hover:stroke-primary-main'
      />
    </button>
  );
}

function PrevArrow(props: CustomArrowProps) {
  const { onClick, currentSlide } = props;
  const hidden = currentSlide === 0 ? 'hidden' : 'inline-block';

  return (
    <button
      onClick={onClick}
      className={`${hidden} group absolute left-1 top-[50%] z-10 -translate-y-2/4 rounded-full border border-nutral-white-03 bg-nutral-white-01 p-2 hover:border-primary-main max-xl:hidden`}
      aria-label='이전 버튼'
    >
      <ChevronLeftIcon
        width={24}
        height={24}
        stroke='#737373'
        className='group-hover:stroke-primary-main'
      />
    </button>
  );
}

export default function PopularCityList({ list }: PopularCityListProps) {
  const [index, setIndex] = useState<number>(0);

  const handleAfterChange = (idx: number) => {
    setIndex(idx);
  };

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    variableWidth: true,
    infinite: false,
    draggable: false,
    initialSlide: index,
    afterChange: handleAfterChange,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <ul className='m-0 overflow-hidden pl-0 pt-5 max-xl:pl-5'>
      <Slider {...settings}>
        {list?.map((item) => (
          <Link href={`/popular-city?name=${item.cityEng}`} key={item.id}>
            <PopularCityCard item={item} />
          </Link>
        ))}
      </Slider>
    </ul>
  );
}
