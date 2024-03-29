'use client';

import React from 'react';

const defaultInputCss =
  'w-full px-4 py-3 text-body-02 placeholder:text-body-02  placeholder:text-nutral-white-03  rounded disabled:bg-nutral-white-02 disabled:border-0';

const isFocusBorderCss =
  'focus:outline-primary-pressing border-nutral-white-03 border';

const defaultLabelCss = 'text-black-02 text-body-02 my-2';

const isErrorCss = 'border border-caption-main outline-caption-main';

const errorMsgCss = 'text-caption-main text-caption-02 mt-2';

let inputSizeCss = '';

interface InputProps {
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  isErr?: boolean;
  errorMsg?: string;
  inputValue: string;
  setInputValue: any;
  size: 'lg' | 'md' | 'sm';
}
export default function WhInput({
  disabled = false,
  size = 'md',
  placeholder = '내용을 입력해주세요.',
  label = '레이블 이름',
  isErr = false,
  errorMsg = '',
  inputValue = '',
  setInputValue = '',
}: InputProps) {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
  };

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
          type='search'
          className={`${inputSizeCss} ${defaultInputCss} ${isErr ? `${isErrorCss}` : `${isFocusBorderCss}`}`}
          disabled={disabled}
          placeholder={placeholder}
          onChange={change}
        />
        {isErr && <span className={errorMsgCss}>{errorMsg}</span>}
      </div>
    </div>
  );
}
