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
    <Link href='/sample/ui-elements/checkbox' className={`${linkCss}`}>
      common Checkbox
    </Link>
    <Link href='/sample/ui-elements/radio' className={`${linkCss}`}>
      common Radio
    </Link>
    <Link href='/sample/ui-elements/modal' className={`${linkCss}`}>
      common Modal
    </Link>
    <Link href='/sample/ui-elements/card' className={`${linkCss}`}>
      common Card
    </Link>
    <Link href='/sample/ui-elements/badge' className={`${linkCss}`}>
      common Badge
    </Link>
    <Link href='/sample/ui-elements/calendar' className={`${linkCss}`}>
      common Calendar
    </Link>
    <Link href='/sample/ui-elements/tab' className={`${linkCss}`}>
      common Tab
    </Link>
    <Link href='/sample/ui-elements/dropdown' className={`${linkCss}`}>
      common Dropdown
    </Link>
    <Link href='/sample/ui-elements/slider' className={`${linkCss}`}>
      common Slider
    </Link>
  </div>
);

export default page;
