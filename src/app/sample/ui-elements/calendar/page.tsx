'use client';

import { useState } from 'react';
import WhCalendar from '@/components/elements/WhCalendar';

export default function Page() {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <div className='m-8'>
      <div className='flex gap-10'>
        <WhCalendar value={date} onChange={setDate} />
      </div>
    </div>
  );
}
