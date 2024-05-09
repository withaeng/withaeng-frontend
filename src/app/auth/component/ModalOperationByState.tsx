'use client';

import { useState } from 'react';
import WhButton from '@/components/elements/WhButton';
import { AuthModalType } from '@/types/auth';
import PreferModal from './preferModal';
import LoginModal from './loginModal';
import SignUpModal from './SignUpModal';
import FindPasswordModal from './FindPasswordModal';
import CheckEmailModal from './CheckEmailModal';

const modalInit: Record<AuthModalType, boolean> = {
  login: false,
  signup: false,
  findPassword: false,
  checkEmail: false,
  prefer: false,
};

export default function ModalOperationByState() {
  const [open, setOpen] = useState(modalInit);

  const handleClose = () => {
    setOpen(modalInit);
  };
  const handleOpen = (type: AuthModalType) => {
    setOpen({ ...modalInit, [type]: true });
  };
  return (
    <>
      <WhButton size='md' fitContent onClick={() => handleOpen('login')}>
        로그인 / 회원가입
      </WhButton>
      <WhButton size='md' fitContent onClick={() => handleOpen('login')}>
        회원가입 이후 정보 등록
      </WhButton>
      <LoginModal
        isOpen={open.login}
        onClose={handleClose}
        onOpen={handleOpen}
      />
      <SignUpModal
        isOpen={open.signup}
        onClose={handleClose}
        onOpen={handleOpen}
      />
      <FindPasswordModal
        isOpen={open.findPassword}
        onClose={handleClose}
        onOpen={handleOpen}
      />
      <CheckEmailModal isOpen={open.checkEmail} onClose={handleClose} />
      <PreferModal isOpen={open.prefer} onClose={handleClose} />
    </>
  );
}
