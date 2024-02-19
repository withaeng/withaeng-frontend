import Link from 'next/link';
const linkCss =
  'text-secondary-main underline hover:text-secondary-light hover:decoration-secondary-light';
export default function SampleLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <header className='w-full flex gap-[8px] px-3 py-3 bg-white z-10 shadow-sm'>
        <Link className={`${linkCss}`} href='/sample'>
          <span className='text-sky-600'>sample</span>
        </Link>
        <Link className={`${linkCss}`} href='/sample/font'>
          font
        </Link>
        <Link className={`${linkCss}`} href='/sample/ui-elements'>
          ui-elements
        </Link>
      </header>
      {children}
    </section>
  );
}
