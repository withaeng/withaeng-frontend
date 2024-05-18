'use client';

import { useState } from 'react';
import { CloseIcon } from '../../../public/assets/icons/menu';
import {
  TooltipBottomArrowIcon,
  TooltipTopArrowIcon,
} from '../../../public/assets/icons/arrow';

const defaultTooltipCss =
  'absolute flex justify-center items-center inline-block whitespace-nowrap px-4 py-2 text-nutral-white-01 bg-secondary-main rounded';

let positionCss = '';

const defaultPointCss = 'absolute inline-block';
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
    positionCss = 'left-28 -translate-x-1/2 bottom-[calc(100%+11px)]';
  } else if (position === 'bottom') {
    positionCss = 'left-1/5 -translate-x-1/2 top-[calc(100%+11px)]';
  }

  if (position === 'top') {
    pointCss = 'left-6 bottom-full';
  } else if (position === 'bottom') {
    pointCss = 'right-6';
  }

  const [isShow, setIsShow] = useState(true);

  const handleClick = () => {
    setIsShow(false);
  };

  return (
    <div>
      <div className='relative group'>
        <div className='mx-2 text-secondary-main'>{children}</div>
        {isShow && (
          <div>
            <p className={`${defaultTooltipCss} ${positionCss}`}>
              <span className='text-primary-main'>{coreText}</span>
              {content}
              <CloseIcon
                onClick={handleClick}
                className='ml-2 cursor-pointer'
                stroke='#FAF8F6'
                width={20}
                height={20}
              />
            </p>
            {position === 'top' ? (
              <span className={`${defaultPointCss} ${pointCss}`}>
                <TooltipBottomArrowIcon width={14} height={14} />
              </span>
            ) : (
              <span className={`${defaultPointCss} ${pointCss}`}>
                <TooltipTopArrowIcon width={14} height={14} />
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
