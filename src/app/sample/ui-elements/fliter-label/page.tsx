'use client';

import WhFilterLabel from '@/components/elements/WhFilterLabel';

export default function FilterLabelPage() {
  const filterLabelList1 = ['여행지 : 도쿄', '동행일정 : 24.04.24(1일)'];

  return (
    <>
      <div className='mt-3 flex gap-3'>
        <WhFilterLabel
          label='전체 초기화'
          icon='none'
          onClick={() => alert('on click')}
        />
      </div>
      <div className='mt-3 flex gap-3'>
        <WhFilterLabel
          label='필터'
          icon='left'
          onClick={() => alert('on filter')}
        />
      </div>
      <div className='mt-3 flex gap-3'>
        {filterLabelList1.map((label) => (
          <WhFilterLabel
            label={label}
            icon='right'
            key={label}
            onDelete={(l) => alert(`on delete ${l}`)}
          />
        ))}
      </div>
    </>
  );
}
