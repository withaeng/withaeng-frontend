'use client';

import { useState } from 'react';
import WhButton from '@/components/elements/WhButton';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import useModal from '@/components/elements/modal/useModal';

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

export default function StepModal() {
  const [step, setStep] = useState(1);
  const { isOpen, onOpen, onClose } = useModal();

  const handlePrevClick = () => {
    if (step === 2) setStep(1);
    else if (step === 3) setStep(2);
  };

  const handleNextClick = () => {
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
    else if (step === 3) {
      onClose();
      setStep(1);
    }
  };

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>step 모달 열기</label>
      <WhButton size='md' fitContent onClick={onOpen}>
        step 모달
      </WhButton>
      <WhModal isOpen={isOpen} onClose={onClose}>
        <StepBar value={(step / 3) * 100} />
        <div className='flex flex-col gap-10 mt-10 mx-[15px]'>
          <div>STEP {step}</div>
        </div>
        {step === 1 && (
          <WhModalButtonList onClick={handleNextClick} label='다음' />
        )}
        {step === 2 && (
          <WhModalButtonList
            prev
            onPrevChlick={handlePrevClick}
            onClick={handleNextClick}
            label='다음'
          />
        )}
        {step === 3 && (
          <WhModalButtonList
            prev
            onPrevChlick={handlePrevClick}
            onClick={handleNextClick}
            label='완료'
          />
        )}
      </WhModal>
    </div>
  );
}
 