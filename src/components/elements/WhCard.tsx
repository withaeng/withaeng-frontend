import Image from 'next/image';
import dateUtil from '@/utils/dateUtil';
import {
  CalendarCheckGrayIcon,
  UsersGroupGrayIcon,
} from '../../../public/assets/icons/communicate';

interface CardProps {
  // TODO: api 반환 값에 맞춰 변경될 예정
  status: string; // 모집 상태
  profileImageUrl: string; // 호스트 프로필 이미지
  nickname: string; // 유저 닉네임
  title: string; // 타이틀
  tags: string[] | null; // 태그
  startTripDate: string; // 동행 시작 날짜
  endTripDate: string; // 동행 종료 날짜
  accompanyCnt: number; // 모집 동행인 수
  accompaniedCnt: number; // 모집된 동행인 수
  thumbnailImageUrl: string; // 썸네일 이미지
}

function dateFormat(date: string, format: string): string {
  return dateUtil.dateFormat(date, format);
}

function accompanyState(status: string): string {
  if (status === 'joining') {
    return '모집 중';
  }
  if (status === 'joined') {
    return '모집 완료';
  }
  return '동행 완료';
}

function accompanyStateBgColor(status: string): string {
  if (status === 'joining') {
    return 'bg-secondary-main';
  }
  if (status === 'joined') {
    return 'bg-caption-success';
  }

  return 'bg-nutral-black-05';
}

function accompaniedCss(status: string): string {
  const baseCss =
    'w-[305px] flex flex-col gap-1 p-2 rounded-md bg-nutral-white-01 hover:shadow-modal cursor-pointer hover:opacity-90 transition';
  if (status === 'accompanied') {
    return `${baseCss} opacity-60`;
  }
  return baseCss;
}

function labelCss(status: string): string {
  return `absolute top-0 left-0 inline-block py-1 px-2 ${accompanyStateBgColor(status)} text-nutral-white-01 text-caption-01 rounded-ss`;
}

export default function WhCard({
  status,
  profileImageUrl,
  nickname,
  title,
  tags,
  startTripDate,
  endTripDate,
  accompanyCnt,
  accompaniedCnt,
  thumbnailImageUrl,
}: CardProps) {
  return (
    <div className={accompaniedCss(status)}>
      <section className='relative w-full h-[152px]'>
        <Image
          className='object-cover rounded w-full h-full'
          src={thumbnailImageUrl}
          width={298}
          height={152}
          alt='동행 썸네일 이미지'
        />
        <span className={labelCss(status)}>{accompanyState(status)}</span>
      </section>
      <section className='flex justify-between text-nutral-black-05 text-caption-01'>
        <div className='flex gap-2 items-center h-8 text-subtitle-02'>
          <Image
            className='inline object-cover rounded-full h-full'
            src={profileImageUrl}
            width={32}
            height={32}
            alt='프로필 이미지'
          />
          <span className='text-subtitle-02 text-nutral-black-05'>
            {nickname}
          </span>
        </div>
        <div className='flex gap-2 items-center'>
          <span className='flex gap-1 items-center text-caption-01 text-nutral-black-05'>
            <CalendarCheckGrayIcon />
            {dateFormat(startTripDate, 'MM.DD')}~
            {dateFormat(endTripDate, 'MM.DD')}
          </span>
          <span className='flex gap-1 items-center text-caption-01 text-nutral-black-05'>
            <UsersGroupGrayIcon />
            {accompanyCnt}/{accompaniedCnt}
          </span>
        </div>
      </section>
      <section className='mt-1 max-w-full overflow-hidden text-ellipsis whitespace-nowrap'>
        <span className='text-subtitle-02 text-nutral-black-03'>{title}</span>
      </section>
      {tags !== null && (
        <section className='mt-2 flex gap-3 pb-2'>
          {tags.map((tag) => (
            <span key={tag} className='text-caption-01 text-primary-main'>
              {tag}
            </span>
          ))}
        </section>
      )}
    </div>
  );
}
