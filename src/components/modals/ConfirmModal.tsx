import React from 'react';
import WhButton from '../elements/WhButton';

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
    <div>
      <div className='ly_body'>{children}</div>
      <div className='ly_footer'>
        <div className='bl_btn'>
          <ul className='el_reset bl_btn_list'>
            <li className='bl_btn_item'>
              <WhButton onClick={onNegativeHandle}>{negativeText}</WhButton>
            </li>
            <li className='bl_btn_item'>
              <WhButton onClick={onPositiveHandle}>{negativeText}</WhButton>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
