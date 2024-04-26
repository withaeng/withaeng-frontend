'use client';

import CountryTab from '@/components/CountryTab';
import { useState } from 'react';

export default function Page() {
  const [tab, setTab] = useState('0');
  const [value, setValue] = useState('');
  return (
    <>
      <div>
        <p>선택한 탭 : {tab}</p>
        <p>선택한 값 : {value}</p>
      </div>
      <CountryTab
        tabValue={tab}
        onTabChange={setTab}
        value={value}
        onChange={setValue}
      />
    </>
  );
}
