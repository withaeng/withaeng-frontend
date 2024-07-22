'use client';

import WhProfile from '@/components/elements/WhProfile';
import { useState } from 'react';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import SampleProfile from '../../../../public/assets/images/profile.png';

export default function Page() {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
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

  const handleLikeClick = () => {
    setModalConfig({
      isOpen: true,
      title: `😍 '${itemList.nick}'의 매너는 Good!`,
      message: '이용자의 매너 점수를 올렸어요',
    });
  };

  const handleHateClick = () => {
    console.log('Hate click');
    setModalConfig({
      isOpen: true,
      title: `😱 '${itemList.nick}'의 매너는 Bad..`,
      message: '이용자의 매너 점수를 내렸어요',
    });
  };

  const onClose = () => {
    setModalConfig({
      ...modalConfig,
      isOpen: false,
    });
  };

  return (
    <div className='flex my-[200px] items-center justify-center m-auto'>
      <div className=''>
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
      <WhModal
        isOpen={modalConfig.isOpen}
        onClose={onClose}
        isDismissible={false}
        className='px-[76px] py-12'
      >
        <WhModalHeader>{modalConfig.title}</WhModalHeader>
        <div className='mt-10 text-center mb-12'>
          <p className='text-nutral-black-04  text-body-02'>
            {modalConfig.message}
          </p>
        </div>
        <WhModalButtonList onClick={onClose} label='확인' />
      </WhModal>
    </div>
  );
}
