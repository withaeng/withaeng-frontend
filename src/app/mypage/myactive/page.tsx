import WhMypageCard from '@/components/elements/mypage/WhMypageCard';

export default function MyActive() {
  return (
    <div className='flex flex-col gap-10'>
      <WhMypageCard title='매너 점수 & 나의 배지'>작업대기</WhMypageCard>
      <WhMypageCard title='동행 내역'>작업대기</WhMypageCard>
    </div>
  );
}
