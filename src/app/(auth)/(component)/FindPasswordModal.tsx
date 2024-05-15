'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import FindPasswordModalContent from '@/components/auth/login/FindPasswordModalContent';

export default function FindPasswordModalPage() {
  const router = useRouter();
  const [email, setEamil] = useState('');

  return (
    <WhModal isOpen onClose={() => router.back()}>
      <div className='px-[105px] py-[72px]'>
        <FindPasswordModalContent
          email={email}
          setEmail={setEamil}
          handleSubmit={() => router.replace('/checkEmail')}
        />
      </div>
    </WhModal>
  );
}
