'use client';

import WhCheckbox from '@/components/elements/WhCheckbox';
import { useState } from 'react';

export default function Page() {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);
  const petKindList = [
    { id: 'cat', value: '고양이' },
    { id: 'dog', value: '개' },
    { id: 'monkey', value: '원숭이' },
    { id: 'rabbit', value: '토끼' },
  ];

  const fruitKindList = [
    { id: 'cherry', value: '체리' },
    { id: 'lime', value: '라임' },
    { id: 'orange', value: '오렌지' },
    { id: 'mango', value: '망고' },
  ];
  const [checkboxList1, setCheckboxList1] = useState<string[]>([]);
  const [checkboxList2, setCheckboxList2] = useState<string[]>([]);
  const [allCheckboxList2, setAllCheckboxList2] = useState(false);

  function handleCheckbox1(checked: boolean): void {
    setCheckbox1(checked);
  }

  function handleCheckbox2(checked: boolean): void {
    setCheckbox2(checked);
  }

  function handleCheckboxList1(checked: boolean, value: string): void {
    if (checked) {
      setCheckboxList1(checkboxList1.concat(value));
    } else {
      setCheckboxList1(checkboxList1.filter((el) => el !== value));
    }
  }

  function handleCheckboxList2(checked: boolean, value: string): void {
    if (checked) {
      setCheckboxList2(checkboxList2.concat(value));
    } else {
      setCheckboxList2(checkboxList2.filter((el) => el !== value));
      setAllCheckboxList2(false);
    }
  }

  function handleAllCheckboxList2(checked: boolean): void {
    if (checked) {
      const temp = fruitKindList.map((el) => el.value);
      setCheckboxList2(checkboxList2.concat(temp));
      setAllCheckboxList2(true);
    } else {
      setCheckboxList2([]);
      setAllCheckboxList2(false);
    }
  }

  function isChecked1(value: string): boolean {
    return checkboxList1.includes(value);
  }

  function isChecked2(value: string): boolean {
    return checkboxList2.includes(value);
  }

  function isIndeterminated(): boolean {
    return (
      checkboxList2.length > 0 && checkboxList2.length < fruitKindList.length
    );
  }

  return (
    <div className='flex flex-col gap-4'>
      <section className='flex gap-4'>
        <WhCheckbox
          id='apple1'
          value='사과'
          checked={checkbox1}
          onChange={handleCheckbox1}
        >
          사과
        </WhCheckbox>
        <WhCheckbox id='apple2' value='사과' disabled>
          사과
        </WhCheckbox>
        <WhCheckbox
          id='banana'
          value='바나나'
          checked={checkbox2}
          size='md'
          onChange={handleCheckbox2}
        >
          바나나
        </WhCheckbox>
        <WhCheckbox id='banana' value='바나나' size='md' disabled>
          바나나
        </WhCheckbox>
      </section>
      <section className='flex gap-4'>
        {petKindList.map((el) => (
          <WhCheckbox
            key={el.id}
            id={el.id}
            value={el.value}
            checked={isChecked1(el.value)}
            onChange={handleCheckboxList1}
          >
            {el.value}
          </WhCheckbox>
        ))}
      </section>
      {checkboxList2}
      <section className='flex gap-4'>
        <WhCheckbox
          id='all'
          value='all'
          checked={allCheckboxList2}
          indeterminate={isIndeterminated()}
          onChange={() => handleAllCheckboxList2}
        >
          전체
        </WhCheckbox>
        {fruitKindList.map((el) => (
          <WhCheckbox
            key={el.id}
            id={el.id}
            value={el.value}
            checked={isChecked2(el.value)}
            onChange={() => handleCheckboxList2}
          >
            {el.value}
          </WhCheckbox>
        ))}
      </section>
    </div>
  );
}
