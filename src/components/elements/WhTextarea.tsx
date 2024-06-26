'use client';

import React, { ChangeEvent, useEffect, useState } from 'react';

const defaultTextareaCss =
  'w-full h-[100px] px-4 py-2.5 text-body-02 placeholder:text-body-02  placeholder:text-nutral-white-03  rounded disabled:bg-nutral-white-02 disabled:border-0 disabled:text-nutral-white-04 focus:outline-primary-pressing resize-none border border-nutral-white-03';

const defaultLabelCss = 'text-black-02 text-body-02';

const defaultCountCss = 'text-caption-01 text-nutral-white-04';

interface TextareaProps {
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  value: string;
  handleTextareaChange?: (value: string) => void;
}
export default function WhTextarea({
  disabled = false,
  placeholder = '내용을 입력해주세요.',
  label = '',
  value = '',
  handleTextareaChange,
}: TextareaProps) {
  const [textCount, setTextCount] = useState(value.length);

  useEffect(() => {
    setTextCount(value.length);
  }, [value]);

  const onTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let textValue = e.target.value;

    if (textValue.length > 60) {
      textValue = textValue.slice(0, 60);
    }

    setTextCount(textValue.length);
    if (handleTextareaChange) {
      handleTextareaChange(textValue);
    }
  };

  return (
    <div>
      <div className='flex flex-col my-7'>
        <div className='flex justify-between items-center mb-3'>
          {label && (
            <label htmlFor='textarea' className={defaultLabelCss}>
              {label}
            </label>
          )}

          <span className={`${defaultCountCss}`}>{textCount}/60</span>
        </div>
        <textarea
          id='textarea'
          cols={40}
          maxLength={60}
          className={`${defaultTextareaCss}`}
          disabled={disabled}
          value={value}
          placeholder={placeholder}
          onChange={onTextareaHandler}
        />
      </div>
    </div>
  );
}
