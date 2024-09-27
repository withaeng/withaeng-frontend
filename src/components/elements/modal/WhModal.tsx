'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { CloseIcon } from '../../../../public/assets/icons/menu';

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  hideCloseButton?: boolean;
  isDismissible?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function WhModal({
  isOpen,
  onClose,
  hideCloseButton = false,
  isDismissible = true,
  className = '',
  children,
}: Props) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const nodeRef = useRef(null);
  const router = useRouter();
  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  };

  useEffect(() => {
    setElement(document.getElementById('modal-root')!);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (typeof window !== 'object') {
    return null;
  }

  if (!element) {
    return null;
  }

  return createPortal(
    <CSSTransition
      in={isOpen}
      timeout={300}
      nodeRef={nodeRef}
      mountOnEnter
      unmountOnExit
      classNames='modal-transition'
      className='fixed left-0 top-0 h-dvh w-dvw'
    >
      <div ref={nodeRef}>
        <div
          role='presentation'
          className='z-40 h-full w-full bg-[#000000] opacity-20'
          onClick={isDismissible ? handleClose : undefined}
        />
        <div className='modal-content absolute z-50 max-h-[800px] w-full rounded-t-[20px] bg-nutral-white-01 shadow-modal max-xl:bottom-0 max-xl:h-[calc(100vh-22px)] xl:left-1/2 xl:top-1/2 xl:w-fit xl:-translate-x-1/2 xl:-translate-y-1/2 xl:rounded'>
          <div className={`w-full xl:w-[680px] ${className}`}>
            {!hideCloseButton && (
              <button
                type='button'
                aria-label='닫기 버튼'
                onClick={handleClose}
                className='absolute right-5 top-5'
              >
                <CloseIcon width={24} height={24} stroke='#333333' />
              </button>
            )}
            {children}
          </div>
        </div>
      </div>
    </CSSTransition>,
    element
  );
}
