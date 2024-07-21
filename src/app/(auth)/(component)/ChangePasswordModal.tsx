'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import ChangePasswordModalContent from '@/app/(auth)/(component)/components/login/ChangePasswordModalContent';
import useAuth from '@/hooks/useAuth';

export default function ChangePasswordModalPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  const { changePassword } = useAuth();

  if (searchParams.has('email') && searchParams.has('code')) {
    setEmail(searchParams.get('email') ?? '');
    setCode(searchParams.get('code') ?? '');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('비밀번호 변경');
    changePassword.mutate({ email, password, code });
  };

  return (
    <WhModal isOpen onClose={() => router.back()}>
      <div className='px-[105px] py-[72px]'>
        <ChangePasswordModalContent
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </div>
    </WhModal>
  );
}
