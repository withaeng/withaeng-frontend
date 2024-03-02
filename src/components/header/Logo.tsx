import Image from 'next/image';
import Link from 'next/link';
import LogoImage from '../../../public/assets/images/withaeng-logo-transparent.svg';

export default function Logo() {
  return (
    <Link className='h-fit' href='/'>
      <Image src={LogoImage} alt='같이행 로고' priority />
    </Link>
  );
}
