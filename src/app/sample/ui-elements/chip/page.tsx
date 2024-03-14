'use client';

import WhChip from '@/components/elements/WhChip';


export default function Page() {
  const itemList = [
    { id: 0, title: '태그내용' },
    { id: 1, title: '태그내용2' },
    { id: 2, title: '태그내용3' },
  ];

  return (
    <div className='flex m-10 gap-8'>
    <div>
      <p className='mb-5'>👉 default</p>
      <WhChip onClick={()=> {}} >태그 내용</WhChip>
    </div>
    <div>
      <p className='mb-5'>👉 disabled </p>
      <WhChip  onClick={()=>{}}  disabled>태그 내용</WhChip>
    </div>

    <div>
      <p className='mb-5'>👉 여러개일 경우</p>
    <div className='flex gap-3'>

      {itemList.map((item, index) => (
        <div key={index.id}>
          <WhChip  onClick={()=>{}} >{item.title}</WhChip>
        </div>
      ))}
    </div>

    </div>
  </div>
  );
}
