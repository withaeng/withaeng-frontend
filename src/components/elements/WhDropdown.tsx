'use client';

import { useState } from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from '../../../public/assets/icons/arrow';

const defaultLabelCss =
  'px-6 py-3 w-full border border-nutral-white-04 rounded flex justify-between disabled:bg-nutral-white-02 disabled:border-nutral-white-02';
const focusLabelCss = 'border-nutral-black-04';
const defaultCss =
  'px-6 py-4 text-nutral-black-01 hover:bg-nutral-white-02 w-full text-start';
const focusCss = 'bg-primary-eexLight hover:bg-primary-exLight';

interface DropdownData {
  id: string;
  name: string;
}

interface DropdownProps {
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  dataList?: DropdownData[];
}

export default function WhDropdown({
  value,
  onChange,
  disabled,
  dataList,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const handleChange = (value: string) => {
    onChange && onChange(value);
    setOpen(false);
  };
  const index = dataList?.findIndex((data) => data.id === value);

  return (
    <div className='relative'>
      <button
        type='button'
        onClick={() => setOpen((prev) => !prev)}
        className={`${defaultLabelCss} ${open && focusLabelCss}`}
        disabled={disabled}
      >
        {value && dataList && index ? (
          <span>{dataList[index].name}</span>
        ) : (
          <span className='text-nutral-white-04'>{'옵션을 선택해주세요.'}</span>
        )}
        {open ? (
          <ChevronUpIcon width={20} height={20} stroke='#737373' />
        ) : (
          <ChevronDownIcon width={20} height={20} stroke='#737373' />
        )}
      </button>
      {open && (
        <div className='absolute top-14 z-10 bg-nutral-white-01 w-full rounded border border-nutral-white-03'>
          <ul>
            {dataList?.map((data) => (
              <li key={data.id}>
                <button
                  className={`${defaultCss} ${value === data.id && focusCss}`}
                  onClick={() => handleChange(data.id)}
                >
                  {data.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
