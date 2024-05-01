'use client';

import WhSlider from '@/components/elements/WhSlider';
import { useState } from 'react';

const ageMarks = {
  20: 20,
  25: 25,
  30: 30,
  35: 35,
  40: 40,
  45: 45,
  50: '50+',
};

const companionMarks = {
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
};

export default function Page() {
  const [age, setAge] = useState<number | number[]>([20, 50]);
  const [comp, setComp] = useState<number | number[]>([3, 8]);
  return (
    <div className='flex flex-col gap-6'>
      <div>
        <h4>default</h4>
        <div className='w-[512px]'>
          <WhSlider defaultValue={[50]} />
        </div>
      </div>
      <div>
        <h4>default - disabled</h4>
        <div className='w-[512px]'>
          <WhSlider defaultValue={[50]} disabled />
        </div>
      </div>
      <div>
        <h4>커스텀 - 나이 범위 설정 : {age}</h4>
        <div className='w-[512px]'>
          <WhSlider
            range
            min={20}
            max={50}
            step={5}
            defaultValue={[20, 50]}
            marks={ageMarks}
            value={age}
            onChange={setAge}
          />
        </div>
      </div>
      <div>
        <h4>커스텀 - 동행 범위 설정</h4>
        <div className='w-[512px]'>
          <WhSlider
            range
            min={3}
            max={8}
            step={1}
            defaultValue={[3, 8]}
            marks={companionMarks}
            value={comp}
            onChange={setComp}
          />
        </div>
      </div>
    </div>
  );
}
