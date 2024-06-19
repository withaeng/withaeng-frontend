import { deleteCookie, setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { UserResponse, UserSignIn, UserSignUp } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse } from '@/types/api';
import { apiPost } from '@/utils/api';

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

export default function useAuth() {
  const router = useRouter();

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

  return { signin, signup, signout };
}
