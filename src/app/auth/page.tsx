import ModalOperationByState from './component/ModalOperationByState';

export default function AuthPage() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <p>👉 useState로 조작</p>
      <ModalOperationByState />
    </div>
  );
}
