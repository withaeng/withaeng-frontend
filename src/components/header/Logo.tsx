import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image
        alt="Logo"
        className="md:block hidden cursor-pointer"
        height={100}
        width={100}
        src="../assets/images/vercel.svg"
      />
    </Link>
  );
}
