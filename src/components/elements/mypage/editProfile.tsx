'use client';

import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import useModal from '@/components/elements/modal/useModal';
import Image from 'next/image';
import WhInput from '@/components/elements/WhInput';
import sampleProfile from '../../../../public/assets/icons/profile/blue-01.svg';
import { PencilIcon } from '../../../../public/assets/icons/edit';
import WhTextarea from '../WhTextarea';

const isData = {};

export default function EditProfileModal() {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <div>
      <button
        type='button'
        onClick={onOpen}
        className='text-secondary-main text-subtitle-02'
      >
        프로필 수정
      </button>
      <WhModal isOpen={isOpen} onClose={onClose} isDismissible={false}>
        <WhModalHeader>프로필 수정</WhModalHeader>

        <div className='flex flex-col my-[54px] justify-center items-center'>
          {isData ? (
            <Image
              src={sampleProfile}
              alt='profile-image'
              width={120}
              height={120}
            />
          ) : (
            <Image
              src={sampleProfile}
              alt='profile-image'
              width={120}
              height={120}
            />
          )}
        </div>
        <div className='mb-[91px]'>
          <WhInput
            label='닉네임'
            size='lg'
            placeholder='최소 글자 수 기준 4자~ 10자'
          />

          <WhTextarea label='한 줄 자기소개' />
        </div>
        <WhModalButtonList onClick={onClose} label='수정' />
        <button
          type='button'
          className='absolute top-1/3 right-1/3 mr-9 bg-nutral-white-01 rounded-full p-[11px] shadow-modal '
        >
          <PencilIcon />
        </button>
      </WhModal>
    </div>
  );
}
