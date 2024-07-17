'use client';

import { useState } from 'react';
import Link from 'next/link';
import Step1ModalContent from '@/app/(auth)/(component)/components/prefer/Step1ModalContent';
import Step2ModalContent from '@/app/(auth)/(component)/components/prefer/Step2ModalContent';
import Step3ModalContent from '@/app/(auth)/(component)/components/prefer/Step3ModalContent';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import { useRouter } from 'next/navigation';
import useUser from '@/hooks/useUser';
import { useUserStore } from '@/providers/UserStoreProvider';

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

export default function PreferModalPage() {
  const router = useRouter();
  const { updateUserDetail } = useUser();
  const [step, setStep] = useState(1);
  const {
    nickname,
    mbti,
    preferTravelType,
    preferTravelThemes,
    consumeStyle,
    foodRestrictions,
    preferAccompanyGender,
    smokingType,
    drinkingType,
  } = useUserStore((state) => state);

  const updateData = () => {
    updateUserDetail.mutate({
      nickname,
      mbti,
      preferTravelType,
      preferTravelThemes,
      consumeStyle,
      foodRestrictions,
      preferAccompanyGender,
      smokingType,
      drinkingType,
    });
  };

  const handleClose = () => {
    updateData();
    router.replace('/');
  };

  // change route
  const onPrevClick = () => {
    setStep((prev) => prev - 1);
  };
  const onNextClick = () => {
    if (step === 3) {
      handleClose();
    } else {
      setStep((prev) => prev + 1);
    }
  };

  return (
    <WhModal
      isOpen
      onClose={handleClose}
      className='px-[85px] py-[72px] h-[800px]'
    >
      <div className='flex flex-col h-full'>
        <p className='text-nutral-black-04 text-right'>
          <Link href='/' replace>
            건너뛰기
          </Link>
        </p>
        <StepBar value={(step / 3) * 100} />
        {step === 1 && (
          <>
            <div className='grow'>
              <Step1ModalContent />
            </div>
            <WhModalButtonList onClick={onNextClick} label='다음' />
          </>
        )}
        {step === 2 && (
          <>
            <div className='grow'>
              <Step2ModalContent />
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
              <Step3ModalContent />
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
