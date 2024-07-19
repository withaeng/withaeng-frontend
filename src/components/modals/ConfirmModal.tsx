import React from 'react';
import WhButton from '../elements/WhButton';
import { CloseIcon } from '../../../public/assets/icons/menu';

interface ConfirmModalProps {
  children: React.ReactNode;
  positiveText?: string;
  negativeText?: string;
  onNegativeHandle?: () => void;
  onPositiveHandle?: () => void;
}

export default function ConfirmModal({
  children,
  positiveText = '확인',
  negativeText = '취소',
  onNegativeHandle,
  onPositiveHandle,
}: ConfirmModalProps) {
  return (
    <>
      <div className='absolute top-5 right-4 z-10'>
        <CloseIcon
          width={24}
          height={24}
          stroke='#000000'
          onClick={onNegativeHandle}
        />
      </div>
      {children}
      <div className='flex gap-3 mt-10'>
        <WhButton fitContent onClick={onPositiveHandle}>
          {positiveText}
        </WhButton>
        <WhButton fitContent outLine onClick={onNegativeHandle}>
          {negativeText}
        </WhButton>
      </div>
    </>
  );
}
