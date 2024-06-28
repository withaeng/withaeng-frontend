'use client';

import WhButton from '@/components/elements/WhButton';
import { useRouter } from 'next/navigation';

interface Props {
  prev?: boolean;
  onPrevChlick?: () => void;
  label: string;
  leftLabel?: string;
  onClick: () => void;
}

export default function WhModalButtonList({
  prev = false,
  onPrevChlick,
  label,
  leftLabel,
  onClick,
}: Props) {
  const router = useRouter();

  const handlePrevClick = () => {
    router.back();
  };

  return (
    <div className='flex justify-center'>
      <div className='flex gap-5 w-[500px]'>
        {prev && (
          <div className='w-[100px]'>
            <WhButton
              size='lg'
              outLine
              onClick={() =>
                onPrevChlick ? onPrevChlick() : handlePrevClick()
              }
            >
              이전
            </WhButton>
          </div>
        )}
        {leftLabel && 
          <div className='w-[100px]'>
          <WhButton
            size='lg'
            outLine
            onClick={onClick}
          >
            {leftLabel}
          </WhButton>
        </div>
        }
        <div className='w-full'>
          <WhButton size='lg' onClick={onClick}>
            {label}
          </WhButton>
        </div>
      </div>
    </div>
  );
}
