import React from 'react';
import { ChevronDown20Icon } from '../../../../public/assets/icons/arrow/index';

const defaultMoreBtnCss =
  'absolute  max-w-[118px] z-10 flex justify-between items-center py-3 px-[23.5px] border rounded-[20px] border-nutral-white-03 bg-nutral-white-01';

interface ButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function WhMypageMoreButton({
  onClick,
  isOpen = false,
}: ButtonProps) {
  return (
    <div className={`flex justify-center ${isOpen ? '-mt-50' : ''}`}>
      <button
        onClick={onClick}
        type='button'
        className={`${defaultMoreBtnCss}`}
      >
        {isOpen ? '접기' : '펼치기'}
        <ChevronDown20Icon
          className={`transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
    </div>
  );
}
