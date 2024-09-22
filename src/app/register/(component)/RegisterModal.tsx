'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import { AccompanyData } from '@/types/accompany';
import Step1ModalContent from './Step1ModalContent';
import Step2ModalContent from './Step2ModalContent';
import Step3ModalContent from './Step3ModalContent';
import Step0ModalContent from './Step0ModalContent';

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

const initAccompany = {
  title: '',
  content: '',
  continent: '',
  country: '',
  city: '',
  startTripDate: new Date(),
  endTripDate: new Date(),
  bannerImageUrl: '',
  accompanyCnt: 0,
  openKakaoUrl: '',
  age: [20, 50],
  gender: '',
  tags: [],
};

export default function RegisterModal() {
  const router = useRouter();
  const [form, setForm] = useState<AccompanyData>(initAccompany);
  const [step, setStep] = useState(0);

  // change route
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
    <WhModal
      isOpen
      onClose={() => router.back()}
      className='px-[85px] py-[72px] h-[800px]'
      isDismissible={false}
    >
      <div className='flex flex-col h-full'>
        {step > 0 && <StepBar value={(step / 3) * 100} />}
        {step === 0 && (
          <>
            <Step0ModalContent />
            <div className='mt-12'>
              <WhModalButtonList onClick={onNextClick} label='같이행 등록' />
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <Step1ModalContent form={form} setForm={setForm} />
            <div className='mt-12'>
              <WhModalButtonList
                prev
                onPrevClick={onPrevClick}
                onClick={onNextClick}
                label='다음'
              />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <Step2ModalContent form={form} setForm={setForm} />
            <div className='mt-12'>
              <WhModalButtonList
                prev
                onPrevClick={onPrevClick}
                onClick={onNextClick}
                label='다음'
              />
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <Step3ModalContent form={form} setForm={setForm} />
            <div className='mt-12'>
              <WhModalButtonList
                prev
                onPrevClick={onPrevClick}
                onClick={onNextClick}
                label='다음'
              />
            </div>
          </>
        )}
      </div>
    </WhModal>
  );
}
