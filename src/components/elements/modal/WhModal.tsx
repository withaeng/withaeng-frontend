'use client';

import { useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { CloseIcon } from '../../../../public/assets/icons/menu';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  hideCloseButton?: boolean;
  isDismissible?: boolean;
  children: React.ReactNode;
}

export default function WhModal({
  isOpen,
  onClose,
  hideCloseButton = false,
  isDismissible = true,
  children,
}: Props) {
  const nodeRef = useRef(null);
  const handleClose = (closable: boolean): void => {
    if (closable) onClose();
  };
  if (typeof window !== 'object') {
    return null;
  }
  return (
    <>
      {createPortal(
        <CSSTransition
          in={isOpen}
          timeout={400}
          nodeRef={nodeRef}
          mountOnEnter
          unmountOnExit
          classNames='modal-transition'
          className='fixed top-0 left-0 w-dvw h-dvh'
        >
          <div ref={nodeRef}>
            <div
              role='presentation'
              className='w-full h-full bg-[#000000] opacity-20 z-40'
              onClick={() => handleClose(isDismissible)}
            />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-nutral-white-01 z-50 w-fit px-[84px] py-[72px] min-w-[580px] rounded shadow-modal'>
              {!hideCloseButton && (
                <button type='button' aria-label='닫기 버튼' onClick={onClose}>
                  <CloseIcon className='absolute top-5 right-5' />
                </button>
              )}
              <div className=''>{children}</div>
            </div>
          </div>
        </CSSTransition>,
        document.body
      )}
    </>
  );
}
