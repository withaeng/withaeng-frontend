import LoginSignUpModal from './component/loginSignUpModal';
import PreferModal from './component/preferModal';

export default function AuthPage() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <LoginSignUpModal />
      <PreferModal />
    </div>
  );
}
