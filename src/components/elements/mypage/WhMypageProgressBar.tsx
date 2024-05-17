import { useState } from 'react';

export default function WhMypageProgressBar() {
  const [filled, setFilled] = useState('36.5');
  return (
    <div className='flex gap-3 items-center max-w-[586px] mt-6'>
      <span className='text-primary-main text-subtitle-01'>{filled}</span>

      <div className='w-full h-[30px] rounded-xl bg-nutral-white-04 '>
        <div className='h-full rounded-xl bg-primary-main'>bar</div>
      </div>

      <span className='text-nutral-white-04 text-body-02'>100</span>
    </div>
  );
}
