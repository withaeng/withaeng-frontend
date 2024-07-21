import { forwardRef, LegacyRef, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

export default forwardRef(
  ({ children }: ModalProps, ref: LegacyRef<HTMLDivElement> | undefined) => (
    <div
      ref={ref}
      className='w-full h-full z-[1000] bg-nutral-black-01 bg-opacity-60 opacity-0 hover:opacity-100 transition-opacity duration-300'
    >
      <div className='w-full h-full flex justify-center items-center'>
        <div className='relative top-0 left-0 w-fit bg-nutral-white-01 py-12 px-18'>
          {children}
        </div>
      </div>
    </div>
  )
);
