'use client';

import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import { useRouter } from 'next/navigation';

const secondarySpanCss = 'text-secondary-main font-semibold underline';
export default function SignUpTermModal() {
  const router = useRouter();
  // TODO: 이메일 재전송 로직 작업
  const onClick = () => {};

  return (
    <WhModal
      isOpen={true}
      onClose={() => router.back()}
      className='px-[84px] py-[72px]'
    >
      <WhModalHeader>이메일을 확인해주세요.</WhModalHeader>
      <div className='mx-[95px] mt-10 mb-12 text-center'>
        입력한 정보로 인증 메일을 보내드렸습니다.
        <br />
        이메일을 받지 못하셨다구요?
        <br />
        그렇다면 <span className={`${secondarySpanCss}`}>이메일 재전송</span>을
        클릭해주세요.
      </div>
      <WhModalButtonList label='이메일 재전송하기' onClick={onClick} />
    </WhModal>
  );
}
