import Link from 'next/link';
import WhButton from '@/components/elements/WhButton';
import ModalOperationByState from './component/ModalOperationByState';

export default function AuthPage() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <p>👉 useState로 조작</p>
      <Link href='/auth/login'>
        <WhButton size='md' fitContent>
          로그인 / 회원가입
        </WhButton>
      </Link>
      <Link href='/auth/prefer'>
        <WhButton size='md' fitContent>
          회원가입 이후 정보 입력
        </WhButton>
      </Link>
      <p>👉 useState로 조작</p>
      <ModalOperationByState />
    </div>
  );
}
