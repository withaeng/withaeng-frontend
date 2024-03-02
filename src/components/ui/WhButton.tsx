'use client';

import React, { ReactNode } from 'react';

const defaultBtnCss =
  'rounded-sm disabled:opacity-40 border  border-primary-main transition text-sm font-semibold flex items-center justify-center gap-2.5';

const outLineBtnCss =
  'hover:bg-nutral-white-02 text-primary-main bg-nutral-white-01 disabled:text-nutral-white-04 disabled:border-nutral-white-04 disabled:bg-nutral-white-01';

const fullBtnCss = 'bg-primary-main hover:bg-primary-pressing';

let btnSizeCss = '';

let onlyIconCss = '';

interface ButtonProps {
  children: ReactNode;
  outLine: boolean;
  disabled: boolean;
  size: 'lg' | 'md' | 'sm';
  onlyIcon: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function WhButton({
  children = undefined,
  disabled = false,
  onlyIcon = false,
  outLine = false,
  size = 'md',
  onClick,
}: ButtonProps) {
  if (size === 'lg') {
    btnSizeCss = 'py-3';
  } else if (size === 'md') {
    btnSizeCss = 'py-2';
  } else if (size === 'sm') {
    btnSizeCss = 'py-1';
  } else {
    btnSizeCss = 'py-2';
  }

  if (size === 'lg') {
    onlyIconCss = 'px-2.5';
  } else {
    onlyIconCss = 'px-2';
  }

  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      className={`
      ${defaultBtnCss}
      ${btnSizeCss}
      ${onlyIcon ? `${onlyIconCss}` : 'px-5'}
      ${outLine ? `${outLineBtnCss}` : `${fullBtnCss}`}
    `}
    >
      {children}
    </button>
  );
}
