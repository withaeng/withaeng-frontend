import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/');
  return <p>로그인 페이지</p>;
}
