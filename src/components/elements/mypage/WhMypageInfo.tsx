'use client';

import WhTextarea from '@/components/elements/WhTextarea';
import WhInput from '@/components/elements/WhInput';
import sampleProfile from '../../../../public/assets/icons/profile/blue-01.svg';
import 'react-circular-progressbar/dist/styles.css';
import CircleProgressBar from './CircleProgressBar';

export default function WhMypageInfo() {
  const itemList = {
    id: '0',
    name: '기묘림',
    score: '36.5',
    review: 3,
    period: '1년 11개월',
    nick: '기묘림',
    introduce: '안녕하세요. 잘 부탁 드립니다.',
    sex: '여성',
    birth: '2024.04.11',
    circularPercentage: 88,
  };

  const infoItems = [
    { value: itemList.score, label: '매너점수' },
    { value: itemList.review, label: '후기' },
    { value: itemList.period, label: '접속 기간' },
  ];

  return (
    <div className='flex gap-[60px] justify-center'>
      {/* left */}
      <div className='flex flex-col justify-center items-center'>
        <CircleProgressBar
          circularPercentage={itemList.circularPercentage}
          circleWidth={200}
          imageSrc={sampleProfile}
        />

        <p className='py-[13px] text-headline-04 text-primary-main'>
          {itemList.name}
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
        <WhInput label='닉네임' size='lg' value={itemList.nick} disabled />

        <WhTextarea
          label='한 줄 자기소개'
          value={itemList.introduce}
          disabled
        />

        <div className='flex gap-5 w-[495px]'>
          <div className='w-[149px]'>
            <WhInput label='성별' size='lg' disabled value={itemList.sex} />
          </div>
          <div className='w-[326px]'>
            <WhInput
              label='생년월일'
              size='lg'
              disabled
              value={itemList.birth}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
