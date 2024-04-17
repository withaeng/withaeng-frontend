import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/');
  return <p>선호등록 페이지</p>;
}
