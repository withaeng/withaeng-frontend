'use client';

import { useState } from 'react';
import WhModal from '@/components/elements/modal/WhModal';
import SignUpContent from './component/signUpContent';
import TermContent from './component/termContent';
import { useRouter } from 'next/navigation';

export interface UserSignUp {
  email: string;
  password: string;
  birth: Date;
  gender: 'male' | 'female';
  term: boolean;
}

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
      isOpen={true}
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
