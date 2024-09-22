'use client';

import { useSearchParams } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import CheckEmailModalComponent from '@/components/auth/sign-up/CheckEmailModalContent';
import useAuth from '@/hooks/useAuth';

export default function CheckEmailPwModalPage() {
  const { sendEmailPw } = useAuth();
  const param = useSearchParams();
  console.log(param.get('email'));

  const handleEmail = () => {
    console.log('이메일 재전송');
    sendEmailPw.mutate({ email: param.get('email')! });
  };

  return (
    <WhModal isOpen>
      <div className='px-[84px] py-[72px]'>
        <CheckEmailModalComponent handleEmail={handleEmail} />
      </div>
    </WhModal>
  );
}
