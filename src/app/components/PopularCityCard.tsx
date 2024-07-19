import Image from 'next/image';
import { TPopularCity } from '@/types/accompany';

interface PopularCityCardProps {
  item: TPopularCity;
}

export default function PopularCityCard({ item }: PopularCityCardProps) {
  return (
    <div className='w-fit flex flex-col cursor-pointer text-left'>
      <Image
        className='rounded w-[305px] h-[290px] object-cover'
        src={item.bannerImageUrl}
        width={305}
        height={290}
        alt='도시 이미지'
      />
      <span className='mt-2 text-subtitle-01 text-nutral-black-02'>
        {item.city}
      </span>
      <span className='mt-1 text-subtitle-02 text-nutral-black-05'>
        {item.country}, {item.continent}
      </span>
    </div>
  );
}
