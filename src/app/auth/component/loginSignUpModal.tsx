'use client';

import { useState } from 'react';
import LoginModalContent from '@/components/auth/login/LoginModalContent';
import WhButton from '@/components/elements/WhButton';
import WhModal from '@/components/elements/modal/WhModal';
import useModal from '@/components/elements/modal/useModal';
import SignUpModalContent, {
  UserSignUp,
} from '@/components/auth/sign-up/SignUpModalContent';
import TermModalContent from '@/components/auth/sign-up/TermModalContent';
import EmailCheckModalComponent from '@/components/auth/sign-up/EmailCheckModalContent';

const initFormData: UserSignUp = {
  email: '',
  password: '',
  birth: new Date('1990.01.01'),
  gender: 'male',
  term: false,
};

export default function LoginSignUpModal() {
  const { isOpen, onClose, onOpen } = useModal();
  const [content, setContent] = useState<'login' | 'signUp' | 'emailCheck'>(
    'login'
  );
  const [form, setForm] = useState(initFormData);
  const [termPage, setTermPage] = useState(false);

  const signUpHandler = () => {
    // TODO: 서버 연결, 데이터 저장 및 이메일 전송
    setContent('emailCheck');
  };

  const handleOpen = () => {
    setContent('login');
    onOpen();
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <WhButton size='md' fitContent onClick={handleOpen}>
        로그인 / 회원가입
      </WhButton>
      <WhModal isOpen={isOpen} onClose={handleClose}>
        {/* 로그인 */}
        {content === 'login' && (
          <div className='px-[101px] py-[116px]'>
            <LoginModalContent />
            <div className='flex justify-between mt-5 mx-11'>
              <p className='text-body-03 text-nutral-black-03'>
                아직 회원이 아니신가요?
              </p>
              <button
                type='button'
                onClick={() => setContent('signUp')}
                className='text-subtitle-02 text-nutral-black-02 cursor-pointer'
              >
                회원가입
              </button>
            </div>
          </div>
        )}
        {/* 회원 가입 */}
        {content === 'signUp' && (
          <div className='px-[105px] py-[72px] h-[800px]'>
            {!termPage ? (
              <SignUpModalContent
                form={form}
                setForm={setForm}
                setTermPage={setTermPage}
                signUpHandler={signUpHandler}
              />
            ) : (
              <TermModalContent setForm={setForm} setTermPage={setTermPage} />
            )}
          </div>
        )}
        {/* 이메일 확인 */}
        {content === 'emailCheck' && (
          <div className='px-[84px] py-[72px]'>
            <EmailCheckModalComponent />
          </div>
        )}
      </WhModal>
    </>
  );
}
