'use client';

import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useModalActions, useModalStore } from '@/stores/modalStore';

import Modal from '@/components/Modal';
import { usePathname } from 'next/navigation';
import ConfirmModal from '@/components/modals/ConfirmModal';
import AlertModal from '@/components/modals/AlertModal';
import FilterModal from '@/components/modals/FilterModal';
import { TAccompanyFilter } from '@/types/accompany';

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

  const handlePositiveClose = () => {
    if (modalRef.current) {
      setOpen(false);
      handler?.(true);
      window.UIkit.modal(modalRef.current).hide();
    }
  };

  const handleNegativeClose = () => {
    if (modalRef.current) {
      setOpen(false);
      handler?.(false);
      window.UIkit.modal(modalRef.current).hide();
    }
  };

  const handleFilterClose = (res: TAccompanyFilter) => {
    if (modalRef.current) {
      setOpen(false);
      handler?.(res);
      window.UIkit.modal(modalRef.current).hide();
    }
  };

  useEffect(() => {
    if (modalRoot && modalRef.current && open) {
      window.UIkit.modal(modalRef.current).show();
    }
  }, [modalRoot, modalRef, open]);

  return (
    modalRoot &&
    ReactDOM.createPortal(
      <div>
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
        {type === 'filter' && (
          <Modal ref={modalRef}>
            <FilterModal onHandle={handleFilterClose} />
          </Modal>
        )}
      </div>,
      modalRoot
    )
  );
}
