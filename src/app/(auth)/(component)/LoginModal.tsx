import Link from 'next/link';
import LoginModalContent from '@/components/auth/login/LoginModalContent';
import WhModal from '@/components/elements/modal/WhModal';
import { ReactComponent as LogoImage } from '../../../../public/assets/images/withaeng-logo-transparent-h42.svg';

export default function LoginModalPage() {
  return (
    <WhModal isOpen>
      <div className='px-10 py-[125px] xl:px-[101px] xl:py-[116px]'>
        <div className='mb-5 xl:mb-12 flex justify-center'>
          <LogoImage />
        </div>
        <LoginModalContent />
        <div className='flex justify-between mt-5 xl:mx-10 text-nutral-black-03'>
          <Link href='/findPassword' replace>
            <button type='button' className='text-body-03'>
              비밀번호 찾기
            </button>
          </Link>
          <div className='flex gap-2 items-center'>
            <p className='text-body-03 max-xl:hidden'>
              아직 회원이 아니신가요?
            </p>
            <Link href='/signup' replace>
              <button
                type='button'
                className='xl:text-secondary-main text-subtitle-02 xl:text-body-03'
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
