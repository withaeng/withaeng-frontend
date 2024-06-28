'use client';

import Image from 'next/image';
import WhDetailInfo from '@/components/elements/detailpage/WhDetailInfo';
import WhAccompanyRequestInfo from '@/components/elements/detailpage/WhAccompanyRequestInfo';
import WhCard from '@/components/elements/WhCard';
import detailList from '@/data';

const titleCss = 'text-nutral-black-01 text-headline-04 mt-[60px] mb-5';

const accompanyList = [
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
    continent: 'EU',
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
    continent: 'SEA',
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
    continent: 'NA',
  },
];

const showAccompanyList = () => {
  <>
    {accompanyList.map((accompany) => (
      <li key={`${accompany.id}-${accompany.nickname}`}>
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
  </>;
  return (
    <>
      {accompanyList.map((accompany) => (
        <li key={`${accompany.id}-${accompany.nickname}`}>
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
    </>
  );
};

export default function DetailPage() {
  return (
    <div className='flex flex-col items-center'>
      <Image
        src={detailList.thumbnailImageUrl}
        width={1280}
        height={460}
        alt='profile-image'
      />
      <div className='flex gap-5 my-5'>
        {/* left */}
        <WhDetailInfo />

        {/* right */}
        <WhAccompanyRequestInfo />
      </div>

      {/* 추천 동행 게시글 */}
      <div>
        <h2 className={titleCss}>추천 동행 게시글</h2>
        <section className='w-full h-full mb-[120px]'>
          <ul className='flex flex-wrap gap-5'>{showAccompanyList()}</ul>
        </section>
      </div>
    </div>
  );
}
