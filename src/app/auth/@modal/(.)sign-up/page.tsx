'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import SignUpContent, { UserSignUp } from './component/signUpContent';
import TermContent from './component/termContent';

const initFormData: UserSignUp = {
  email: '',
  password: '',
  birth: new Date(),
  gender: 'male',
  term: false,
};

export default function SignUpModal() {
  const router = useRouter();
  const [form, setForm] = useState(initFormData);
  const [termPage, setTermPage] = useState(false);

  return (
    <WhModal
      isOpen
      onClose={() => router.back()}
      className='px-[105px] py-[72px] h-[800px]'
    >
      {!termPage ? (
        <SignUpContent
          form={form}
          setForm={setForm}
          setTermPage={setTermPage}
        />
      ) : (
        <TermContent setForm={setForm} setTermPage={setTermPage} />
      )}
    </WhModal>
  );
}
