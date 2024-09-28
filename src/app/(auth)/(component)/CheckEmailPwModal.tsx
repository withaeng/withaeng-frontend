'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import CheckEmailModalComponent from '@/app/(auth)/(component)/components/sign-up/CheckEmailModalContent';
import useAuth from '@/hooks/useAuth';

export default function CheckEmailPwModalPage() {
  const router = useRouter();
  const { sendEmailPw } = useAuth();
  const searchParams = useSearchParams();
  console.log(searchParams.get('email'));
  // FIXME: (임시 작업) validate email api를 다녀왔는지 확인하기 위함. 아니면 무한 렌더링에 빠져버림...
  const [isChecked, setIsChecked] = useState(false);

  if (!isChecked && searchParams.has('email') && searchParams.has('code')) {
    const email = searchParams.get('email') ?? '';
    const code = searchParams.get('code') ?? '';
    setIsChecked(true);
    router.replace(`/change-password?email=${email}&code=${code}`);
  }

  const handleEmail = async () => {
    console.log('이메일 재전송');
    await sendEmailPw
      .mutateAsync({ email: searchParams.get('email')! })
      .then(() => {
        console.log('이메일 재전송이 완료되었습니다.');
      });
  };

  return (
    <WhModal isOpen>
      <div className='px-4 py-5 xl:px-[84px] xl:py-[72px]'>
        <CheckEmailModalComponent handleEmail={handleEmail} />
      </div>
    </WhModal>
  );
}
