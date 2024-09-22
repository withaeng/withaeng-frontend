'use client';

import { UpIcon } from '../../../public/assets/icons/arrow';
import { AddPlusIcon } from '../../../public/assets/icons/edit';
import Link from 'next/link';

export default function FloatingButton() {
  const moveBottomToTop = () => {
    if (typeof window !== 'undefined') {
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className='pointer-events-none fixed left-0 top-0 hidden h-full w-full max-xl:block'>
      <button
        className='pointer-events-auto fixed bottom-18 right-4 rounded-full border border-nutral-white-02 bg-nutral-white-01/95 p-3'
        onClick={moveBottomToTop}
      >
        <UpIcon width={24} height={24} stroke='#737373' />
      </button>
      <Link href='/register'>
        <button className='pointer-events-auto fixed bottom-4 right-4 rounded-full bg-primary-main p-3'>
          <AddPlusIcon width={24} height={24} stroke='#ffffff' />
        </button>
      </Link>
    </div>
  );
}
