'use client';

import WhProfile from '@/components/elements/WhProfile';
import SampleProfile from '../../../../public/assets/images/profile.png';
import { useState } from 'react';
import Image from 'next/image';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';


export default function Page() {
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
    console.log('Like click');
    setIsLikeModalOpen(true);
  };

  const handleHateClick = () => {
    console.log('Hate click');
    setIsHateModalOpen(true)
  };

  const onClose = () => {
    setIsLikeModalOpen(false);
    setIsHateModalOpen(false);
  };

  const [isHover, setIsHover] = useState(false);
  const [isLikeModalOpen, setIsLikeModalOpen] = useState(false);
  const [isHateModalOpen, setIsHateModalOpen] = useState(false);

  return (
    <div className='flex my-[200px] items-center justify-center m-auto'>
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Image
          src={SampleProfile}
          width={56}
          height={56}
          alt='샘플프로필 이미지'
          className='hover:cursor-pointer'
        />
        {isHover && (
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
        )}
      </div>
    <WhModal
    isOpen={isLikeModalOpen}
    onClose={onClose}
    isDismissible={false}
    className='px-[79.5px] py-12'
  >
    <WhModalHeader>
      😍 '{itemList.nick}'의 매너는 Good!
    </WhModalHeader>
    <div className='mt-10 text-center mb-12'>
      <p className='text-nutral-black-04  text-body-02'>
        이용자의 매너 점수를 올렸어요
      </p>
    </div>
    <WhModalButtonList onClick={onClose} label='확인' />

  </WhModal>

  <WhModal
    isOpen={isHateModalOpen}
    onClose={onClose}
    isDismissible={false}
    className='px-[79.5px] py-12'
  >
    <WhModalHeader>
      😱 '{itemList.nick}'의 매너는 Bad..
    </WhModalHeader>
    <div className='mt-10 text-center mb-12'>
      <p className='text-nutral-black-04  text-body-02'>
        이용자의 매너 점수를 내렸어요
      </p>
    </div>
    <WhModalButtonList onClick={onClose} label='확인' />

  </WhModal>
    </div>
  );
}
