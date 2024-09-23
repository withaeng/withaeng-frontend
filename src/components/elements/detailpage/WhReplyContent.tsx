import Image from 'next/image';
import { useState } from 'react';
import detailList from '../../../data';
import SampleProfile from '../../../../public/assets/images/profile.png';
import WhProfile from '../WhProfile';
import WhModal from '../modal/WhModal';
import WhModalHeader from '../modal/WhModalHeader';
import WhModalButtonList from '../modal/WhModalButtonList';
import useModal from '../modal/useModal';

const titleCss = 'text-nutral-black-01 text-headline-04 mt-[60px] mb-5';

const replyInputWrapCss =
  'max-xl:w-full w-[807px] flex justify-between items-center mt-3 py-2 px-4 border border-nutral-white-03 rounded placeholder:text-nutral-white-04';

const replyInputCss =
  'max-xl:min-w-0 min-w-[700px] placeholder:text-nutral-white-04 placeholder:text-body-02 outline-0 ';

const moreLookTextCss = 'max-xl:text-body-03 text-nutral-black-05';

const replyContentCss = 'text-nutral-black-03 max-xl:text-body-03';

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

export default function WhReplyContent() {
  const [lookMore, setLookMore] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: '', // 'profile' or 'feedback'
    title: '',
    message: '',
  });
  const { isOpen, onOpen, onClose } = useModal();

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
  };

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

  return (
    <div className='relative'>
      <div className='px-5 max-xl:pl-4'>
        <h2 className={titleCss}>
          댓글&nbsp;<span className='text-primary-main'>N</span>
        </h2>

        {/* 모바일 때 보이는 댓글창 */}
        <div className={`${replyInputWrapCss} mb-10 xl:hidden`}>
          <input
            placeholder='답글을 입력해주세요. (최대 100자)'
            className={replyInputCss}
          />
          <button type='button' className='text-subtitle-02 text-primary-main'>
            댓글남기기
          </button>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-5'>
            <Image
              className='inline h-full cursor-pointer rounded-full object-cover'
              src={detailList.profileImageUrl}
              width={48}
              height={48}
              alt='프로필 이미지'
              onClick={handleProfileClick}
            />
            <div>
              <p className='text-Subtitle-01 text-nutral-black-02'>
                도쿄피플도쿄피플
              </p>
              <p className='text-black-04 mt-[5px] text-caption-01'>1시간 전</p>
            </div>
          </div>
          <div
            className={`flex max-w-[735px] items-center ${lookMore ? 'flex-wrap' : ''}`}
          >
            <p className={`${replyContentCss} ${!lookMore && 'truncate'}`}>
              {detailList.content}
            </p>
            <button
              type='button'
              onClick={handleMoreClick}
              className={`${moreLookTextCss} ${!lookMore && 'w-4/5'}`}
            >
              {lookMore ? '접기' : '더보기'}
            </button>
          </div>
        </div>

        {/* 댓글남기기  */}
        <div className={replyInputWrapCss}>
          <input
            placeholder='답글을 입력해주세요. (최대 100자)'
            className={replyInputCss}
          />
          <span className='text-subtitle-02 text-primary-main'>댓글남기기</span>
        </div>
      </div>

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
    </div>
  );
}
