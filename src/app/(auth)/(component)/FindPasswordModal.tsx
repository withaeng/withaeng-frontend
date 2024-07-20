'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import FindPasswordModalContent from '@/app/(auth)/(component)/components/login/FindPasswordModalContent';
import useAuth from '@/hooks/useAuth';
import useQueryString from '@/hooks/useQueryString';

export default function FindPasswordModalPage() {
  const router = useRouter();
  const [email, setEamil] = useState('');
  const { sendEmailPw } = useAuth();
  const { createQueryString } = useQueryString();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('비밀번호 찾기 이메일 전송');
    await sendEmailPw.mutateAsync({ email }).then(() => {
      router.replace(`/checkEmailPw?${createQueryString('email', email)}`);
    });
  };

  return (
    <WhModal isOpen onClose={() => router.back()}>
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
