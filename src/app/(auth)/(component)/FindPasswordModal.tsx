'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import FindPasswordModalContent from '@/components/auth/login/FindPasswordModalContent';
import useAuth from '@/hooks/useAuth';

export default function FindPasswordModalPage() {
  const router = useRouter();
  const [email, setEamil] = useState('');
  const { sendEmailPw } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('비밀번호 찾기 이메일 전송');
    sendEmailPw.mutate({ email });
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
