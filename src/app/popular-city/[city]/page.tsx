import WhCard from '@/components/elements/WhCard';
import Image from 'next/image';
import { FilterIcon } from '../../../../public/assets/icons/system';

const accompanyList = [
  {
    id: 1,
    status: 'joining',
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    tags: null,
    startTripDate: '2024-03-15',
    endTripDate: '2024-03-16',
    accompanyCnt: 3,
    accompaniedCnt: 1,
    thumbnailImageUrl:
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
    continent: 'JP',
  },
  {
    id: 2,
    status: 'joining',
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    tags: null,
    startTripDate: '2024-07-15',
    endTripDate: '2024-07-16',
    accompanyCnt: 4,
    accompaniedCnt: 2,
    thumbnailImageUrl:
      'https://images.unsplash.com/photo-1601699233172-1bb3354b845b?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    continent: 'JP',
  },
  {
    id: 3,
    status: 'joining',
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    tags: ['태그 1', '태그 2', '태그 3'],
    startTripDate: '2024-08-15',
    endTripDate: '2024-08-16',
    accompanyCnt: 4,
    accompaniedCnt: 4,
    thumbnailImageUrl:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    continent: 'JP',
  },
  {
    id: 4,
    status: 'joining',
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    tags: ['태그 1', '태그 2', '태그 3'],
    startTripDate: '2024-08-15',
    endTripDate: '2024-08-16',
    accompanyCnt: 4,
    accompaniedCnt: 4,
    thumbnailImageUrl:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    continent: 'JP',
  },
  {
    id: 5,
    status: 'joining',
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    tags: ['태그 1', '태그 2', '태그 3'],
    startTripDate: '2024-08-15',
    endTripDate: '2024-08-16',
    accompanyCnt: 4,
    accompaniedCnt: 4,
    thumbnailImageUrl:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    continent: 'JP',
  },
];

const cityNameList = [
  {
    id: 'tokyo',
    value: '도쿄',
  },
  {
    id: 'osaka',
    value: '오사카',
  },
];

export default function PopularCityPage({
  params,
}: {
  params: { city: string };
}) {
  // TODO 여행지 이름 목록 가져오기
  return (
    <div className='max-w-7xl flex flex-col gap-[60px] items-center my-0 mx-auto'>
      {/* banner image */}
      <section className='w-full h-60 relative'>
        <Image
          className='object-cover'
          src='https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          fill
          alt='같이행'
        />
      </section>
      <section className='w-full'>
        <h1 className='text-headline-04 text-nutral-black-01'>
          {cityNameList.find((el) => el.id === params.city)?.value} 동행 같이행
        </h1>
        <section className='mt-3 mb-5'>
          <button
            type='button'
            className='py-1 pl-1.5 pr-2 rounded-[20px] bg-nutral-white-01 text-nutral-black-03 border border-nutral-white-03 transition text-subtitle-02 flex items-center justify-center gap-1'
          >
            <FilterIcon width={20} height={20} fill='#737373' />
            필터
          </button>
        </section>
        <section className='w-full h-full mb-[120px]'>
          <ul className='flex flex-wrap gap-5'>
            {accompanyList.map((accompany) => (
              <li key={accompany.id}>
                <WhCard
                  status={accompany.status}
                  profileImageUrl={accompany.profileImageUrl}
                  nickname={accompany.nickname}
                  title={accompany.title}
                  tags={accompany.tags}
                  startTripDate={accompany.startTripDate}
                  endTripDate={accompany.endTripDate}
                  accompanyCnt={accompany.accompanyCnt}
                  accompaniedCnt={accompany.accompaniedCnt}
                  thumbnailImageUrl={accompany.thumbnailImageUrl}
                />
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
}
