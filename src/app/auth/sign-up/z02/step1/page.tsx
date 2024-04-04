'use client';

import { useRouter } from 'next/navigation';
import ButtonGroup from '../../components/FooterButtonList';

export default function SignUpStep1Page() {
  const router = useRouter();
  const onClick = () => {
    router.push('/auth/sign-up/z02/step3');
  };

  return (
    <div className='flex flex-col gap-10'>
      <h4 className='text-headline-04 text-nutral-black-01 text-center pb-[25px] border-b border-nutral-white-03'>
        이메일 인증하기
      </h4>
      <div>input 들어갈 자리</div>
      <div>input 들어갈 자리</div>
      <div className='mt-2'>
        <ButtonGroup onClick={onClick} label='계속' />
      </div>
    </div>
  );
}
