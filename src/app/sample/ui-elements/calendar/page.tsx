'use client';

import { useState } from 'react';
import WhCalendar from '@/components/elements/WhCalendar';

export default function Page() {
  const [date1, setDate1] = useState<Date | null>(new Date());
  const [date2, setDate2] = useState<Date | null>();
  const [date3, setDate3] = useState<Date | null>(new Date());

  return (
    <div className='m-8 flex gap-5'>
      <div>
        <h3>일반</h3>
        <WhCalendar value={date1} onChange={setDate1} />
      </div>
      <div>
        <h3>날짜 데이터 없음. placeholder</h3>
        <WhCalendar value={date2} onChange={setDate2} />
      </div>
      <div>
        <h3>disabled</h3>
        <WhCalendar value={date3} onChange={setDate3} disabled />
      </div>
    </div>
  );
}
