'use client';

import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import { useRouter } from 'next/navigation';

export default function BasicModal() {
  const router = useRouter();
  return (
    <div>
      <WhModal
        isOpen={true}
        onClose={() => router.back()}
        className='px-20 py-16'
      >
        <WhModalHeader>모달 헤더 입니다.</WhModalHeader>
        <div className='flex flex-col gap-10 my-10 mx-5'>모달 내용입니다.</div>
        <WhModalButtonList onClick={() => router.back()} label='닫기' />
      </WhModal>
    </div>
  );
}
