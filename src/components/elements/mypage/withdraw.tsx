'use client';

import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import useModal from '@/components/elements/modal/useModal';

export default function WithdrawModal() {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <div>
      <button
        type='button'
        onClick={onOpen}
        className='text-secondary-light text-subtitle-02'
      >
        회원탈퇴
      </button>
      <WhModal isOpen={isOpen} onClose={onClose} isDismissible={false}>
        <WhModalHeader>
          <span className='text-primary-main'>같이행 </span>서비스를 정말로
          탈퇴하실건가요? 😥
        </WhModalHeader>
        <div className='mt-10 text-center mb-12 text-nutral-black-04'>
          <p className='pb-4'>같이행 서비스 계정에 대해 탈퇴를 신청하셨어요.</p>
          <p>탈퇴하시면 회원님의 모든 정보와 활동 기록이 삭제돼요.</p>
          <p>삭제된 정보는 복구하실 수 없습니다. 그래도 탈퇴하시는건가요?</p>
        </div>
        <WhModalButtonList onClick={onClose} label='네, 탈퇴할래요.' />
      </WhModal>
    </div>
  );
}
