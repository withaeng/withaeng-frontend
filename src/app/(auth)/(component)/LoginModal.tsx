import Link from 'next/link';
import LoginModalContent from '@/app/(auth)/(component)/components/login/LoginModalContent';
import WhModal from '@/components/elements/modal/WhModal';
import { ReactComponent as LogoImage } from '../../../../public/assets/images/withaeng-logo-main.svg';

export default function LoginModalPage() {
  return (
    <WhModal isOpen>
      <div className='px-10 py-[125px] xl:px-[101px] xl:py-[116px]'>
        <div className='mb-5 flex justify-center xl:mb-12'>
          <LogoImage />
        </div>
        <LoginModalContent />
        <div className='mt-5 flex justify-between text-nutral-black-03 xl:mx-10'>
          <Link href='/find-password' replace>
            <button type='button' className='text-body-03'>
              비밀번호 찾기
            </button>
          </Link>
          <div className='flex items-center gap-2'>
            <p className='text-body-03 max-xl:hidden'>
              아직 회원이 아니신가요?
            </p>
            <Link href='/signup' replace>
              <button
                type='button'
                className='text-subtitle-02 xl:text-body-03 xl:text-secondary-main'
              >
                회원가입
              </button>
            </Link>
          </div>
        </div>
      </div>
    </WhModal>
  );
}
