'use client';

import { useState } from 'react';
import WhBadge from '@/components/elements/WhBadge';
import WhButton from '@/components/elements/WhButton';
import WhCard from '@/components/elements/WhCard';
import WhTooltip from '@/components/elements/WhTooltip';
import { MannerArrowIcon } from '../../../../public/assets/icons/arrow';
import WhMypageHeader from '../(component)/WhMypageHeader';
import WhMypageCard from '../(component)/WhMypageCard';

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
  const filled = 36.5;

  const changeTab = (tabId: string) => {
    setSelectedTab(tabId);
  };

  return (
    <div className='flex flex-col gap-10'>
      <WhMypageHeader title='내 활동' />

      <WhMypageCard title='매너 점수 & 나의 배지'>
        <div className='flex items-center gap-3'>
          <h4 className='text-subtitle-01 text-neutral-black-02'>
            나의 매너 점수
          </h4>
          <div className='flex items-center text-nutral-black-04 text-body-03'>
            잘 하고 있어요!&nbsp;
            <span className='text-body-03 text-primary-main'>
              {50 - filled}
            </span>
            만 높이면&nbsp;
            <WhTooltip
              position='top'
              content='인증된 사용자는 보다 많은 사람들에게 믿음과 안정감을 줄 수 있어요.'
            >
              인증마크
            </WhTooltip>
            를 받을 수 있어요.
          </div>
        </div>

        <p className='text-body-03 text-nutral-black-05 mt-2    '>
          <span className=' text-nutral-black-04'>매너 점수란?&nbsp;</span>
          여러분이 더 안전하고 신뢰할 수 있는 환경에서 서비스를 이용할 수 있도록
          돕기 위해 마련되었습니다.
          <br />
          매너 점수를 높이기 위해서는 항상 성실하고 정중하게 행동해 주세요!
        </p>
        <div className='flex gap-3 items-center max-w-[586px] mt-6'>
          <span className='text-primary-main text-subtitle-01'>{filled}</span>

          <div className='w-[500px] rounded-2xl bg-nutral-white-02 h-6'>
            <div
              className='h-6 rounded-2xl bg-primary-main'
              style={{ width: `${filled}%` }}
            />
            <MannerArrowIcon className='ml-[172px] mt-[7px]' />
          </div>

          <span className='text-nutral-white-04 text-body-02'>100</span>
        </div>

        <div className='flex gap-3 mt-8'>
          <h4 className='text-subtitle-01 text-neutral-black-02'>나의 배지</h4>
          <p className='text-nutral-black-04 text-subtitle-02'>
            <span className='text-primary-main text-body-03'>
              {badgeList.length}&nbsp;
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
            <div className='flex flex-col items-center gap-4' key={item.value}>
              <WhBadge key={item.name} name={item.name} />
              <span className='text-subtitle-01 text-nutral-black-02'>
                {item.value}
              </span>
            </div>
          ))}
        </section>
      </WhMypageCard>
      <WhMypageCard title='동행 내역'>
        <div className='flex my-8 gap-7 text-subtitle-01'>
          {tabList.map((tab) => (
            <button
              key={tab.id}
              type='button'
              onClick={() => changeTab(tab.id)}
              className={`${
                selectedTab === tab.id
                  ? ' text-nutral-black-03'
                  : ' text-nutral-white-04'
              } `}
            >
              {tab.title}
              <span
                className={`ml-2 ${
                  selectedTab === tab.id
                    ? ' text-primary-main '
                    : ' text-nutral-white-04'
                } `}
              >
                {tab.id === 'tab1' &&
                  accompanyList.filter(
                    (item) =>
                      item.status === 'joining' || item.status === 'joined'
                  ).length}

                {tab.id === 'tab2' &&
                  accompanyList.filter((item) => item.status === 'accompanied')
                    .length}
              </span>
            </button>
          ))}
        </div>

        <div className='flex rounded bg-nutral-white-02'>
          {selectedTab === 'tab1' &&
            (accompanyList.length > 0 ? (
              accompanyList
                .filter(
                  (item) =>
                    item.status === 'joining' || item.status === 'joined'
                )
                .map((accompany) => (
                  <div className='px-5 pt-6 pb-8' key={accompany.id}>
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
                  </div>
                ))
            ) : (
              <div className='flex flex-col items-center justify-center py-20'>
                <div>
                  <p className='mb-3 text-center text-nutral-black-05 text-subtitle-02'>
                    {selectedTab === 'tab1' ? '진행 중인' : '완료한'}
                    &nbsp; 동행이 없어요. <br />
                    동행할 콘텐츠를 찾아볼까요?
                  </p>
                  <WhButton size='md' onClick={() => {}}>
                    찾아보러 가기
                  </WhButton>
                </div>
              </div>
            ))}
        </div>

        <div className='rounded bg-nutral-white-02'>
          {selectedTab === 'tab2' &&
            (accompanyList.length > 0 ? (
              accompanyList
                .filter((item) => item.status === 'accompanied')
                .map((accompany) => (
                  <div className='px-5 pt-6 pb-8' key={accompany.id}>
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
                  </div>
                ))
            ) : (
              <div className='flex flex-col items-center justify-center py-20'>
                <div>
                  <p className='mb-3 text-center text-nutral-black-05 text-subtitle-02'>
                    {selectedTab === 'tab2' ? '진행 중인' : '완료한'}
                    &nbsp; 동행이 없어요. <br />
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
