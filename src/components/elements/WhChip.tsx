'use client';

import React, { ReactNode } from 'react';

const defaultChipCss =
  'py-2 px-4 rounded-[20px] disabled:opacity-40 bg-nutral-white-01 disabled:bg-nutral-white-01  text-nutral-black-03 disabled:border-nutral-white-03 border border-nutral-white-03 transition text-subtitle-02 flex items-center justify-center gap-2.5 text-nutral-black-03';

const selectedCss =
  'bg-primary-eexLight text-primary-pressing border-primary-main';

interface ChipProps {
  children: ReactNode;
  disabled?: boolean;
  value?: string;
  checked?: boolean;
  onClick?: (value: string) => void;
}

export default function WhChip({
  children,
  disabled = false,
  value = '',
  checked = false,
  onClick = () => {}, // set default function
}: ChipProps) {
  return (
    <button
      type='button'
      disabled={disabled}
      value={value}
      onClick={() => onClick(value)}
      className={`${defaultChipCss} ${checked ? selectedCss : 'hover:bg-nutral-white-02'}`}
    >
      {children}
    </button>
  );
}
