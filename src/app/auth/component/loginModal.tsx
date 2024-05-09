'use client';

import LoginModalContent from '@/components/auth/login/LoginModalContent';
import WhModal from '@/components/elements/modal/WhModal';
import { AuthModalProps } from '@/types/auth';

export default function LoginModal({
  isOpen,
  onClose,
  onOpen,
}: AuthModalProps) {
  return (
    <WhModal isOpen={isOpen} onClose={onClose}>
      <div className='px-[101px] py-[116px]'>
        <LoginModalContent />
        <div className='flex justify-between mt-5 mx-11 text-nutral-black-03'>
          <button
            type='button'
            onClick={() => onOpen('findPassword')}
            className='text-body-03'
          >
            비밀번호 찾기
          </button>
          <div className='flex gap-2'>
            <p className='text-body-03'>아직 회원이 아니신가요?</p>
            <button
              type='button'
              onClick={() => onOpen('signup')}
              className='text-secondary-main text-body-03'
            >
              회원가입
            </button>
          </div>
        </div>
      </div>
    </WhModal>
  );
}
