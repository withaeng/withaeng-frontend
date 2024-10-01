import React from 'react';
import WhButton from '@/components/elements/WhButton';

interface AlertModalProps {
  children: React.ReactNode;
  buttonText?: string;
  onHandle?: () => void;
}

export default function AlertModal({
  children,
  buttonText,
  onHandle,
}: AlertModalProps) {
  return (
    <>
      {children}
      <div className='mt-10 w-[268px] my-0 mx-auto'>
        <WhButton onClick={onHandle}>{buttonText}</WhButton>
      </div>
    </>
  );
}
