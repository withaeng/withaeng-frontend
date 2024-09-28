// 임시 파일. auth modal type 등을 정의

export type AuthModalType =
  | 'login'
  | 'signup'
  | 'find-password'
  | 'checkEmail'
  | 'prefer';

export interface UserSignIn {
  email: string;
  password: string;
}

export interface UserSignUp extends UserSignIn {
  birth: Date;
  gender: 'MALE' | 'FEMALE';
}

export interface UserSignUpForm extends UserSignUp {
  term: boolean;
}

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: (value: AuthModalType) => void;
}

export interface UserResponse {
  userId: number;
  email: string;
  accessToken: string;
}
