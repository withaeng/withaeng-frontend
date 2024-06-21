'use client';

import Image from 'next/image';
import WhDetailInfo from '@/components/elements/detailpage/WhDetailInfo';
import WhAccompanyRequestInfo from '@/components/elements/detailpage/WhAccompanyRequestInfo';
import WhCard from '@/components/elements/WhCard';



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
  </>;
  return (
    <>
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
    </>
  );
};

export default function DetailPage() {
  const detailList = {
    id: '0',
    thumbnailImageUrl: '/assets/images/thumbnailImageUrl.png',
    regist_at: '2024.12.12',
    view: 99,
    title: '호스트가 작성한 타이틀 노출',
    tags: [
      { id: 0, title: '태그0' },
      { id: 1, title: '태그1' },
      { id: 2, title: '태그2' },
    ],
    profileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    nickname: '도쿄피플1',
    name: '기묘림',
    score: '36.5',
    companions: 2,
    companionsCount: 3,
    wait: 3,
    location: '일본, 교토',
    review: 3,
    period: '24.03.21 ~ 24.03.24 (3박)',
    nick: '기묘림',
    introduce: '안녕하세요. 잘 부탁 드립니다.',
    sex: '여성',
    age: '누구나',
    birth: '2024.04.11',
    gender: '여성만',
    link: 'opentalklink.com//1231421 ',
    content:
      'Lorem ipsum dolor sit amet consectetur. Ultrices massa lobortis ac aliquet. Eget cras eget purus elementum eu dictum sem morbi. Id fermentum commodo proin magna nullam netus. Facilisis vehicula metus vitae pretium blandit. Feugiat nec justo tortor sed. Scelerisque ultricies ornare et donec tincidunt. Tincidunt massa sit augue iaculis ultricies. Diam quis gravida nunc at vulputate amet faucibus. Ante aliquam amet suscipit facilisi vehicula sed. Dui purus cursus risus auctor et pharetra auctor. Ullamcorper at at elit ipsum. Adipiscing eget nunc pellentesque eu tortor posuere sed. Quam viverra enim feugiat at duis aliquam arcu. Ultrices enim blandit sapien at aliquet lacus. Varius sed sociis in faucibus nulla lectus morbi ultrices. Pulvinar accumsan nunc euismod ac. Aenean sapien vel diam nascetur enim a amet eu nulla. Tempor aliquam nunc massa elit. Maecenas at nunc mattis arcu fermentum lobortis suspendisse. Nulla nulla condimentum nunc pretium ut auctor egestas cras. Luctus enim mi aenean et dictum ipsum. Rhoncus varius ultrices ullamcorper fames.',
    requestList: [{}, {}, {}],
    itemList: [
      {
        host: true,
        id: 0,
        age: '20대',
        status: 'joining',
        gender: '여성',
        period: '1년 11개월',

        profileImageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: '도쿄피플2',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: null,
        startTripDate: '2024-03-15',
        endTripDate: '2024-03-16',
        accompanyCnt: 3,
        accompaniedCnt: 1,
        thumbnailImageUrl:
          'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        host: true,
        id: 1,
        age: '30대',
        status: 'joining',
        gender: '여성',
        period: '1년 11개월',

        profileImageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: '도쿄피플3',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: null,
        startTripDate: '2024-03-15',
        endTripDate: '2024-03-16',
        accompanyCnt: 3,
        accompaniedCnt: 1,
        thumbnailImageUrl:
          'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
      },
      {
        host: false,
        id: 2,
        age: '30대',
        status: 'joined',
        gender: '남성',
        period: '1년 11개월',

        profileImageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: '도쿄피플4',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: null,
        startTripDate: '30일',
        endTripDate: '2024-07-16',
        accompanyCnt: 4,
        accompaniedCnt: 2,
        thumbnailImageUrl:
          'https://images.unsplash.com/photo-1601699233172-1bb3354b845b?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
      {
        host: true,
        id: 2,
        age: '30대',
        status: 'accompanied',
        gender: '남성',

        period: '1년 11개월',

        profileImageUrl:
          'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        nickname: '도쿄피플5',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: ['태그 1', '태그 2', '태그 3'],
        startTripDate: '2024-08-15',
        endTripDate: '2024-08-16',
        accompanyCnt: 4,
        accompaniedCnt: 4,
        thumbnailImageUrl:
          'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },

      {
        host: false,
        id: 2,
        status: 'accompanied',
        gender: '여성',
        period: '1년 11개월',

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
      },
    ],
  };

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
      <div className=''>
        <h2 className={titleCss}>추천 동행 게시글</h2>

        <section className='w-full h-full mb-[120px]'>
          <ul className='flex flex-wrap gap-5'>{showAccompanyList()}</ul>
        </section>
      </div>
    </div>
  );
}
