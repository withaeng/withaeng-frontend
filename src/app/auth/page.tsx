import WhButton from '@/components/elements/WhButton';
import Link from 'next/link';

export default function AuthPage() {
  return (
    <div className='flex flex-col gap-5 justify-center items-center'>
      <Link href={'/auth/login'} passHref>
        <WhButton size='md' fitContent>
          로그인
        </WhButton>
      </Link>
      <Link href={'/auth/sign-up'} passHref>
        <WhButton size='md' fitContent>
          회원가입
        </WhButton>
      </Link>
      <Link href={'/auth/prefer'} passHref>
        <WhButton size='md' fitContent>
          회원가입 이후 정보 입력
        </WhButton>
      </Link>
    </div>
  );
}
