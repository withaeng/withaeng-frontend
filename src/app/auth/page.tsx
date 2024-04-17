import WhButton from '@/components/elements/WhButton';
import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <Link href='/auth/login'>
        <WhButton size='md' fitContent>
          로그인
        </WhButton>
      </Link>
      <Link href='/auth/sign-up'>
        <WhButton size='md' fitContent>
          회원가입
        </WhButton>
      </Link>
      <Link href='/auth/prefer'>
        <WhButton size='md' fitContent>
          회원가입 이후 정보 입력
        </WhButton>
      </Link>
    </div>
  );
}
