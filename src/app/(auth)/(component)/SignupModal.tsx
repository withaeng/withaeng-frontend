'use client';

import { useState } from 'react';
import SignUpModalContent from '@/app/(auth)/(component)/components/sign-up/SignUpModalContent';
import TermModalContent from '@/app/(auth)/(component)/components/sign-up/TermModalContent';
import { UserSignUpForm } from '@/types/auth';
import WhModal from '@/components/elements/modal/WhModal';

const initFormData: UserSignUpForm = {
  email: '',
  password: '',
  birth: new Date(),
  gender: 'MALE',
  term: false,
};

export default function SignUpModalPage() {
  const [form, setForm] = useState(initFormData);
  const [termPage, setTermPage] = useState(false);

  return (
    <WhModal isOpen>
      <div className='h-full px-4 py-5 xl:h-[800px] xl:px-[105px] xl:py-[72px]'>
        {!termPage ? (
          <SignUpModalContent
            form={form}
            setForm={setForm}
            setTermPage={setTermPage}
          />
        ) : (
          <TermModalContent setForm={setForm} setTermPage={setTermPage} />
        )}
      </div>
    </WhModal>
  );
}
