'use client';

import Image from 'next/image';
import { useState } from 'react';
import WhButton from '../WhButton';
import { CheckIcon, Close20Icon } from '../../../../public/assets/icons/menu';
import WhModal from '../modal/WhModal';
import WhModalHeader from '../modal/WhModalHeader';
import WhModalButtonList from '../modal/WhModalButtonList';
import useModal from '../modal/useModal';
import SampleProfile from '../../../../public/assets/images/profile.png';

const requestCss = 'flex gap-1 items-center mt-3';

export default function WhAccompanyRequestInfo() {
  const { isOpen, onOpen, onClose } = useModal();
  const [modalType, setModalType] = useState('');
  const [selectedNickname, setSelectedNickname] = useState('');

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
    profileImageUrl: SampleProfile,
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
        score: '36.5',
        profileImageUrl: SampleProfile,
        nickname: '도쿄피플2',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: null,
        startTripDate: '2024-03-15',
        endTripDate: '2024-03-16',
        accompanyCnt: 3,
        accompaniedCnt: 1,
        thumbnailImageUrl: SampleProfile,
      },
      {
        host: true,
        id: 1,
        age: '30대',
        status: 'joining',
        gender: '여성',
        period: '1년 11개월',
        score: '36.5',
        profileImageUrl: SampleProfile,
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
        score: '36.5',
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
        score: '36.5',
        profileImageUrl: SampleProfile,
        nickname: '도쿄피플5',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: ['태그 1', '태그 2', '태그 3'],
        startTripDate: '2024-08-15',
        endTripDate: '2024-08-16',
        accompanyCnt: 4,
        accompaniedCnt: 4,
        thumbnailImageUrl: SampleProfile,
      },

      {
        host: false,
        id: 2,
        status: 'accompanied',
        gender: '여성',
        period: '1년 11개월',
        score: '36.5',
        profileImageUrl: SampleProfile,
        nickname: '도쿄피플',
        title:
          '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
        tags: ['태그 1', '태그 2', '태그 3'],
        startTripDate: '2024-08-15',
        endTripDate: '2024-08-16',
        accompanyCnt: 4,
        accompaniedCnt: 4,
        thumbnailImageUrl: SampleProfile,
      },
    ],
  };

  const isHost = false;

  const handleOpenModal = (type: string, nickname: string) => {
    setModalType(type);
    setSelectedNickname(nickname);
    onOpen();
  };

  return (
    <div className='w-[393px]'>
      <h3 className='mb-3 text-subtitle-01'>
        {isHost ? '동행장' : `승인 요청 리스트 ${detailList.itemList.length}`}
      </h3>
      <div className='max-h-[412px] overflow-scroll'>
        {detailList.itemList.map((accompany) => (
          <div
            className=' overflow-auto pt-8 px-5 bg-nutral-white-02 rounded'
            key={accompany.nickname}
          >
            <div
              className={`flex gap-5 border-b border-b-nutral-white-03 px-3 pb-5 ${accompany.status !== 'joining' && accompany.status !== 'joined' ? `opacity-70` : 'null'} `}
            >
              <Image
                className='object-cover rounded-full h-full'
                src={accompany.profileImageUrl}
                width={48}
                height={48}
                alt='프로필 이미지'
              />
              <div>
                <p className='text-nutral-black-02 text-subtitle-01 mb-[5px]'>
                  {accompany.nickname}
                  <span className='ml-3 py-[2px] px-2 w-[43px] h-6 rounded-xl border border-primary-main text-primary-main text-subtitle-02'>
                    {accompany.score}
                  </span>
                </p>
                <p className='text-nutral-black-04 text-caption-01'>
                  {accompany.age} &nbsp;∙&nbsp; {accompany.gender}
                  &nbsp;∙&nbsp;{accompany.period}
                </p>

                {isHost ? (
                  ''
                ) : (
                  <>
                    <div>
                      {accompany.status === 'joining' && (
                        <div className='flex gap-[10px] mt-3'>
                          <WhButton
                            fitContent
                            size='sm'
                            onClick={() =>
                              handleOpenModal('cancel', accompany.nickname)
                            }
                            outLine
                          >
                            취소
                          </WhButton>
                          <WhButton
                            fitContent
                            size='sm'
                            onClick={() =>
                              handleOpenModal('approve', accompany.nickname)
                            }
                          >
                            승인
                          </WhButton>
                        </div>
                      )}
                      {accompany.status === 'joined' && (
                        <div className={requestCss}>
                          <CheckIcon width={20} height={20} stroke='#36C304' />
                          <span className='text-caption-success text-body-03 mt-1'>
                            승인하셨습니다. 벌써 기대가 되네요!
                          </span>
                        </div>
                      )}
                      {accompany.status !== 'joining' &&
                        accompany.status !== 'joined' && (
                          <div className={requestCss}>
                            <Close20Icon stroke='#2b1917' />
                            <span className='text-caption-main  text-body-03 mt-1'>
                              동행이 취소됐습니다.
                            </span>
                          </div>
                        )}
                    </div>

                    <WhModal
                      isOpen={isOpen && modalType === 'approve'}
                      onClose={onClose}
                      isDismissible={false}
                    >
                      <WhModalHeader>
                        {selectedNickname}님의 동행을 승인할까요?
                      </WhModalHeader>
                      <div className='mt-10 text-center mb-12'>
                        <p className='text-nutral-black-04  text-body-02'>
                          승인한 후에는 취소가 불가능해요.
                        </p>
                      </div>

                      <WhModalButtonList
                        leftLabel='아니오'
                        onClick={onClose}
                        label='네, 동행을 승인할게요.'
                      />
                    </WhModal>
                    <WhModal
                      isOpen={isOpen && modalType === 'cancel'}
                      onClose={onClose}
                      isDismissible={false}
                    >
                      <WhModalHeader>
                        {selectedNickname}님의 동행을 취소할까요?
                      </WhModalHeader>
                      <div className='mt-10 text-center mb-12'>
                        <p className='text-nutral-black-04 text-body-02'>
                          취소한 후에는 다시 되돌릴 수 없습니다.
                        </p>
                      </div>
                      <WhModalButtonList
                        leftLabel='아니오'
                        onClick={onClose}
                        label='네, 동행을 취소할게요.'
                      />
                    </WhModal>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <WhButton size='md' onClick={() => {}}>
        동행 확정
      </WhButton>
    </div>
  );
}
