'use client';

import React, { ReactNode } from 'react';

const defaultChipCss =
  'py-2 px-4 rounded-[20px] hover:bg-nutral-white-02 disabled:opacity-40 bg-nutral-white-01 disabled:bg-nutral-white-01  text-nutral-black-03 disabled:border-nutral-white-03 focus:bg-primary-eexLight focus:text-primary-pressing focus:border-primary-main border border-nutral-white-03 transition text-subtitle-02 flex items-center justify-center gap-2.5 text-nutral-black-03';

interface ChipProps {
  children: ReactNode;
  disabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function WhChip({ children, disabled= false, onClick }: ChipProps) {
  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      className={`
      ${defaultChipCss}
    `}
    >
      {children}
    </button>
  );
}

