'use client';

import { useRouter } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import EmailCheckModalComponent from '@/components/auth/sign-up/EmailCheckModalContent';

export default function CheckEmailPage() {
  const router = useRouter();

  return (
    <WhModal isOpen onClose={() => router.push('/')}>
      <div className='px-[84px] py-[72px]'>
        <EmailCheckModalComponent />
      </div>
    </WhModal>
  );
}
