import Link from 'next/link';

const linkCss =
  'text-headline-03 text-secondary-main underline hover:text-secondary-light hover:decoration-secondary-light';

export default function HomePage() {
  return (
    <main>
      <div className='flex flex-col gap-3'>
        <Link className={`${linkCss}`} href='/sample'>
          sample page
        </Link>
        <Link className={`${linkCss}`} href='/auth/login'>
          login page
        </Link>
        <Link className={`${linkCss}`} href='/auth/sign-up/z02/step1'>
          sign up page
        </Link>
      </div>
    </main>
  );
}
