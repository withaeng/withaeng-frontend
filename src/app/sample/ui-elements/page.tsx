import React from 'react';
import Link from 'next/link';

const linkCss =
  'text-secondary-main underline hover:text-secondary-light hover:decoration-secondary-light';

const page = () => (
  <div className='flex flex-col'>
    <h1>Hello, UI Elements Page!</h1>
    <Link href='/sample/ui-elements/button' className={`${linkCss}`}>
      common Button
    </Link>
    <Link href='/sample/ui-elements/input' className={`${linkCss}`}>
      common Input
    </Link>
    <Link href='/sample/ui-elements/chip' className={`${linkCss}`}>
      common Chip
    </Link>
    <Link href='/sample/ui-elements/textarea' className={`${linkCss}`}>
      common textarea
    </Link>
  </div>
);

export default page;
