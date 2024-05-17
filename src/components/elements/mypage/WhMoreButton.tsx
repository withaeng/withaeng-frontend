import React from 'react';
import { ChevronDown20Icon } from '../../../../public/assets/icons/arrow/index';

const defaultMoreBtnCss =
  'absolute mt-2 max-w-[118px] z-10 flex justify-between items-center py-2 px-3 border rounded-[20px] border-nutral-white-03 bg-nutral-white-01 text-nutral-black-03';

interface ButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function WhMoreButton({ onClick, isOpen = false }: ButtonProps) {
  return (
    <div className={`flex justify-center ${isOpen ? '-mt-50' : ''}`}>
      <button
        onClick={onClick}
        type='button'
        className={`${defaultMoreBtnCss}`}
      >
        {isOpen ? '더보기' : '접기'}
        <ChevronDown20Icon
          className={`ml-1 transform ${isOpen ? '' : 'rotate-180'}`}
        />
      </button>
    </div>
  );
}
