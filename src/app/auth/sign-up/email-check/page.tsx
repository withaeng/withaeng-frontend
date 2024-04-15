import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/');
  return <p>이메일 확인 페이지</p>;
}
