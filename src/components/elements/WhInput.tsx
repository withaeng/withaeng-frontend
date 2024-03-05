'use client';

import React, { ReactNode } from 'react';

const defaultInputCss =
  'px-4 py-3 text-nutral-white-03 placeholder:text-body-02  placeholder:text-nutral-white-03 border border-nutral-white-03 rounded focus:outline-primary-pressing disabled:bg-nutral-white-02 disabled:border-nutral-white-04';

const defaultLabelCss = 'text-nutral-white-03 text-body-02 my-2';

let inputSizeCss = '';

interface InputProps {
  children: ReactNode;
  disabled?: boolean;
  placeholder: string;
  label?: string;
  size: 'lg' | 'md' | 'sm';
}
export default function WhInput({
  children = undefined,
  disabled = false,
  size = 'md',
  placeholder = '내용을 입력해주세요.',
  label = '레이블 이름',
}: InputProps) {
  if (size === 'lg') {
    inputSizeCss = 'h-11';
  } else if (size === 'md') {
    inputSizeCss = 'h-10';
  } else if (size === 'sm') {
    inputSizeCss = 'h-9';
  }
  return (
    <div>
      <div className='flex flex-col'>
        <label htmlFor='레이블 이름' className={`${defaultLabelCss}`}>
          {label}
        </label>
        <input
          className={`${inputSizeCss} ${defaultInputCss}`}
          disabled={disabled}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

WhInput.defaultProps = {
  disabled: false,
  label: '',
};
