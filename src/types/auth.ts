// 임시 파일. auth modal type 등을 정의

export type AuthModalType =
  | 'login'
  | 'signup'
  | 'findPassword'
  | 'checkEmail'
  | 'prefer';

export interface UserSignIn {
  email: string;
  password: string;
}

export interface UserSignUp extends UserSignIn {
  birth: Date;
  isMale: boolean;
}

export interface UserSignUpForm extends UserSignUp {
  term: boolean;
}

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: (value: AuthModalType) => void;
}
