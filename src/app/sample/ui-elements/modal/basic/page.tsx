import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/sample/ui-elements/modal');
  return <p>기본 모달 페이지</p>;
}
