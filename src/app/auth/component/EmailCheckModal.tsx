'use client';

import WhModal from '@/components/elements/modal/WhModal';
import EmailCheckModalComponent from '@/components/auth/sign-up/EmailCheckModalContent';
import { AuthModalProps } from '@/types/auth';

export default function EmailCheckModal({
  isOpen,
  onClose,
}: Omit<AuthModalProps, 'onOpen'>) {
  return (
    <WhModal isOpen={isOpen} onClose={onClose}>
      <div className='px-[84px] py-[72px]'>
        <EmailCheckModalComponent />
      </div>
    </WhModal>
  );
}
