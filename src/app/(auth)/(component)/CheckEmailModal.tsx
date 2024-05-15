'use client';

import { useRouter } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import CheckEmailModalComponent from '@/components/auth/sign-up/CheckEmailModalContent';

export default function CheckEmailModalPage() {
  const router = useRouter();

  return (
    <WhModal isOpen onClose={() => router.replace('/')}>
      <div className='px-[84px] py-[72px]'>
        <CheckEmailModalComponent />
      </div>
    </WhModal>
  );
}
