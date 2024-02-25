'use client';

import React from 'react';

const defaultBtnCss =
  'rounded-sm disabled:opacity-40 border  border-primary-main transition text-sm font-semibold flex items-center justify-center gap-2.5';

const isOutLineCss =
  'hover:bg-nutral-white-02 text-primary-main bg-nutral-white-01 disabled:text-nutral-white-04 disabled:border-nutral-white-04 disabled:bg-nutral-white-01';

const noOutLineCss = 'bg-primary-main hover:bg-primary-pressing';

export interface ButtonProps {
  outLine: boolean;
  disabled: boolean;
  size: string;
  onlyIcon: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const WhButton: React.FC<ButtonProps> = ({
  children,
  outLine,
  disabled,
  size,
  onlyIcon,
  onClick,
}) => (
  <button
    type='button'
    disabled={disabled}
    onClick={onClick}
    className={`
      ${defaultBtnCss}
      ${size === 'lg' ? 'py-3' : size === 'sm' ? 'py-1' : 'py-2'}
      ${onlyIcon && size === 'lg' ? 'px-2.5' : onlyIcon ? 'px-2' : 'px-5'}
      ${outLine ? `${isOutLineCss}` : `${noOutLineCss}`} 
    `}
  >
    {children}
  </button>
);

export default WhButton;
