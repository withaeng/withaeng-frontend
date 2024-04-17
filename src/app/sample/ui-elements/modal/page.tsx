import WhButton from '@/components/elements/WhButton';
import BasicModal from './component/basicModal';
import LongContentModal from './component/longContentModal';
import NonDismissableModal from './component/nonDismissableModal';
import StepModal from './component/stepModal';
import Link from 'next/link';

export default function ModalPage() {
  return (
    <div className='flex flex-col'>
      <div className='mt-3 flex gap-10'>
        <p>Route 변경 X</p>
        <BasicModal />
        <StepModal />
        <LongContentModal />
        <NonDismissableModal />
      </div>
      <div className='mt-3 flex gap-10'>
        <p>Route 변경 O</p>
        <div>
          <label htmlFor='basic_modal'>기본 모달 열기</label>
          <Link href='/sample/ui-elements/modal/basic' id='basic_modal'>
            <WhButton size='md' fitContent>
              기본 모달
            </WhButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
