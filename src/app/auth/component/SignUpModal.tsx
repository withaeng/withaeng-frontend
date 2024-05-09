'use client';

import { useEffect, useState } from 'react';
import SignUpModalContent from '@/components/auth/sign-up/SignUpModalContent';
import TermModalContent from '@/components/auth/sign-up/TermModalContent';
import { AuthModalProps, UserSignUp } from '@/types/auth';
import WhModal from '@/components/elements/modal/WhModal';

const initFormData: UserSignUp = {
  email: '',
  password: '',
  birth: new Date(),
  gender: 'male',
  term: false,
};

export default function SignUpModal({
  isOpen,
  onClose,
  onOpen,
}: AuthModalProps) {
  const [form, setForm] = useState(initFormData);
  const [termPage, setTermPage] = useState(false);

  useEffect(
    () => () => {
      setForm(initFormData);
    },
    []
  );

  return (
    <WhModal isOpen={isOpen} onClose={onClose}>
      <div className='px-[105px] py-[72px] h-[800px]'>
        {!termPage ? (
          <SignUpModalContent
            form={form}
            setForm={setForm}
            setTermPage={setTermPage}
            handleSubmit={() => onOpen('checkEmail')}
          />
        ) : (
          <TermModalContent setForm={setForm} setTermPage={setTermPage} />
        )}
      </div>
    </WhModal>
  );
}
