import Image from 'next/image';

interface Props {
  name: string;
  country: string;
  cityImageUrl: string;
  continent: string;
}

export default function PopularCityCard({
  name,
  country,
  cityImageUrl,
  continent,
}: Props) {
  return (
    <div className='flex flex-col cursor-pointer text-left'>
      <Image
        className='rounded w-[305px] h-[290px] object-cover'
        src={cityImageUrl}
        width={305}
        height={290}
        alt='도시 이미지'
      />
      <span className='mt-2 text-subtitle-01 text-nutral-black-02'>{name}</span>
      <span className='mt-1 text-subtitle-02 text-nutral-black-05'>
        {country}, {continent}
      </span>
    </div>
  );
}
