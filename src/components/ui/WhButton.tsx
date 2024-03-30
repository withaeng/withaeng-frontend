'use client';

import React, { ReactNode } from 'react';

const defaultBtnCss =
  'rounded-sm disabled:opacity-40 px-5 border border-primary-main transition text-subtitle-02 flex items-center justify-center gap-2.5 text-nutral-white-01';

const outLineBtnCss =
  'hover:bg-nutral-white-02 text-primary-main bg-nutral-white-01 disabled:text-nutral-white-03 disabled:border-nutral-white-04';

const fillBtnCss = 'bg-primary-main hover:bg-primary-pressing';

let btnSizeCss = '';

interface ButtonProps {
  children: ReactNode;
  outLine?: boolean;
  disabled?: boolean;
  fitContent?: boolean;
  size: 'lg' | 'md' | 'sm';
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function WhButton({
  children,
  disabled = false,
  outLine = false,
  fitContent = false,
  size = 'md',
  onClick,
}: ButtonProps) {
  if (size === 'lg') {
    btnSizeCss = 'py-3 max-h-11';
  } else if (size === 'md') {
    btnSizeCss = 'py-2 max-h-9';
  } else if (size === 'sm') {
    btnSizeCss = 'py-1 max-h-7';
  }

  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      className={`
      ${defaultBtnCss}
      ${!fitContent && 'w-full'}
      ${btnSizeCss}
      ${outLine ? `${outLineBtnCss}` : `${fillBtnCss}`}
    `}
    >
      {children}
    </button>
  );
}
