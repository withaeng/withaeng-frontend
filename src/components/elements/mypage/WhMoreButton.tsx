import React from 'react';
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from '../../../../public/assets/icons/arrow';

const defaultMoreBtnCss =
  'absolute mt-2 max-w-[118px] z-10 flex gap-1 items-center py-2 px-3 border rounded-[20px] border-nutral-white-03 bg-nutral-white-01 text-nutral-black-03 text-caption-01';

interface ButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function WhMoreButton({ onClick, isOpen = false }: ButtonProps) {
  return (
    <div className='flex justify-center'>
      <button
        onClick={onClick}
        type='button'
        className={`${defaultMoreBtnCss}`}
      >
        {isOpen ? '더보기' : '접기'}
        {isOpen ? (
          <ChevronDownIcon width={24} height={24} stroke='#333333' />
        ) : (
          <ChevronUpIcon width={24} height={24} stroke='#333333' />
        )}
      </button>
    </div>
  );
}
