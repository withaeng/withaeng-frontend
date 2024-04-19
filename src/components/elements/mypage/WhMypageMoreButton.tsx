import { useState } from 'react';
import { ChevronDown20Icon } from '../../../../public/assets/icons/arrow/index';

const defaultMoreBtnCss =
  'max-w-[118px] z-10 flex justify-between items-center py-3 px-[23.5px] border rounded-[20px] border-nutral-white-03 bg-nutral-white-01';

export default function WhMypageMoreButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-center'>
      <button
        onClick={toggleButton}
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
