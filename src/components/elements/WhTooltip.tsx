'use client';

import { useState } from 'react';
import { DeleteFillIcon } from '../../../public/assets/icons/system';

// const defaultTooltipCss =
//   'absolute hidden group-hover:inline-block  whitespace-nowrap px-4 py-2 text-nutral-white-01 bg-secondary-main rounded';

const defaultTooltipCss =
  'absolute flex justify-center items-center gap-2 inline-block whitespace-nowrap px-4 py-2 text-nutral-white-01 bg-secondary-main rounded';

let positionCss = '';

// const defaultPointCss =
//   'absolute hidden group-hover:inline-block border-[10px]';

const defaultPointCss = 'absolute inline-block border-[10px]';
let pointCss = '';

interface TooltipProps {
  position: 'top' | 'bottom';
  coreText?: string;
  content: string;
  children?: React.ReactNode;
}

export default function WhTooltip({
  position = 'top',
  coreText = '',
  content = '',
  children,
}: TooltipProps) {
  if (position === 'top') {
    positionCss = 'left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]';
  } else if (position === 'bottom') {
    positionCss = 'left-1/2 -translate-x-1/2 top-[calc(100%+5px)]';
  }

  if (position === 'top') {
    pointCss =
      'left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-secondary-main';
  } else if (position === 'bottom') {
    pointCss =
      'left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-secondary-main';
  }

  const [isShow, setIsShow] = useState(true);

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <div className='relative cursor-pointer group'>
      <div className='mx-2 my-1'>{children}</div>
      <p className={`${defaultTooltipCss} ${positionCss}`}>
        <span className='text-primary-main'>{coreText}</span>
        {content}
        <DeleteFillIcon onClick={handleClose} />
      </p>

      <span className={`${defaultPointCss} ${pointCss}`} />
    </div>
  );
}
