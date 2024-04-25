import WhMypageCard from '@/components/elements/mypage/WhMypageCard';
import WhMypageHeader from '@/components/elements/mypage/WhMypageHeader';

export default function Activity() {
  return (
    <div className='flex flex-col gap-10'>
      <WhMypageHeader title='내 활동' />

      <WhMypageCard title='매너 점수 & 나의 배지'>작업대기</WhMypageCard>
      <WhMypageCard title='동행 내역'>작업대기</WhMypageCard>
    </div>
  );
}
