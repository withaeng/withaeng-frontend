import Header from '@/components/header/Header';
import Link from 'next/link';

const linkCss =
  'text-secondary-main underline hover:text-secondary-light hover:decoration-secondary-light';
export default function SampleLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <section className='flex'>
        <nav className='w-1/6 flex flex-col px-2 py-2 bg-white z-10 shadow-sm'>
          <Link className={`${linkCss}`} href='/sample'>
            <span className='text-sky-600'>sample</span>
          </Link>
          <Link className={`${linkCss}`} href='/sample/font'>
            font
          </Link>
          <Link className={`${linkCss}`} href='/sample/ui-elements'>
            ui-elements
          </Link>
        </nav>
        <main className='w-5/6'>{children}</main>
      </section>
    </>
  );
}
