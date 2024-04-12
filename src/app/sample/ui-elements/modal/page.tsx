import BasicModal from './component/basicModal';
import LongContentModal from './component/longContentModal';
import NonDismissableModal from './component/nonDismissableModal';
import StepModal from './component/stepModal';

export default function ModalPage() {
  return (
    <div className='mt-3 flex flex-row gap-10'>
      <BasicModal />
      <StepModal />
      <LongContentModal />
      <NonDismissableModal />
    </div>
  );
}
