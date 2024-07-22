import Image from 'next/image';
import { useState } from 'react';
import detailList from '../../../data';
import SampleProfile from '../../../../public/assets/images/profile.png';
import WhProfile from '../WhProfile';
import WhModal from '../modal/WhModal';
import WhModalHeader from '../modal/WhModalHeader';
import WhModalButtonList from '../modal/WhModalButtonList';

const titleCss = 'text-nutral-black-01 text-headline-04 mt-[60px] mb-5';
const replyInputWrapCss =
  'w-[807px] flex justify-between items-center mt-3 py-2 px-4 border border-nutral-white-03 rounded placeholder:text-nutral-white-04';
const replyInputCss =
  'min-w-[700px] placeholder:text-nutral-white-04 placeholder:text-body-02 outline-0';

export default function WhReplyContent() {
  const [profileInfo, setProfileInfo] = useState({
    lookMore: false,
    showProfile: false,
    modalConfig: {
      isOpen: false,
      title: '',
      message: '',
    },
  });

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

  const handleMoreClick = () => {
    setProfileInfo((prevState) => ({
      ...prevState,
      lookMore: !prevState.lookMore,
    }));
  };

  const handleLikeClick = () => {
    setProfileInfo((prevState) => ({
      ...prevState,
      modalConfig: {
        isOpen: true,
        title: `😍 '${itemList.nick}'의 매너는 Good!`,
        message: '이용자의 매너 점수를 올렸어요',
      },
    }));
  };

  const handleHateClick = () => {
    setProfileInfo((prevState) => ({
      ...prevState,
      modalConfig: {
        isOpen: true,
        title: `😱 '${itemList.nick}'의 매너는 Bad..`,
        message: '이용자의 매너 점수를 내렸어요',
      },
    }));
  };

  const onClose = () => {
    setProfileInfo((prevState) => ({
      ...prevState,
      modalConfig: {
        ...prevState.modalConfig,
        isOpen: false,
      },
    }));
  };

  const showProfile = (show: boolean) => {
    setProfileInfo((prevState) => ({
      ...prevState,
      showProfile: show,
    }));
  };

  return (
    <div className='px-5'>
      <h2 className={titleCss}>
        댓글&nbsp;<span className='text-primary-main'>N</span>
      </h2>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-5'>
          <div
            onMouseEnter={() => showProfile(true)}
            onMouseLeave={() => showProfile(false)}
          >
            <Image
              className='inline object-cover rounded-full h-full'
              src={detailList.profileImageUrl}
              width={48}
              height={48}
              alt='프로필 이미지'
            />
            {profileInfo.showProfile && (
              <div className='absolute ml-[175px] mt-[-144px]'>
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
              </div>
            )}
          </div>

          <div>
            <p className='text-nutral-black-02 text-Subtitle-01'>
              도쿄피플도쿄피플
            </p>
            <p className='text-caption-01 text-black-04 mt-[5px]'>1시간 전</p>
          </div>
        </div>
        <div
          className={`flex items-center max-w-[735px] ${profileInfo.lookMore ? 'flex-wrap' : ''}`}
        >
          <p
            className={`text-body-02 text-nutral-black-03 ${!profileInfo.lookMore && 'truncate'}`}
          >
            {detailList.content}
          </p>
          <button
            type='button'
            onClick={handleMoreClick}
            className={`text-nutral-black-05 ${!profileInfo.lookMore && 'w-4/5'}`}
          >
            {profileInfo.lookMore ? '접기' : '더보기'}
          </button>
        </div>
        <div className={replyInputWrapCss}>
          <input
            placeholder='답글을 입력해주세요. (최대 100자)'
            className={replyInputCss}
          />
          <button type='button' className='text-subtitle-02 text-primary-main'>
            댓글남기기
          </button>
        </div>

        {/* reply */}
        <div className='flex items-center gap-5 mt-10'>
          <Image
            className='inline object-cover rounded-full h-full'
            src={detailList.profileImageUrl}
            width={48}
            height={48}
            alt='프로필 이미지'
          />
          <div>
            <p className='text-nutral-black-02 text-Subtitle-01'>다른 게스트</p>
            <p className='text-caption-01 text-black-04 mt-[5px]'>1시간 전</p>
          </div>
        </div>
        <div
          className={`flex items-center max-w-[735px] ${profileInfo.lookMore ? 'flex-wrap' : ''}`}
        >
          <p
            className={`text-body-02 text-nutral-black-03 ${!profileInfo.lookMore && 'truncate'}`}
          >
            {detailList.content}
          </p>
          <button
            type='button'
            onClick={handleMoreClick}
            className={`text-nutral-black-05 ${!profileInfo.lookMore && 'w-4/5'}`}
          >
            {profileInfo.lookMore ? '접기' : '더보기'}
          </button>
        </div>
        <p className='text-caption-01 text-primary-main'>답글달기</p>
      </div>

      <WhModal
        isOpen={profileInfo.modalConfig.isOpen}
        onClose={onClose}
        isDismissible={false}
        className='px-[76px] py-12'
      >
        <WhModalHeader>{profileInfo.modalConfig.title}</WhModalHeader>
        <div className='mt-10 text-center mb-12'>
          <p className='text-nutral-black-04 text-body-02'>
            {profileInfo.modalConfig.message}
          </p>
        </div>
        <WhModalButtonList onClick={onClose} label='확인' />
      </WhModal>
    </div>
  );
}
