'use client';

import { useState } from 'react';
import WhCalendar from '@/components/elements/WhCalendar';

export default function Page() {
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>();

  return (
    <div className='m-8'>
      <div className='flex gap-10'>
        <WhCalendar value={date1} onChange={setDate1} />
      </div>
      <div className='flex gap-10'>
        <WhCalendar value={date2} onChange={setDate2} />
      </div>
    </div>
  );
}
