'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Step1ModalContent from '@/app/(auth)/(component)/components/prefer/Step1ModalContent';
import Step2ModalContent from '@/app/(auth)/(component)/components/prefer/Step2ModalContent';
import Step3ModalContent from '@/app/(auth)/(component)/components/prefer/Step3ModalContent';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import StepBar from '@/components/StepBar';
import useUser from '@/hooks/useUser';
import { useUserStore } from '@/providers/UserStoreProvider';

export default function PreferModalPage() {
  const router = useRouter();
  const { updateUserNickname, updateUserPrefer } = useUser();
  const [step, setStep] = useState(1);
  const {
    nickname,
    mbti,
    preferTravelType,
    preferTravelThemes,
    consumeStyle,
    foodRestrictions,
    smokingType,
    drinkingType,
  } = useUserStore((state) => state);

  const updateData = () => {
    updateUserNickname.mutate({ nickname });
    updateUserPrefer.mutate({
      mbti,
      preferTravelType,
      preferTravelThemes,
      consumeStyle,
      foodRestrictions,
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
      hideCloseButton
      onClose={handleClose}
      className='px-4 py-5 xl:h-[800px] xl:px-[85px] xl:py-[72px]'
    >
      <div className='flex h-full flex-col'>
        <p className='text-right text-nutral-black-04'>
          <Link className='max-xl:text-caption-01' href='/' replace>
            건너뛰기
          </button>
        </p>
        <StepBar value={(step / 3) * 100} />
        {step === 1 && (
          <>
            <div className='grow overflow-auto'>
              <Step1ModalContent />
            </div>
            <WhModalButtonList onClick={onNextClick} label='다음' />
          </>
        )}
        {step === 2 && (
          <>
            <div className='grow overflow-auto'>
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
            <div className='grow overflow-auto'>
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
