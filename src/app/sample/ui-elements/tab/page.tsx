'use client';

import CountryTab from '@/components/CountryTab';
import MainTab from '@/components/MainTab';
import { useState } from 'react';

export default function Page() {
  const [tabCountry, setTabCountry] = useState('0');
  const [valueCountry, setValueCountry] = useState('');

  const [tabMain, setTabMain] = useState('0');

  return (
    <div className='mt-5 flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <p className='text-headline-02'>Country Tab</p>
        <div>
          <p>선택한 탭 : {tabCountry}</p>
          <p>선택한 값 : {valueCountry}</p>
        </div>
        <CountryTab
          tabValue={tabCountry}
          onTabChange={setTabCountry}
          value={valueCountry}
          onChange={setValueCountry}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-headline-02'>Main Tab</p>
        <div>
          <p>선택한 탭 : {tabMain}</p>
        </div>
        <MainTab value={tabMain} onChange={setTabMain} />
      </div>
    </div>
  );
}
