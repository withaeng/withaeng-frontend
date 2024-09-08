import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '../../../public/assets/images/bi_logo.webp';

export default function Logo() {
  return (
    <Link className='h-fit' href='/'>
      <Image
        alt='같이행'
        height={40}
        className='w-[65px] h-6 xl:w-[113px] xl:h-10'
        src={LogoImage}
      />
    </Link>
  );
}
