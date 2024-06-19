'use client';

import { useEffect } from 'react';
import WhTextarea from '@/components/elements/WhTextarea';
import WhInput from '@/components/elements/WhInput';
import sampleProfile from '../../../../public/assets/icons/profile/blue-01.svg';
import 'react-circular-progressbar/dist/styles.css';
import CircleProgressBar from './CircleProgressBar';
import useStore from '@/store/UserStore';

export default function WhMypageInfo() {
  const { user, fetchUser } = useStore();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  if (!user) {
    return <div> Loading...</div>;
  }

  const infoItems = [
    { value: user.score, label: '매너점수' },
    { value: user.review, label: '후기' },
    { value: user.period, label: '접속 기간' },
  ];

  return (
    <div className='flex gap-[60px] justify-center'>
      {/* left */}
      <div className='flex flex-col justify-center items-center'>
        <CircleProgressBar
          circularPercentage={user.circularPercentage}
          circleWidth={200}
          imageSrc={sampleProfile}
        />

        <p className='py-[13px] text-headline-04 text-primary-main'>
          {user.name}
        </p>
        <ul className='flex bg-nutral-white-02 py-5 px-4 gap-6 text-center rounded text-subtitle-01'>
          {infoItems.map((item, index) => (
            <li
              key={item.value}
              className={`flex flex-col ${index < infoItems.length - 1 ? 'border-r border-nutral-white-03 pr-6' : ''}`}
            >
              <p className='mb-2'>{item.value}</p>
              <span className='text-nutral-black-03 text-body-03'>
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {/* right */}
      <div>
        <WhInput label='닉네임' size='lg' value={user.nick} disabled />

        <WhTextarea label='한 줄 자기소개' value={user.introduce} disabled />

        <div className='flex gap-5 w-[495px]'>
          <div className='w-[149px]'>
            <WhInput label='성별' size='lg' disabled value={user.sex} />
          </div>
          <div className='w-[326px]'>
            <WhInput label='생년월일' size='lg' disabled value={user.birth} />
          </div>
        </div>
      </div>
    </div>
  );
}
