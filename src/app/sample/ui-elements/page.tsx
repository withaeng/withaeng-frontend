import React from 'react';
import Link from 'next/link';

const linkCss =
  'text-secondary-main underline hover:text-secondary-light hover:decoration-secondary-light';

const page = () => (
  <div>
    <h1>Hello, UI Elements Page!</h1>
    <Link href='/sample/ui-elements/button' className={`${linkCss}`}>
      common Button
    </Link>
  </div>
);

export default page;
