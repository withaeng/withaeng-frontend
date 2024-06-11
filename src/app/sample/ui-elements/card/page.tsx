import WhCard from '@/components/elements/WhCard';

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
  },
  {
    id: 2,
    status: 'joined',
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
  },
  {
    id: 2,
    status: 'accompanied',
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
];

export default function Page() {
  return (
    <section className='flex gap-10 py-6 px-10 overflow-auto bg-nutral-white-02'>
      {accompanyList.map((accompany) => (
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
      ))}
    </section>
  );
}
