import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link className='h-fit' href='/'>
      <Image
        src='../assets/images/withaeng-logo-transparent.svg'
        alt='withaeng-logo'
        width='0'
        height='0'
        className='w-40'
      />
    </Link>
  );
}
