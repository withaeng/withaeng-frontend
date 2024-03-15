'use client';

import React, { ReactNode, useState } from 'react';

const defaultChipCss =
  'py-2 px-4 rounded-[20px] disabled:opacity-40 bg-nutral-white-01 disabled:bg-nutral-white-01  text-nutral-black-03 disabled:border-nutral-white-03 border border-nutral-white-03 transition text-subtitle-02 flex items-center justify-center gap-2.5 text-nutral-black-03';

const isSelectedCss = 'bg-primary-eexLight text-primary-pressing border-primary-main';

interface ChipProps {
  children: ReactNode;
  disabled?: boolean;
}

export default function WhChip({ children, disabled= false}: ChipProps) {

  const [isSelected, setIsSelected] = useState(false);

  const chipHandler = () => {
    setIsSelected(!isSelected)
  }
  
  return (

    <button
      type='button'
      disabled={disabled}
      onClick={chipHandler}
      className={`
      ${defaultChipCss}

      ${isSelected ? isSelectedCss : 'hover:bg-nutral-white-02' }
    `}
    >
      {children}
    </button>
  );
}

