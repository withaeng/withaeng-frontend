import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserResponse, UserSignIn, UserSignUp } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse } from '@/types/api';
import { apiPost, apiPut } from '@/utils/api';
import { useCallback } from 'react';

/** sign in api */
const signInApi = ({
  email,
  password,
}: UserSignIn): Promise<ApiResponse<UserResponse>> =>
  apiPost('/api/v1/auth/sign-in', { email, password });

/** sign up api */
const signUpApi = ({
  email,
  password,
  isMale,
  birth,
}: UserSignUp): Promise<ApiResponse<UserResponse>> =>
  apiPost('/api/v1/auth/sign-up', { email, password, isMale, birth });

/** validate email api */
const validateEmailApi = ({
  email,
  code,
}: {
  email: string;
  code: string;
}): Promise<ApiResponse<{}>> =>
  apiPut('/api/v1/auth/validate-email', { email, code });

/** send email - change pw api */
const sendEmailChangePWApi = ({
  email,
}: {
  email: string;
}): Promise<ApiResponse<{}>> =>
  apiPost('/api/v1/auth/send-email-for-change-password', { email });

export default function useAuth() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const signin = useMutation({
    mutationFn: (data: UserSignIn) => signInApi(data),
    onSuccess: (data) => {
      // TODO: 성공/실패 alert 추가
      if (data.error) {
        console.error(data.error.code + data.error.message);
      } else {
        console.log('성공?');
        setCookie('accessToken', data.data.accessToken);
        router.replace('/');
      }
    },
    onError: (err) => console.error(err),
  });

  const signup = useMutation({
    mutationFn: (data: UserSignUp) => signUpApi(data),
    onSuccess: (data) => {
      // TODO: 성공/실패 alert 추가
      if (data.error) {
        console.error(data.error.code + data.error.message);
      } else {
        console.log('성공?', data);
        setCookie('accessToken', data.data.accessToken);
        router.replace('/checkEmail');
      }
    },
    onError: (err) => console.error(err),
  });

  const signout = () => {
    deleteCookie('accessToken');
    console.log('로그아웃');
    router.push('/');
    router.refresh();
  };

  const validateEmail = useMutation({
    mutationFn: (data: { email: string; code: string }) =>
      validateEmailApi(data),
    onSuccess: (data) => {
      // TODO: 성공/실패 alert 추가
      if (data.error) {
        console.error(data.error.code + data.error.message);
      } else {
        console.log('성공?', data);
        router.replace('/prefer');
      }
    },
    onError: (err) => console.error(err),
  });

  const sendEmailPw = useMutation({
    mutationFn: (data: { email: string }) => sendEmailChangePWApi(data),
    onSuccess: (data, variables) => {
      // TODO: 성공/실패 alert 추가
      if (data.error) {
        console.error(data.error.code + data.error.message);
      } else {
        console.log('비밀번호 변경 이메일 전송 성공?', data, variables.email);
        router.replace(
          `/checkEmailPw?${createQueryString('email', variables.email)}`
        );
      }
    },
    onError: (err) => console.error(err),
  });

  return { signin, signup, signout, validateEmail, sendEmailPw };
}
