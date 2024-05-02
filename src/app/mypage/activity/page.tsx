'use client';

import WhBadge from '@/components/elements/WhBadge';
import WhButton from '@/components/elements/WhButton';
import WhCard from '@/components/elements/WhCard';
import WhMypageCard from '@/components/elements/mypage/WhMypageCard';
import WhMypageHeader from '@/components/elements/mypage/WhMypageHeader';
import WhMypageProgressBar from '@/components/elements/mypage/WhMypageProgressBar';
import { useState } from 'react';

const badgeContainerCss =
  'bg-nutral-white-02 py-[3.75rem] px-[4.375rem] rounded max-h-[37.5rem] overflow-scroll h-[61rem] grid grid-cols-3 gap-12';

const badgeList = [
  {
    name: 'continuous_attendance_1day',
    value: '연속 출석 1일',
  },
  {
    name: 'continuous_attendance_7days',
    value: '연속 출석 7일',
  },
  {
    name: 'continuous_attendance_30days',
    value: '연속 출석 30일',
  },
  {
    name: 'continuous_attendance_100days',
    value: '연속 출석 100일',
  },
  {
    name: 'accompany_once',
    value: '동행 참여 1회',
  },
  {
    name: 'accompany_7times',
    value: '동행 참여 7회',
  },
  {
    name: 'accompany_30times',
    value: '동행 참여 30회',
  },
  {
    name: 'lock',
    value: '동행 성공 100회',
  },
];

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

const tabList = [
  { id: 'tab1', title: '동행 준비' },
  { id: 'tab2', title: '동행 완료' },
];
export default function Activity() {
  const [selectedTab, setSelectedTab] = useState('tab1');

  const changeTab = (tabId) => {
    setSelectedTab(tabId);
  };

  return (
    <div className='flex flex-col gap-10'>
      <WhMypageHeader title='내 활동' />

      <WhMypageCard title='매너 점수 & 나의 배지'>
        <div className='flex gap-3 items-center'>
          <h4 className='text-subtitle-01 text-neutral-black-02'>
            나의 매너 점수
          </h4>
          <p className='text-nutral-black-04 text-body-03'>
            잘 하고 있어요!&nbsp;
            <span className='text-primary-main'>13.5점</span>만 높이면&nbsp;
            <span className='text-secondary-main'>인증마크</span>를 받을 수
            있어요.
          </p>
        </div>
        <WhMypageProgressBar />

        <div className='flex gap-3 mt-8'>
          <h4 className='text-subtitle-01 text-neutral-black-02'>나의 배지</h4>
          <p className='text-nutral-black-04 text-subtitle-02'>
            <span className='text-primary-main text-body-03'>
              {badgeList.length}
            </span>
            / 12
          </p>
        </div>

        <p className='text-nutral-black-04 text-body-03 mb-5 mt-[.5625rem]'>
          동행 상대가 보내준 나의 점수와 서비스를 통해 얻은 나의 배지를 확인 할
          수 있어요.
        </p>

        <section className={`${badgeContainerCss}`}>
          {badgeList.map((item) => (
            <div className='flex flex-col gap-4 items-center'>
              <WhBadge key={item.name} name={item.name} />
              <span className='text-subtitle-01 text-nutral-black-02'>
                {item.value}
              </span>
            </div>
          ))}
        </section>
      </WhMypageCard>
      <WhMypageCard title='동행 내역'>
        <div className='my-8 flex gap-7 text-headline-04'>
          {tabList.map((tab) => (
            <button
              key={tab.id}
              type='button'
              onClick={() => changeTab(tab.id)}
              className={`${
                selectedTab === tab.id
                  ? ' text-nutral-black-02'
                  : ' text-nutral-white-04'
              } `}
            >
              {tab.title}

              {selectedTab === 'tab1'
                ? accompanyList.filter(
                    (item) =>
                      item.status === 'joining' || item.status === 'joined'
                  ).length
                : accompanyList.filter((item) => item.status === 'accompanied')
                    .length}
            </button>
          ))}
        </div>

        <div className='bg-nutral-white-02 rounded'>
          <div className='px-10 pt-6 pb-8'>
            {selectedTab === 'tab1' &&
              (accompanyList.length > 0 ? (
                accompanyList
                  .filter((item) => item.status === 'joining')
                  .map((accompany) => (
                    <WhCard
                      key={accompany.id}
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
                  ))
              ) : (
                <div className='flex justify-center flex-col items-center py-20'>
                  <div>
                    <p className='text-nutral-black-05 text-subtitle-02 text-center mb-3'>
                      {selectedTab === 'tab1' ? '진행 중' : '완료한'}
                      동행이 없어요. <br />
                      동행할 콘텐츠를 찾아볼까요?
                    </p>
                    <WhButton size='md' onClick={() => {}}>
                      찾아보러 가기
                    </WhButton>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className='bg-nutral-white-02 rounded'>
          {selectedTab === 'tab2' &&
            (accompanyList.length > 0 ? (
              accompanyList
                .filter((item) => item.status === 'joined')
                .map((accompany) => (
                  <WhCard
                    key={accompany.id}
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
                ))
            ) : (
              <div className='flex justify-center flex-col items-center py-20'>
                <div>
                  <p className='text-nutral-black-05 text-subtitle-02 text-center mb-3'>
                    {selectedTab === 'tab2' ? '진행 중' : '완료한'}
                    동행이 없어요. <br />
                    동행할 콘텐츠를 찾아볼까요?
                  </p>
                  <WhButton size='md' onClick={() => {}}>
                    찾아보러 가기
                  </WhButton>
                </div>
              </div>
            ))}
        </div>
      </WhMypageCard>
    </div>
  );
}
