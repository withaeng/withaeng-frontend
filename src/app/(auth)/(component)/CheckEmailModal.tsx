'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import useAuth from '@/hooks/useAuth';
import WhModal from '@/components/elements/modal/WhModal';
import CheckEmailModalComponent from '@/app/(auth)/(component)/components/sign-up/CheckEmailModalContent';

export default function CheckEmailModalPage() {
  const searchParams = useSearchParams();
  const { validateEmail } = useAuth();
  // FIXME: (임시 작업) validate email api를 다녀왔는지 확인하기 위함. 아니면 무한 렌더링에 빠져버림...
  const [isChecked, setIsChecked] = useState(false);

  if (!isChecked && searchParams.has('email') && searchParams.has('code')) {
    const email = searchParams.get('email') ?? '';
    const code = searchParams.get('code') ?? '';
    validateEmail.mutate({ email, code });
    setIsChecked(true);
  }

  const handleEmail = () => {
    console.log('이메일 재전송');
  };

  return (
    <WhModal isOpen>
      <div className='px-[84px] py-[72px]'>
        <CheckEmailModalComponent handleEmail={handleEmail} />
      </div>
    </WhModal>
  );
}
