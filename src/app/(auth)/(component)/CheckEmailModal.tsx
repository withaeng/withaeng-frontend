import WhModal from '@/components/elements/modal/WhModal';
import CheckEmailModalComponent from '@/components/auth/sign-up/CheckEmailModalContent';

export default function CheckEmailModalPage() {
  return (
    <WhModal isOpen>
      <div className='px-[84px] py-[72px]'>
        <CheckEmailModalComponent />
      </div>
    </WhModal>
  );
}
