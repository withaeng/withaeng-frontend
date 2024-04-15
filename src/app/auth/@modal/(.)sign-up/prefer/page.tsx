'use client';

import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Step1 from './component/step1';
import Step2 from './component/step2';
import Step3 from './component/step3';

function StepBar({ value }: { value: number }): React.ReactNode {
  return (
    <div className='h-0.5 w-full bg-primary-exLight mt-2'>
      <div
        className='h-full bg-primary-main transition-all'
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

export default function SignUpPreferModal() {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const onPrevClick = () => {
    setStep((prev) => prev - 1);
  };
  const onNextClick = () => {
    if (step === 3) {
      router.replace('/');
    } else {
      setStep((prev) => prev + 1);
    }
  };
  return (
    <WhModal className='px-[85px] py-[72px] h-[800px]'>
      <div className='flex flex-col h-full'>
        <p className='text-nutral-black-04 text-right'>
          <Link href='/'>건너뛰기</Link>
        </p>
        <StepBar value={(step / 3) * 100} />
        {step === 1 && (
          <>
            <div className='grow'>
              <Step1 />
            </div>
            <WhModalButtonList onClick={onNextClick} label='다음' />
          </>
        )}
        {step === 2 && (
          <>
            <div className='grow'>
              <Step2 />
            </div>
            <WhModalButtonList
              prev
              onPrevClick={onPrevClick}
              onClick={onNextClick}
              label='다음'
            />
          </>
        )}
        {step === 3 && (
          <>
            <div className='grow'>
              <Step3 />
            </div>
            <WhModalButtonList
              prev
              onPrevClick={onPrevClick}
              onClick={onNextClick}
              label='같이행 시작하기'
            />
          </>
        )}
      </div>
    </WhModal>
  );
}
