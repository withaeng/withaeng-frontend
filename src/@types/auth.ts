type UserSimpleResponse = {
  id: string;
  email: string;
  nickname: string;
};

/* 비밀번호 재설정 req body */
export interface ChangePasswordRequest {
  email: string;
  code: string;
  password: string;
}

/* 이메일 재전송 req body */
export interface ResendEmailRequest {
  email: string;
}

/* 비밀번호 변경을 위한 이메일 전송 req body */
export interface SendEmailForChangePasswordRequest {
  email: string;
}

/* 로그인 req body */
export interface SignInRequest {
  email: string;
  password: string;
}

/* 회원가입 req body */
export interface SignUpRequest {
  isMale: boolean;
  birth: string; // format:[2024-05-09]
  email: string;
  password: string;
}

/* 이메일 인증 req body */
export interface ValidateEmailRequest {
  email: string;
  code: string;
}

export type { UserSimpleResponse };
