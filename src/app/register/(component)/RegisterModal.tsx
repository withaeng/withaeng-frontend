'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import StepBar from '@/components/StepBar';
import { CreateAccompanyRequest } from '@/@types/accompany';
import useAccompany from '@/hooks/useAccompany';
import Step1ModalContent from './Step1ModalContent';
import Step2ModalContent from './Step2ModalContent';
import Step3ModalContent from './Step3ModalContent';
import Step0ModalContent from './Step0ModalContent';

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
  imageFile: undefined,
};

export default function RegisterModal() {
  const router = useRouter();
  const { registerPost } = useAccompany();
  const [form, setForm] = useState<CreateAccompanyRequest>(initAccompany);
  const [step, setStep] = useState(0);

  // change route
  const onPrevClick = () => {
    setStep((prev) => prev - 1);
  };
  const onNextClick = () => {
    if (step === 3) {
      registerPost.mutate(form);
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <WhModal
      isOpen
      onClose={() => router.back()}
      className='h-full max-h-[800px] overflow-auto px-4 pb-5 pt-15 xl:h-[800px] xl:px-[85px] xl:py-[72px]'
      isDismissible={false}
    >
      <div className='flex h-full flex-col'>
        {step > 0 && <StepBar value={(step / 3) * 100} />}
        {step === 0 && (
          <>
            <Step0ModalContent />
            <div className='mt-5 xl:mt-12'>
              <WhModalButtonList onClick={onNextClick} label='같이행 등록' />
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <Step1ModalContent form={form} setForm={setForm} />
            <div className='mt-5 xl:mt-12'>
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
            <div className='mt-5 xl:mt-12'>
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
            <div className='mt-5 xl:mt-12'>
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
