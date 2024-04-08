'use client';

import WhButton from '@/components/elements/WhButton';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalBody from '@/components/elements/modal/WhModalBody';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import WhModalFooter from '@/components/elements/modal/WhModalFooter';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import useModal from '@/components/elements/modal/useModal';

export default function BasicModal() {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>기본 모달 열기</label>
      <WhButton size='md' fitContent onClick={onOpen}>
        기본 모달
      </WhButton>
      <WhModal isOpen={isOpen} onClose={onClose}>
        <WhModalHeader>모달 헤더 입니다.</WhModalHeader>

        <WhModalBody>
          <div className='flex flex-col gap-10 mt-10 mx-[15px]'>
            모달 내용입니다.
          </div>
        </WhModalBody>
        <WhModalFooter>
          <WhModalButtonList onClick={onClose} label='닫기' />
        </WhModalFooter>
      </WhModal>
    </div>
  );
}
