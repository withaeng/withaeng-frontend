import { forwardRef, LegacyRef, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

export default forwardRef(
  ({ children }: ModalProps, ref: LegacyRef<HTMLDivElement> | undefined) => (
    <div
      ref={ref}
      uk-modal='stack: true; container: global-modal'
      className='p-0'
    >
      <div className='relative flex h-full w-full items-center justify-center'>
        <div className='fixed w-fit bg-nutral-white-01 px-18 py-12 max-xl:bottom-0 max-xl:h-fit max-xl:w-full max-xl:rounded-tl-[20px] max-xl:rounded-tr-[20px] max-xl:px-4 max-xl:py-5 xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2'>
          {children}
        </div>
      </div>
    </div>
  )
);
