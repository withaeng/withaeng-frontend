import Image from 'next/image';
import { TPopularCity } from '@/types/accompany';

interface PopularCityCardProps {
  item: TPopularCity;
}

export default function PopularCityCard({ item }: PopularCityCardProps) {
  return (
    <div className='relative flex w-fit cursor-pointer flex-col text-left'>
      <Image
        className='h-[300px] w-[240px] rounded-xl object-cover'
        src={item.bannerImageUrl}
        width={240}
        height={300}
        alt='도시 이미지'
      />
      <div className='group absolute left-0 top-0 flex h-[300px] w-[240px] items-center justify-center rounded-xl hover:bg-nutral-black-02/60'>
        <span className='text-headline-0 hidden text-nutral-white-03 group-hover:inline-block'>
          {item.cityEng
            .toLowerCase()
            .replace(/\b[a-z]/g, (char) => char.toUpperCase())}
        </span>
      </div>
    </div>
  );
}
