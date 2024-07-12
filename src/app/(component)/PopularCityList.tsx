import { TPopularCity } from '@/types/accompany';
import PopularCityCard from '@/app/components/PopularCityCard';
import Link from 'next/link';

interface PopularCityListProps {
  list: TPopularCity[];
}

export default function PopularCityList({ list }: PopularCityListProps) {
  return (
    <ul className='flex gap-5 pt-5'>
      {list?.map((item) => (
        <Link href={`/popular-city/${item.cityEng}`} key={item.id}>
          <PopularCityCard item={item} />
        </Link>
      ))}
    </ul>
  );
}
