import { deleteCookie, getCookie, setCookie } from 'cookies-next';
import { UserSignIn, UserSignUp } from '@/types/auth';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const signInApi = ({ email, password }: UserSignIn) =>
  fetch('/api/v1/auth/sign-in', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });

const signUpApi = ({ email, password, isMale, birth }: UserSignUp) =>
  fetch('/api/v1/auth/sign-up', {
    method: 'POST',
    body: JSON.stringify({ email, password, isMale, birth }),
  });

export default function useAuth() {
  const router = useRouter();
  const [user, setUser] = useState();

  const signin = useMutation({
    mutationFn: (data: UserSignIn) => signInApi(data),
    onSuccess: (data) => {
      if (!data.ok) {
        return new Error(data.statusText);
      }
      console.log('성공? ', data);
      setCookie('accessToken', data.data.accessToken);
      setUser(data.data);
      router.replace('/');
      return '로그인에 성공하셨습니다.';
    },
    onError: (err) => console.error(err),
  });

  const signup = useMutation({
    mutationFn: (data: UserSignUp) => signUpApi(data),
    onSuccess: (data) => {
      console.log('성공?', data);
      router.replace('/checkEmail');
      return '회원가입에 성공하셨습니다.';
    },
    onError: (err) => console.error(err),
  });

  const signout = () => {
    setUser(undefined);
    deleteCookie('accessToken');
  };

  return { user, signin, signup, signout };
}
