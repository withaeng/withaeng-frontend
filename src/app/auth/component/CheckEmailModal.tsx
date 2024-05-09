'use client';

import WhModal from '@/components/elements/modal/WhModal';
import CheckEmailModalComponent from '@/components/auth/sign-up/CheckEmailModalContent';
import { AuthModalProps } from '@/types/auth';

export default function CheckEmailModal({
  isOpen,
  onClose,
}: Omit<AuthModalProps, 'onOpen'>) {
  return (
    <WhModal isOpen={isOpen} onClose={onClose}>
      <div className='px-[84px] py-[72px]'>
        <CheckEmailModalComponent />
      </div>
    </WhModal>
  );
}
