'use client';

import WhButton from '@/components/elements/WhButton';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import useModal from '@/components/elements/modal/useModal';

export default function NonDismissableModal() {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>오버레이 닫기 불가</label>
      <WhButton size='md' fitContent onClick={onOpen}>
        오버레이 닫기 불가 모달
      </WhButton>
      <WhModal isOpen={isOpen} onClose={onClose} isDismissible={false}>
        <WhModalHeader>모달 헤더 입니다.</WhModalHeader>
        <div className='flex flex-col gap-10 mt-10 mx-[15px]'>
          모달 내용입니다.
        </div>
        <WhModalButtonList onClick={onClose} label='닫기' />
      </WhModal>
    </div>
  );
}
