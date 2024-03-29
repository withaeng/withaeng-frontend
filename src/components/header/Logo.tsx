import Link from 'next/link';
import { ReactComponent as LogoImage } from '../../../public/assets/images/withaeng-logo-transparent.svg';

export default function Logo() {
  return (
    <Link className='h-fit' href='/'>
      <LogoImage />
    </Link>
  );
}
