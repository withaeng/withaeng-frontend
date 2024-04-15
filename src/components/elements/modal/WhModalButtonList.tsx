'use client';

import WhButton from '@/components/elements/WhButton';
import { useRouter } from 'next/navigation';

interface Props {
  prev?: boolean;
  onPrevClick?: () => void;
  label: string;
  onClick: () => void;
}

export default function WhModalButtonList({
  prev = false,
  onPrevClick,
  label,
  onClick,
}: Props) {
  const router = useRouter();

  const handlePrevClick = () => {
    router.back();
  };

  return (
    <div className='flex justify-center'>
      <div className='flex gap-5 w-full'>
        {prev && (
          <div className='basis-1/5'>
            <WhButton
              size='lg'
              outLine
              onClick={() => (onPrevClick ? onPrevClick() : handlePrevClick())}
            >
              이전
            </WhButton>
          </div>
        )}
        <div className={`${prev ? 'basis-4/5' : 'w-full'}`}>
          <WhButton size='lg' onClick={onClick}>
            {label}
          </WhButton>
        </div>
      </div>
    </div>
  );
}
