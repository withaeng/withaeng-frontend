import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/');
  return <p>회원가입 페이지</p>;
}
