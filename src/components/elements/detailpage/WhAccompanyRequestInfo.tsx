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

const requestCss = 'flex gap-1 items-center mt-3';

export default function WhAccompanyRequestInfo() {
  const { isOpen, onOpen, onClose } = useModal();
  const [modalType, setModalType] = useState('');
  const [selectedNickname, setSelectedNickname] = useState('');
  const [lookMore, setLookMore] = useState(false);

  const isHost = false;

  const handleOpenModal = (type: string, nickname: string) => {
    setModalType(type);
    setSelectedNickname(nickname);
    onOpen();
  };

  const handleMoreClick = () => {
    setLookMore(!lookMore);
  };

  return (
    <div className='w-[393px]'>
      <h3 className='mb-3 text-subtitle-01'>
        {isHost ? '동행장' : `승인 요청 리스트 ${detailList.itemList.length}`}
      </h3>
      {isHost ? (
        <div className='max-h-[412px] overflow-scroll'>
          <div className=' overflow-auto pt-8 px-5 bg-nutral-white-02 rounded'>
            <div className='flex gap-5 border-b border-b-nutral-white-03 px-3 pb-5'>
              <Image
                className='object-cover rounded-full h-full'
                src={detailList.host.profileImageUrl}
                width={48}
                height={48}
                alt='프로필 이미지'
              />
              <div>
                <p className='text-nutral-black-02 text-subtitle-01 mb-[5px]'>
                  {detailList.host.nick}
                  <span className='ml-3 py-[2px] px-2 w-[43px] h-6 rounded-xl border border-primary-main text-primary-main text-subtitle-02'>
                    {detailList.host.score}
                  </span>
                </p>
                <p className='text-nutral-black-04 text-caption-01'>
                  {detailList.host.age} &nbsp;∙&nbsp; {detailList.host.sex}
                  &nbsp;∙&nbsp;{detailList.host.period}
                </p>

                {/* content */}
                <div
                  className={`max-w-[261px] mt-3  ${lookMore ? 'flex-wrap' : ''}`}
                >
                  <p
                    className={`text-body-03 text-nutral-black-03  ${!lookMore && 'truncate'}`}
                  >
                    {detailList.content}
                  </p>
                  <button
                    type='button'
                    onClick={handleMoreClick}
                    className='text-nutral-black-05 text-body-03'
                  >
                    {lookMore ? '접기' : '더보기'}
                  </button>
                </div>
                {/* 
                {isHost ? (
                  <WhModal
                    isOpen={isOpen}
                    onClose={onClose}
                    isDismissible={false}
                  >
                    <WhModalHeader>동행에 참가하시겠어요?</WhModalHeader>
                    <div className='mt-10 text-center mb-12'>
                      <p className='text-nutral-black-04 text-body-02'>
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
                  </WhModal>
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
                )} */}
              </div>
            </div>
            <div className='flex flex-wrap py-5 px-3 gap-2'>
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
              className=' overflow-auto pt-8 px-5 bg-nutral-white-02 rounded'
              key={`accompany.nickname-${accompany.id}`}
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
                            <CheckIcon
                              width={20}
                              height={20}
                              stroke='#36C304'
                            />
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
  );
}
