'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import SignUpModalContent from '@/components/auth/sign-up/SignUpModalContent';
import TermModalContent from '@/components/auth/sign-up/TermModalContent';
import { UserSignUpForm } from '@/types/auth';
import WhModal from '@/components/elements/modal/WhModal';

const initFormData: UserSignUpForm = {
  email: '',
  password: '',
  birth: new Date(),
  isMale: true,
  term: false,
};

export default function SignUpModalPage() {
  const router = useRouter();
  const [form, setForm] = useState(initFormData);
  const [termPage, setTermPage] = useState(false);

  return (
    <WhModal isOpen onClose={() => router.back()}>
      <div className='px-[105px] py-[72px] h-[800px]'>
        {!termPage ? (
          <SignUpModalContent
            form={form}
            setForm={setForm}
            setTermPage={setTermPage}
            handleSubmit={() => router.replace('/checkEmail')}
          />
        ) : (
          <TermModalContent setForm={setForm} setTermPage={setTermPage} />
        )}
      </div>
    </WhModal>
  );
}
