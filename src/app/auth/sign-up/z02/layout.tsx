'use client';

import { CloseIcon } from '../../../../../public/assets/icons/menu';

interface Props {
  children: React.ReactNode;
}

export default function SignUpZ03Layout({ children }: Props) {
  return (
    <div className='relative px-21 py-18'>
      <button type='button' aria-label='닫기 버튼' onClick={() => {}}>
        <CloseIcon className='absolute top-5 right-5' />
      </button>
      {children}
    </div>
  );
}
