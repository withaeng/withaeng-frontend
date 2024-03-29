import Link from 'next/link';

const linkCss =
  'text-headline-03 text-secondary-main underline hover:text-secondary-light hover:decoration-secondary-light';

export default function HomePage() {
  return (
    <Link className={`${linkCss}`} href='/sample'>
      sample page
    </Link>
  );
}
