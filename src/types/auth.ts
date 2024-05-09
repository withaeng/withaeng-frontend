// 임시 파일. auth modal type 등을 정의

export type AuthModalType =
  | 'login'
  | 'signup'
  | 'findPassword'
  | 'checkEmail'
  | 'prefer';

export interface UserSignUp {
  email: string;
  password: string;
  birth: Date;
  gender: 'male' | 'female';
  term: boolean;
}

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: (value: AuthModalType) => void;
}
