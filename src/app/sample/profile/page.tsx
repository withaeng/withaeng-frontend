'use client';

import WhProfile from '@/components/elements/WhProfile';
import SampleProfile from '../../../../public/assets/images/profile.png';
import { useState } from 'react';

export default function Page() {
  const itemList = {
    id: '0',
    score: 51.5,
    review: 3,
    period: '1년 11개월',
    nick: '솔솔솔',
    age: 20,
    genter: '여성',
    profileImage: SampleProfile,
  };

  const handleLikeClick = () => {
    console.log('Like click');
  };

  const handleHateClick = () => {
    console.log('Hate click');
  };

  return (
    <div className='flex my-[100px] items-center justify-center m-auto'>

      <WhProfile
        profileImage={itemList.profileImage}
        nick={itemList.nick}
        age={itemList.age}
        gender={itemList.genter}
        score={itemList.score}
        review={itemList.review}
        period={itemList.period}

        onLikeClick={handleLikeClick}
        onHateClick={handleHateClick}
      />
    </div>
  );
}
