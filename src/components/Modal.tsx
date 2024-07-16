import { forwardRef, LegacyRef, ReactNode } from 'react';

interface ModalProps {
  children: ReactNode;
}

export default forwardRef(
  ({ children }: ModalProps, ref: LegacyRef<HTMLDivElement> | undefined) => (
    <div ref={ref} uk-modal='stack: true; container: global-modal'>
      <div className='w-full h-full flex justify-center items-center'>
        <div className='w-fit bg-nutral-white-01 py-12 px-18'>{children}</div>
      </div>
    </div>
  )
);
