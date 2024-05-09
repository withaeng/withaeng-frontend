'use client';

import { useState } from 'react';
import Link from 'next/link';
import Step1ModalContent from '@/components/auth/prefer/Step1ModalContent';
import Step2ModalContent from '@/components/auth/prefer/Step2ModalContent';
import Step3ModalContent from '@/components/auth/prefer/Step3ModalContent';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import { useRouter } from 'next/navigation';

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

export default function PreferPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);

  // step 1 : state
  const [nickname, setNickname] = useState<string>('');
  const [mbti, setMbti] = useState<string[]>([]);
  const [preferRegion, setPreferRegion] = useState<string[]>([]);
  // step 2 : state
  const [interests, setInterests] = useState<string[]>([]);
  const [consume, setConsume] = useState<string[]>([]);
  const [cantEat, setCantEat] = useState<string[]>([]);
  // step 3 : state
  const [gender, setGender] = useState<string[]>([]);
  const [smoking, setSmoking] = useState<string[]>([]);
  const [drinking, setDrinking] = useState<string[]>([]);

  // step 1 : function
  function handleNickname(value: string) {
    // FIXME: 닉네임 조건 걸어야함.
    setNickname(value);
  }
  function handleMbtiChip(value: string) {
    if (!mbti.includes(value)) {
      setMbti((prev) => [...prev, value]);
    } else {
      setMbti((prev) => prev.filter((item) => item !== value));
    }
  }
  function handleRegionChip(value: string) {
    if (!preferRegion.includes(value)) {
      setPreferRegion((prev) => [...prev, value]);
    } else {
      setPreferRegion((prev) => prev.filter((item) => item !== value));
    }
  }
  // step 2 : function
  function handleInterestsChip(value: string) {
    if (!interests.includes(value)) {
      setInterests((prev) => [...prev, value]);
    } else {
      setInterests((prev) => prev.filter((item) => item !== value));
    }
  }
  function handleConsumeChip(value: string) {
    if (!consume.includes(value)) {
      setConsume((prev) => [...prev, value]);
    } else {
      setConsume((prev) => prev.filter((item) => item !== value));
    }
  }
  function handleCantEatChip(value: string) {
    if (!cantEat.includes(value)) {
      setCantEat((prev) => [...prev, value]);
    } else {
      setCantEat((prev) => prev.filter((item) => item !== value));
    }
  }
  // step 3 : function
  function handleGenderChip(value: string) {
    if (!gender.includes(value)) {
      setGender((prev) => [...prev, value]);
    } else {
      setGender((prev) => prev.filter((item) => item !== value));
    }
  }
  function handleSmokingChip(value: string) {
    if (!smoking.includes(value)) {
      setSmoking((prev) => [...prev, value]);
    } else {
      setSmoking((prev) => prev.filter((item) => item !== value));
    }
  }
  function handleDrinkingChip(value: string) {
    if (!drinking.includes(value)) {
      setDrinking((prev) => [...prev, value]);
    } else {
      setDrinking((prev) => prev.filter((item) => item !== value));
    }
  }

  // change route
  const onPrevClick = () => {
    setStep((prev) => prev - 1);
  };
  const onNextClick = () => {
    if (step === 3) {
      console.log(`
nickname : ${nickname}, 
mbti : ${mbti}, 
preferRegion : ${preferRegion}, 
interests : ${interests}, 
consume : ${consume}, 
cantEat : ${cantEat}, 
gender : ${gender}, 
smoking : ${smoking}, 
drinking : ${drinking}, 
      `);
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
              <Step1ModalContent
                nickname={nickname}
                handleNickname={handleNickname}
                mbti={mbti}
                handleMbtiChip={handleMbtiChip}
                preferRegion={preferRegion}
                handleRegionChip={handleRegionChip}
              />
            </div>
            <WhModalButtonList onClick={onNextClick} label='다음' />
          </>
        )}
        {step === 2 && (
          <>
            <div className='grow'>
              <Step2ModalContent
                interests={interests}
                handleInterestsChip={handleInterestsChip}
                consume={consume}
                handleConsumeChip={handleConsumeChip}
                cantEat={cantEat}
                handleCantEatChip={handleCantEatChip}
              />
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
              <Step3ModalContent
                gender={gender}
                handleGenderChip={handleGenderChip}
                smoking={smoking}
                handleSmokingChip={handleSmokingChip}
                drinking={drinking}
                handleDrinkingChip={handleDrinkingChip}
              />
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
