'use client';

import { useSearchParams } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import CheckEmailModalComponent from '@/app/(auth)/(component)/components/sign-up/CheckEmailModalContent';
import useAuth from '@/hooks/useAuth';

export default function CheckEmailPwModalPage() {
  const { sendEmailPw } = useAuth();
  const param = useSearchParams();
  console.log(param.get('email'));

  const handleEmail = async () => {
    console.log('이메일 재전송');
    await sendEmailPw.mutateAsync({ email: param.get('email')! }).then(() => {
      console.log('이메일 재전송이 완료되었습니다.');
    });
  };

  return (
    <WhModal isOpen>
      <div className='px-[84px] py-[72px]'>
        <CheckEmailModalComponent handleEmail={handleEmail} />
      </div>
    </WhModal>
  );
}
