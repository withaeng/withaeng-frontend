'use client';

import React, { ReactNode, useState } from 'react';

const defaultInputCss =
  'border px-4 py-3 text-nutral-white-03 placeholder:text-body-02  placeholder:text-nutral-white-03  rounded disabled:bg-nutral-white-02 disabled:border-0';

const defaultBorderCss =
  'border-nutral-white-03 focus:outline-primary-pressing';

const defaultLabelCss = 'text-nutral-white-03 text-body-02 my-2';

const isErrorCss = 'border border-caption-main focus:outline-caption-main'

const errorMsgCss = 'text-caption-main text-caption-02 mt-2';

let inputSizeCss = '';

interface InputProps {
  children: ReactNode;
  disabled?: boolean;
  placeholder: string;
  label?: string;
  isErr?:boolean;
  errorMsg?:string;
  size: 'lg' | 'md' | 'sm';
}
export default function WhInput({
  children = undefined,
  disabled = false,
  size = 'md',
  placeholder = '내용을 입력해주세요.',
  label = '레이블 이름',
  isErr = false,
  errorMsg = ''
}: InputProps) {

  const [ val, setVal] = useState('내용을 입력해주세요.');

  const closeClick = () => {
  }

  if (size === 'lg') {
    inputSizeCss = 'h-11';
  } else if (size === 'md') {
    inputSizeCss = 'h-10';
  } else if (size === 'sm') {
    inputSizeCss = 'h-9';
  }

  if(!isErr) {
    errorMsg = '';
  }
  
  return (
    <div>
      <div className='flex flex-col'>
        <label htmlFor='레이블 이름' className={`${defaultLabelCss}`}>
          {label}
        </label>
        {/* <input id="search" name="Search" type="search"  */}
        <input 
        type='search'
          className={`${inputSizeCss} ${defaultInputCss} ${isErr ? `${isErrorCss}` :  `${defaultBorderCss}` }`}
          disabled={disabled}
          placeholder={placeholder}
          isErr={isErr}
        />
        <span  className={`${errorMsgCss }`}>{errorMsg}</span>
      </div>
    </div>
  );
}
