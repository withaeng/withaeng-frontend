'use client';

import WhChip from '@/components/elements/WhChip';
import { useState } from 'react';

export default function Page() {
  const [chipList, setChipList] = useState<string[]>([]);

  const itemList = [
    { id: 0, title: '태그내용' },
    { id: 1, title: '태그내용2' },
    { id: 2, title: '태그내용3' },
  ];

  function handleChip(value: string) {
    // TODO 셀렉트 버그 수정 필요
    if (!chipList.includes(value)) {
      chipList.push(value);
      setChipList([...chipList]);
    } else {
      const index = chipList.findIndex((el) => el === value);
      const temp = chipList.slice(index, 1)
      setChipList([...temp]);
    }
  }

  function isIncludes(value: string): boolean {
    return chipList.includes(value) ? true : false;
  }

  return (
    <div className='flex m-10 gap-8'>
      <div>
        <p className='mb-5'>👉 default</p>
        <WhChip>태그 내용</WhChip>
      </div>
      <div>
        <p className='mb-5'>👉 disabled </p>
        <WhChip disabled>태그 내용</WhChip>
      </div>

      <div>
        <p className='mb-5'>👉 여러개일 경우</p>
        <div className='flex gap-3'>
          {itemList.map((item) => (
            <div key={item.id}>
              <WhChip
                checked={isIncludes(item.title)}
                value={item.title}
                onClick={handleChip}
              >
                {item.title}
              </WhChip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
