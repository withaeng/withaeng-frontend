'use client';

import React from 'react';
import { IconType } from 'react-icons';

const defaultBtnCss =
  'rounded-sm disabled:opacity-40 border px-5 border-primary-main transition text-sm font-semibold flex items-center justify-center gap-2.5';

const isOutLineCss =
  'hover:bg-nutral-white-02 text-primary-main bg-nutral-white-01 disabled:text-nutral-white-04 disabled:border-nutral-white-04 disabled:bg-nutral-white-01';

const noOutLineCss = 'bg-primary-main hover:bg-primary-pressing';


export interface ButtonProps {
  label: string;
  outLine?: boolean;
  small?: boolean;
  large?:boolean;
  disabled?: boolean;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const WhButton: React.FC<ButtonProps> = ({
  label,
  small,
  large,
  outLine,
  disabled,
  icon,
  onClick,
}) => {
  return (
    <button
      disabled={disabled}
      className={`
      ${defaultBtnCss}
      ${small? 'py-1' : 'py-2'}
      ${large? 'py-3' : 'py-2'}
      ${outLine ? `${isOutLineCss}` : `${noOutLineCss}`} 
    `}
    >
      {/* {Icon && <Icon size={24} />} */}
      {label}
    </button>
  );
};

export default WhButton;
