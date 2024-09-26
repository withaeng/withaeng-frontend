'use client';

import Image from 'next/image';
import { useState } from 'react';
import WhButton from '../WhButton';
import { CheckIcon, Close20Icon } from '../../../../public/assets/icons/menu';
import WhModal from '../modal/WhModal';
import WhModalHeader from '../modal/WhModalHeader';
import WhModalButtonList from '../modal/WhModalButtonList';
import useModal from '../modal/useModal';
import detailList from '../../../data';
import WhChip from '../WhChip';
import WhProfile from '../WhProfile';
import SampleProfile from '../../../../public/assets/images/profile.png';
import { ArrowIcon } from '../../../../public/assets/icons/arrow';

const requestCss = 'flex gap-1 items-center mt-3';

const itemList = {
  id: '0',
  score: 51.5,
  review: 3,
  period: '1년 11개월',
  nick: '솔솔솔',
  age: 20,
  gender: '여성',
  profileImage: SampleProfile,
};

export default function WhAccompanyRequestInfo() {
  const { isOpen, onOpen, onClose } = useModal();
  const [modalType, setModalType] = useState('');
  const [selectedNickname, setSelectedNickname] = useState('');
  const [lookMore, setLookMore] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [isListOpen, setIsListOpen] = useState(true);
  const isHost = false;
  const isWait = true;

  const toggleListVisibility = () => setIsListOpen((prev) => !prev);

  const handleOpenModal = (type: string, nickname: string) => {
    setModalType(type);
    setSelectedNickname(nickname);
    onOpen();
  };

  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: '', // 'profile' or 'feedback'
    title: '',
    message: '',
  });

  const handleLikeClick = () => {
    setModalConfig({
      isOpen: true,
      type: 'feedback',
      title: `😍 '${itemList.nick}'의 매너는 Good!`,
      message: '이용자의 매너 점수를 올렸어요',
    });
  };

  const handleHateClick = () => {
    setModalConfig({
      isOpen: true,
      type: 'feedback',
      title: `😱 '${itemList.nick}'의 매너는 Bad..`,
      message: '이용자의 매너 점수를 내렸어요',
    });
  };

  const closeModal = () => {
    setModalConfig({
      ...modalConfig,
      isOpen: false,
    });
  };

  const handleMoreClick = () => {
    setLookMore(!lookMore);
  };

  const handleProfileClick = () => {
    setModalConfig({
      isOpen: true,
      type: 'profile',
      title: '',
      message: '',
    });

    setShowProfileModal(!showProfileModal);
  };

  return (
    <div className='w-[393px] max-xl:mt-5 max-xl:w-full'>
      <div className='flex justify-between pr-4'>
        <h3 className='mb-3 text-subtitle-01 max-xl:px-4'>
          {isHost ? '동행장' : `승인 요청 리스트`}
          <span className='text-primary-main'>
            &nbsp;{detailList.itemList.length}
          </span>
        </h3>
        <ArrowIcon
          className={`transform cursor-pointer transition-transform duration-300 xl:hidden ${
            isListOpen ? 'rotate-180' : 'rotate-0'
          }`}
          onClick={toggleListVisibility}
        />
      </div>

      {isListOpen && (
        <div className='max-h-[412px]'>
          {isHost ? (
            <div className='max-h-[412px] overflow-scroll'>
              <div className='overflow-auto rounded bg-nutral-white-02 px-5 pt-8'>
                <div className='flex gap-5 border-b border-b-nutral-white-03 px-3 pb-5'>
                  <Image
                    className='h-full cursor-pointer rounded-full object-cover'
                    src={
                      detailList.host.profileImageUrl
                        ? detailList.host.profileImageUrl
                        : '/default-profile.png'
                    }
                    width={48}
                    height={48}
                    alt='프로필 이미지'
                    onClick={handleProfileClick}
                  />
                  <div>
                    <p className='mb-[7px] text-subtitle-01 text-nutral-black-02'>
                      {detailList.host.nick}
                      <span className='ml-3 h-6 w-[43px] rounded-xl border border-primary-main px-2 py-[2px] text-subtitle-02 text-primary-main'>
                        {detailList.host.score}
                      </span>
                    </p>
                    <p className='text-caption-01 text-nutral-black-04'>
                      {detailList.host.age} &nbsp;∙&nbsp; {detailList.host.sex}
                      &nbsp;∙&nbsp;{detailList.host.period}
                    </p>

                    {/* content */}
                    <div
                      className={`mt-3 max-w-[261px] ${lookMore ? 'flex-wrap' : ''}`}
                    >
                      <p
                        className={`text-body-03 text-nutral-black-03 ${!lookMore && 'truncate'}`}
                      >
                        {detailList.content}
                      </p>
                      <button
                        type='button'
                        onClick={handleMoreClick}
                        className='text-body-03 text-nutral-black-05'
                      >
                        {lookMore ? '접기' : '더보기'}
                      </button>
                    </div>

                    {isHost ? (
                      <WhModal
                        isOpen={isOpen}
                        onClose={onClose}
                        isDismissible={false}
                        className='flex flex-col justify-between px-4 py-5 xl:px-[84px] xl:py-[72px]'
                      >
                        {isWait ? (
                          <>
                            <WhModalHeader>
                              동행에 참가하시겠어요?`
                            </WhModalHeader>
                            <div className='mb-12 mt-10 text-center'>
                              <p className='text-body-02 text-nutral-black-04'>
                                멋진 동행이 되길 기대할게요~!!
                                <br />
                                호스트의 승인 후, 취소 시 감점이 부과돼요.
                              </p>
                            </div>
                            <WhModalButtonList
                              leftLabel='아니오'
                              onClick={onClose}
                              label='네, 동행을 참가할게요.'
                            />
                          </>
                        ) : (
                          <>
                            <WhModalHeader>
                              동행 참가를 취소하시겠습니까?
                            </WhModalHeader>
                            <div className='mb-12 mt-10 text-center'>
                              <p className='mb-6 text-body-02 text-nutral-black-04'>
                                승인된 동행을 취소하시면 매너 점수가 감점됩니다.
                                <br />
                                그래도 동행 참가를 취소하시겠습니까?
                              </p>

                              <p className='text-body-03 text-caption-light'>
                                매너 점수 감점 패널티 정보 (여행 시작일 기준)
                              </p>

                              <ul>
                                <li>7일 전 : -0.1 점 감점 </li>
                                <li>3일 전 : -0.5 점 감점</li>
                                <li>1일 전 : -1 점 감점</li>
                              </ul>
                            </div>
                            <WhModalButtonList
                              leftLabel='아니오'
                              onClick={onClose}
                              label='동행 참가 취소하겠습니다.'
                            />
                          </>
                        )}
                      </WhModal>
                    ) : (
                      <>
                        <div>
                          {accompany.status === 'joining' && (
                            <div className='mt-3 flex gap-[10px]'>
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
                              <CheckIcon
                                width={20}
                                height={20}
                                stroke='#36C304'
                              />
                              <span className='mt-1 text-body-03 text-caption-success'>
                                승인하셨습니다. 벌써 기대가 되네요!
                              </span>
                            </div>
                          )}
                          {accompany.status !== 'joining' &&
                            accompany.status !== 'joined' && (
                              <div className={requestCss}>
                                <Close20Icon stroke='#2b1917' />
                                <span className='mt-1 text-body-03 text-caption-main'>
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
                          <div className='mb-12 mt-10 text-center'>
                            <p className='text-body-02 text-nutral-black-04'>
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
                          <div className='mb-12 mt-10 text-center'>
                            <p className='text-body-02 text-nutral-black-04'>
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

                {/* modal */}
                {modalConfig.isOpen && modalConfig.type === 'profile' && (
                  <WhModal
                    isOpen={modalConfig.isOpen}
                    onClose={closeModal}
                    className='flex flex-col justify-between px-4 py-5 xl:px-[84px] xl:py-[72px]'
                    hideCloseButton
                  >
                    <WhProfile
                      profileImage={itemList.profileImage}
                      nick={itemList.nick}
                      age={itemList.age}
                      gender={itemList.gender}
                      score={itemList.score}
                      review={itemList.review}
                      period={itemList.period}
                      onLikeClick={handleLikeClick}
                      onHateClick={handleHateClick}
                    />
                  </WhModal>
                )}

                {modalConfig.isOpen && modalConfig.type === 'feedback' && (
                  <WhModal
                    isOpen={modalConfig.isOpen}
                    onClose={closeModal}
                    isDismissible={false}
                    className='flex flex-col justify-between px-4 py-5 xl:px-[84px] xl:py-[72px]'
                  >
                    <div>
                      <WhModalHeader>{modalConfig.title}</WhModalHeader>
                      <p className='mb-12 mt-10 text-center text-body-02 text-nutral-black-04'>
                        {modalConfig.message}
                      </p>
                    </div>
                    <WhModalButtonList onClick={closeModal} label='확인' />
                  </WhModal>
                )}
                <div className='flex flex-wrap gap-2 px-3 py-5'>
                  {detailList.host.tags.map((tag) => (
                    <WhChip key={tag.id}>{tag.title}</WhChip>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className='max-h-[412px] overflow-scroll'>
              {detailList.itemList.map((accompany) => (
                <div
                  className='overflow-auto rounded bg-nutral-white-02 px-5 pt-8'
                  key={`accompany.nickname-${accompany.id}`}
                >
                  <div
                    className={`flex gap-5 border-b border-b-nutral-white-03 px-3 pb-5 ${accompany.status !== 'joining' && accompany.status !== 'joined' ? `opacity-20` : 'null'} `}
                  >
                    <Image
                      className='h-full cursor-pointer rounded-full object-cover'
                      src={accompany.profileImageUrl}
                      width={48}
                      height={48}
                      alt='프로필 이미지'
                      onClick={handleProfileClick}
                    />
                    <div>
                      <p className='mb-[5px] text-subtitle-01 text-nutral-black-02'>
                        {accompany.nickname}
                        <span className='ml-3 h-6 w-[43px] rounded-xl border border-primary-main px-2 py-[2px] text-subtitle-02 text-primary-main'>
                          {accompany.score}
                        </span>
                      </p>
                      <p className='text-caption-01 text-nutral-black-04'>
                        {accompany.age} &nbsp;∙&nbsp; {accompany.gender}
                        &nbsp;∙&nbsp;{accompany.period}
                      </p>

                      {isHost ? (
                        ''
                      ) : (
                        <>
                          <div>
                            {accompany.status === 'joining' && (
                              <div className='mt-3 flex gap-[10px]'>
                                <WhButton
                                  fitContent
                                  size='sm'
                                  onClick={() =>
                                    handleOpenModal(
                                      'cancel',
                                      accompany.nickname
                                    )
                                  }
                                  outLine
                                >
                                  취소
                                </WhButton>
                                <WhButton
                                  fitContent
                                  size='sm'
                                  onClick={() =>
                                    handleOpenModal(
                                      'approve',
                                      accompany.nickname
                                    )
                                  }
                                >
                                  승인
                                </WhButton>
                              </div>
                            )}
                            {accompany.status === 'joined' && (
                              <div className={requestCss}>
                                <CheckIcon
                                  width={20}
                                  height={20}
                                  stroke='#36C304'
                                />
                                <span className='mt-1 text-body-03 text-caption-success'>
                                  승인하셨습니다. 벌써 기대가 되네요!
                                </span>
                              </div>
                            )}
                            {accompany.status !== 'joining' &&
                              accompany.status !== 'joined' && (
                                <div className={requestCss}>
                                  <Close20Icon stroke='#2b1917' />
                                  <span className='mt-1 text-body-03 text-caption-main'>
                                    동행이 취소됐습니다.
                                  </span>
                                </div>
                              )}
                          </div>

                          <WhModal
                            isOpen={isOpen && modalType === 'approve'}
                            onClose={onClose}
                            isDismissible={false}
                            className='flex flex-col justify-between px-4 py-5 xl:px-[84px] xl:py-[72px]'
                          >
                            <div>
                              <WhModalHeader>
                                {selectedNickname}님의 동행을 승인할까요?
                              </WhModalHeader>
                              <p className='mb-10 mt-5 text-center text-body-02 text-nutral-black-04'>
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
                            className='flex flex-col justify-between px-4 py-5 xl:px-[84px] xl:py-[72px]'
                          >
                            <div>
                              <WhModalHeader>
                                {selectedNickname}님의 동행을 취소할까요?
                              </WhModalHeader>
                              <p className='mb-10 mt-5 text-center text-body-02 text-nutral-black-04'>
                                취소한 후에는 선택 변경이 불가능해요.
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
          )}
          {isHost ? (
            <WhButton size='md' onClick={() => {}}>
              동행 참가 신청
            </WhButton>
          ) : (
            <WhButton size='md' onClick={() => {}}>
              동행 확정
            </WhButton>
          )}
        </div>
      )}
    </div>
  );
}
