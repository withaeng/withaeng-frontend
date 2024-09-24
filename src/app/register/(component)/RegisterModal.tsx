'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import { CreateAccompanyRequest } from '@/@types/accompany';
import Step1ModalContent from './Step1ModalContent';
import Step2ModalContent from './Step2ModalContent';
import Step3ModalContent from './Step3ModalContent';
import Step0ModalContent from './Step0ModalContent';

function StepBar({ value }: { value: number }): React.ReactNode {
  return (
    <div className='mt-2 h-0.5 w-full bg-primary-exLight'>
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
  startTripDate: dayjs().format('YYYY-MM-DD'),
  endTripDate: dayjs().format('YYYY-MM-DD'),
  memberCount: 0,
  tags: [],
  openKakaoUrl: '',
  startAccompanyAge: 20,
  endAccompanyAge: 50,
  preferGender: 'NO_PREFERENCE',
  hasImage: false,
};

export default function RegisterModal() {
  const router = useRouter();
  const [form, setForm] = useState<CreateAccompanyRequest>(initAccompany);
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
      className='h-[800px] px-[85px] py-[72px]'
      isDismissible={false}
    >
      <div className='flex h-full flex-col'>
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
