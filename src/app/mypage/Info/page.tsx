import EditProfileModal from '../(component)/EditProfileModal';
import WhMypageCard from '../(component)/WhMypageCard';
import WhMypageHeader from '../(component)/WhMypageHeader';
import WhMypageInfo from '../(component)/WhMypageInfo';
import WhMypageTravelType from '../(component)/WhMypageTravelType';

export default function Info() {
  return (
    <div className='flex flex-col gap-10'>
      <WhMypageHeader title='내 정보 관리' />

      <WhMypageCard
        title='프로필'
        content='나의 프로필을 완성하여 상대방에게 나를 알리세요!!'
        linkText={<EditProfileModal />}
      >
        <WhMypageInfo />
      </WhMypageCard>

      <WhMypageCard
        title='프로필'
        content='나의 여행 타입을 설정하여 보다 좋은 동행 파트너를 찾으세요!!'
        linkText='수정'
      >
        <WhMypageTravelType />
      </WhMypageCard>
    </div>
  );
}
