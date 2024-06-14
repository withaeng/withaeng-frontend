'use client';

import { ChangeEvent, ReactElement, ReactNode } from 'react';
import {
  CheckedSm,
  CheckedMd,
  IndeterminateSm,
  IndeterminateMd,
} from '../../../public/assets/icons/checkbox/index';

interface WhCheckboxProps {
  children?: ReactNode;
  id: string;
  value: string;
  checked?: boolean;
  disabled?: boolean;
  indeterminate?: boolean;
  size?: 'sm' | 'md';
  onChange?: (checked: boolean, value: string) => void;
}

function setCheckboxIcon(
  id: string,
  size: string,
  checked?: boolean,
  indeterminate?: boolean
): ReactElement | null {
  if (checked) {
    return size === 'sm' ? (
      <CheckedSm className='cursor-pointer' />
    ) : (
      <CheckedMd className='cursor-pointer' />
    );
  } else if (indeterminate) {
    return size === 'sm' ? (
      <IndeterminateSm className='cursor-pointer' />
    ) : (
      <IndeterminateMd className='cursor-pointer' />
    );
  } else {
    return null;
  }
}

const defaultCheckboxCss =
  'w-full h-full appearance-none outline-none border border-nutral-white-03 rounded hover:[&:not([disabled])]:border-primary-light disabled:bg-nutral-white-02 disabled:cursor-auto checked:border-primary-main checked:bg-primary-main transition duration-150 ease-in-out cursor-pointer';
let checkboxSizeCss = '';
let checkboxWrapperSizeCss = '';
let checkboxIndeterminateCss = '';

export default function WhCheckbox({
  children,
  id,
  value,
  checked = false,
  disabled = false,
  indeterminate = undefined,
  size = 'sm',
  onChange = () => {},
}: WhCheckboxProps) {
  if (size === 'sm') {
    checkboxSizeCss = 'relative flex justify-center items-center w-5 h-5';
    checkboxWrapperSizeCss = 'inline-flex gap-3 text-body-02';
  } else {
    checkboxSizeCss = 'relative flex justify-center items-center w-6 h-6';
    checkboxWrapperSizeCss = 'inline-flex gap-5 text-body-01';
  }
  if (indeterminate) {
    checkboxIndeterminateCss = 'bg-primary-main border-0';
  } else {
    checkboxIndeterminateCss = '';
  }
  return (
    <div className={`${checkboxWrapperSizeCss}`}>
      <div className={`${checkboxSizeCss}`}>
        <input
          className={`${defaultCheckboxCss} ${checkboxIndeterminateCss}`}
          type='checkbox'
          id={id}
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.checked, value);
          }}
        />
        <label className='absolute' htmlFor={id}>
          {setCheckboxIcon(id, size, checked, indeterminate)}
        </label>
      </div>
      <label htmlFor={id} className='cursor-pointer'>
        {children}
      </label>
    </div>
  );
}
