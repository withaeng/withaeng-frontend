'use client';

import { ChangeEvent, ReactElement, ReactNode } from 'react';
import {
  CheckedSm,
  CheckedMd,
  IndeterminateSm,
  IndeterminateMd,
} from '../../../public/assets/icons/checkbox/index';

interface WhCheckboxProps {
  children: ReactNode;
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
    return size === 'sm' ? <CheckedSm /> : <CheckedMd />;
  } else if (indeterminate) {
    return size === 'sm' ? <IndeterminateSm /> : <IndeterminateMd />;
  } else {
    return null;
  }
}

const defaultCheckboxCss =
  'border border-nutral-white-03 rounded hover:[&:not([disabled])]:border-primary-light disabled:bg-nutral-white-02 checked:border-primary-main checked:bg-primary-main transition duration-150 ease-in-out';
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
    checkboxSizeCss = 'w-5 h-5';
    checkboxWrapperSizeCss = 'gap-3 text-body-02';
  } else {
    checkboxSizeCss = 'w-6 h-6';
    checkboxWrapperSizeCss = 'gap-5 text-body-01';
  }
  if (indeterminate) {
    checkboxIndeterminateCss = 'bg-primary-main';
  } else {
    checkboxIndeterminateCss = '';
  }
  return (
    <div className={`inline-flex ${checkboxWrapperSizeCss}`}>
      <div
        className={`relative flex justify-center items-center ${checkboxSizeCss}`}
      >
        <input
          className={`w-full h-full ${defaultCheckboxCss} ${checkboxIndeterminateCss} appearance-none outline-none`}
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
      <label htmlFor={id}>{children}</label>
    </div>
  );
}
