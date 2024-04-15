'use client';

import { type ElementRef, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { CloseIcon } from '../../../../public/assets/icons/menu';

interface Props {
  hideCloseButton?: boolean;
  isDismissible?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function WhModal({
  hideCloseButton = false,
  isDismissible = true,
  className = '',
  children,
}: Props) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<'dialog'>>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function handleClose(closable: boolean) {
    if (closable) router.back();
  }

  return createPortal(
    <div className='flex justify-center items-center w-full h-full'>
      <dialog
        ref={dialogRef}
        onClose={() => handleClose(true)}
        onMouseDown={(e) =>
          e.target === e.currentTarget && handleClose(isDismissible)
        }
        className='bg-nutral-white-01 z-50 w-fit min-w-[580px] rounded shadow-modal'
      >
        <div className={`w-[680px] ${className}`}>
          {!hideCloseButton && (
            <button
              type='button'
              aria-label='닫기 버튼'
              onClick={() => handleClose(true)}
            >
              <CloseIcon className='absolute top-5 right-5' />
            </button>
          )}
          {children}
        </div>
      </dialog>
    </div>,
    document.getElementById('modal-root')!
  );
}
