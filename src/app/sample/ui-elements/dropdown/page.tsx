'use client';

import { useState } from 'react';
import WhDropdown from '@/components/elements/WhDropdown';

const dataList = [
  { id: '2', name: '2명' },
  { id: '3', name: '3명' },
  { id: '4', name: '4명' },
];

export default function Page() {
  const [value1, setValue1] = useState<string>('');
  const [value2, setValue2] = useState<string>('');
  return (
    <div className='flex flex-col gap-5'>
      <div>
        <p>Dropdown default</p>
        <div className='w-96'>
          <WhDropdown value={value1} onChange={setValue1} dataList={dataList} />
        </div>
      </div>
      <div>
        <p>Dropdown disabled</p>
        <div className='w-96'>
          <WhDropdown
            value={value2}
            onChange={setValue2}
            dataList={dataList}
            disabled
          />
        </div>
      </div>
    </div>
  );
}
