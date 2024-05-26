'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { CloseIcon } from '../../../../public/assets/icons/menu';

interface Props {
  isOpen: boolean;
  onClose: () => void;
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
  className,
  children,
}: Props) {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const nodeRef = useRef(null);

  useEffect(() => {
    setElement(document.getElementById('modal-root')!);
  }, []);

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
      className='absolute top-0 left-0 w-dvw h-dvh'
    >
      <div ref={nodeRef}>
        <div
          role='presentation'
          className='w-full h-full bg-[#000000] opacity-20 z-40'
          onClick={isDismissible ? onClose : undefined}
        />
        <div className='modal-content absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nutral-white-01 z-50 w-fit rounded shadow-modal'>
          <div className={`w-[680px] ${className}`}>
            {!hideCloseButton && (
              <button type='button' aria-label='닫기 버튼' onClick={onClose}>
                <CloseIcon
                  width={24}
                  height={24}
                  className='absolute top-5 right-5'
                />
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
