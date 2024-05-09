'use client';

import { useState } from 'react';
import WhModal from '@/components/elements/modal/WhModal';
import FindPasswordModalContent from '@/components/auth/login/FindPasswordModalContent';
import { AuthModalProps } from '@/types/auth';

export default function FindPasswordModal({
  isOpen,
  onClose,
  onOpen,
}: AuthModalProps) {
  const [email, setEamil] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpen('checkEmail');
  };

  return (
    <WhModal isOpen={isOpen} onClose={onClose}>
      <div className='px-[105px] py-[72px]'>
        <FindPasswordModalContent
          email={email}
          setEmail={setEamil}
          handleSubmit={handleSubmit}
        />
      </div>
    </WhModal>
  );
}
