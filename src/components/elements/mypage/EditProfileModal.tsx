'use client';

import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import useModal from '@/components/elements/modal/useModal';
import WhInput from '@/components/elements/WhInput';
import { useState } from 'react';
import WhTextarea from '../WhTextarea';
import ProfileImage from './ProfileImage';

export default function EditProfileModal() {
  const { isOpen, onOpen, onClose } = useModal();
  const [inputValue, setInputValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  const handleTextareaChange = (value: string) => {
    setTextareaValue(value);
  };

  const spanClick = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    event.preventDefault();
    onOpen();
  };
  return (
    <div>
      <span
        role='button'
        tabIndex={0}
        onClick={onOpen}
        onKeyDown={spanClick}
        className='text-secondary-main text-subtitle-02'
      >
        수정
      </span>
      {isOpen && (
        <WhModal
          isOpen={isOpen}
          onClose={onClose}
          isDismissible={false}
          className='px-[84px] py-[72px]'
        >
          <WhModalHeader>프로필 수정</WhModalHeader>
          <div className='flex flex-col my-[54px] justify-center items-center'>
            <ProfileImage profileImg={null} isModalOpen={isOpen} />
          </div>
          <div className='mb-[91px]'>
            <WhInput
              label='닉네임'
              size='lg'
              placeholder='최소 글자 수 기준 4자~ 10자'
              handleInputChange={handleInputChange}
              value={inputValue}
            />

            <WhTextarea
              label='한 줄 자기소개'
              handleTextareaChange={handleTextareaChange}
              value={textareaValue}
            />
          </div>
          <WhModalButtonList onClick={onClose} label='수정' />
        </WhModal>
      )}
    </div>
  );
}
