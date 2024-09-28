import { NoData } from '../../../public/assets/icons/system';

export default function WhNodata() {
  return (
    <div className='flex w-full flex-col items-center justify-center gap-2'>
      <NoData />
      <h2 className='m-0 text-subtitle-02 text-nutral-black-02'>어머낫!</h2>
      <span className='text-body-03 leading-4 text-nutral-black-02'>
        아쉽지만 현재 설정된 조건에 맞는 동행이 없습니다.
        <br />
        필터를 변경해보거나 새로운 여행지를 탐색해보세요!
      </span>
    </div>
  );
}
