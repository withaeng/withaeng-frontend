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
        className='text-subtitle-02 text-secondary-exLight'
      >
        회원탈퇴
      </button>
      <WhModal
        isOpen={isOpen}
        onClose={onClose}
        isDismissible={false}
        className='flex flex-col justify-between px-4 py-5 xl:px-[84px] xl:py-[72px]'
      >
        <div>
          <WhModalHeader>
            <span className='text-subtitle-01 text-primary-main xl:text-headline-04'>
              같이행{' '}
            </span>
            서비스를 정말로 탈퇴하실건가요? 😥
          </WhModalHeader>
          <div className='mb-12 mt-10 text-center'>
            <p className='text-body-02 text-nutral-black-04'>
              탈퇴하시면 회원님의 모든 정보와 활동 기록이
              <br />
              삭제돼요. 삭제된 정보는 복구하실 수 없습니다.
              <br />
              그래도 탈퇴하시는건가요?
            </p>
          </div>
        </div>
        <WhModalButtonList onClick={onClose} label='네, 탈퇴할래요.' />
      </WhModal>
    </div>
  );
}
