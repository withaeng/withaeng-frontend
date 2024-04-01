import React, { useState } from 'react';
import { DeleteFillIcon } from '../../../public/assets/icons/system';

const defaultInputCss =
  'w-full pl-4 py-3 pr-12 text-body-02 placeholder:text-body-02 placeholder:text-nutral-white-03 rounded disabled:bg-nutral-white-02 disabled:border-0';

const isFocusBorderCss =
  'focus:outline-primary-pressing border-nutral-white-03 border';

const defaultLabelCss = 'text-black-02 text-body-02 mb-3';

const isErrorCss = 'border border-caption-main outline-caption-main';

const errorMsgCss = 'text-caption-main text-caption-02 mt-2';

const closeBtnCss = 'absolute right-4 cursor-pointer hover:opacity-80';

let inputSizeCss = '';

interface InputProps {
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  isErr?: boolean;
  errorMsg?: string;
  handleInputChange: (value: string) => void;
  size: 'lg' | 'md' | 'sm';
}

export default function WhInput({
  disabled = false,
  size = 'md',
  placeholder = '내용을 입력해주세요.',
  label = '',
  isErr = false,
  errorMsg = '',
  handleInputChange,
}: InputProps) {
  const [inputValue, setInputValue] = useState('');

  if (size === 'lg') {
    inputSizeCss = 'h-11';
  } else if (size === 'md') {
    inputSizeCss = 'h-10';
  } else if (size === 'sm') {
    inputSizeCss = 'h-9';
  }

  return (
    <div>
      <div className='flex flex-col my-6 relative '>
        {label && (
          <label htmlFor='레이블 이름' className={`${defaultLabelCss}`}>
            {label}
          </label>
        )}
        <div className='flex items-center'>
          <input
            type='text'
            className={`${inputSizeCss} ${defaultInputCss} ${
              isErr ? `${isErrorCss}` : `${isFocusBorderCss}`
            }`}
            disabled={disabled}
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              handleInputChange(e.target.value);
            }}
          />
          {inputValue && (
            <DeleteFillIcon
              className={`${closeBtnCss}`}
              onClick={() => setInputValue('')}
            />
          )}
        </div>
        {isErr && <span className={errorMsgCss}>{errorMsg}</span>}
      </div>
    </div>
  );
}