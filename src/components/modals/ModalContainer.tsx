'use client';

import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useModalActions, useModalStore } from '@/stores/modalStore';

import Modal from '@/components/Modal';
import { usePathname } from 'next/navigation';
import ConfirmModal from '@/components/modals/ConfirmModal';
import AlertModal from '@/components/modals/AlertModal';

export default function ModalContainer() {
  const { open, type, title, content, positiveText, negativeText, handler } =
    useModalStore();
  const { setOpen, setType } = useModalActions();
  const [modalRoot, setModalRoot] = useState<HTMLDivElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const path = usePathname();
  const initPath = path;

  useEffect(() => {
    setModalRoot(document.getElementById('global-modal') as HTMLDivElement);
  }, []);

  useEffect(() => {
    if (path !== initPath) {
      setType('');
      setOpen(false);
    }
  }, [path]);

  const initModalRef = (displayValue: string) => {
    if (modalRoot && modalRef && modalRef.current) {
      if (displayValue === 'none') {
        document
          .getElementsByTagName('body')[0]
          .classList.remove('overflow-y-hidden');
      } else {
        document
          .getElementsByTagName('body')[0]
          .classList.add('overflow-y-hidden');
      }
      modalRoot.style.display = displayValue;
    }
  };

  const handlePositiveClose = () => {
    if (modalRef.current) {
      setOpen(false);
      handler?.(true);
      initModalRef('none');
    }
  };

  const handleNegativeClose = () => {
    if (modalRef.current) {
      setOpen(false);
      handler?.(false);
      initModalRef('none');
    }
  };

  useEffect(() => {
    if (modalRoot && modalRef.current && open) {
      initModalRef('block');
    }
    if (modalRoot && modalRef.current && !open) {
      initModalRef('none');
    }
  }, [modalRoot, modalRef, open]);

  return (
    modalRoot &&
    ReactDOM.createPortal(
      <>
        {type === 'alert' && (
          <Modal ref={modalRef}>
            <AlertModal
              buttonText={positiveText}
              onHandle={handlePositiveClose}
            >
              <div className='w-full flex flex-col gap-5 justify-center items-center'>
                {title && (
                  <span className='text-headline-04 leading-[24px] text-nutral-black-02'>
                    {title}
                  </span>
                )}
                <span className='text-body-02 text-nutral-black-03'>
                  {content}
                </span>
              </div>
            </AlertModal>
          </Modal>
        )}
        {type === 'confirm' && (
          <Modal ref={modalRef}>
            <ConfirmModal
              positiveText={positiveText}
              negativeText={negativeText}
              onPositiveHandle={handlePositiveClose}
              onNegativeHandle={handleNegativeClose}
            >
              <div className='w-full flex flex-col gap-5 justify-center items-center'>
                {title && (
                  <span className='text-headline-04 leading-[24px] text-nutral-black-02'>
                    {title}
                  </span>
                )}
                <span className='text-body-02 text-nutral-black-03'>
                  {content}
                </span>
              </div>
            </ConfirmModal>
          </Modal>
        )}
      </>,
      modalRoot
    )
  );
}
