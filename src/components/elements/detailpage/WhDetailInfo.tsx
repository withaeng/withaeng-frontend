'use client';

// import Image from 'next/image';
import WhButton from '../WhButton';
// import { PencilIcon } from '../../../../public/assets/icons/edit';
import { CheckIcon } from '../../../../public/assets/icons/menu';
import { ChatIcon } from '../../../../public/assets/icons/communicate';
import { ShareAndroidIcon } from '../../../../public/assets/icons/menu';
import { ReportIcon } from '../../../../public/assets/icons/communicate';
import { MapIcon } from '../../../../public/assets/icons/communicate';
import { UsersGroupIcon } from '../../../../public/assets/icons/communicate';
import { CalendarCheckIcon } from '../../../../public/assets/icons/communicate';
import { LinkIcon } from '../../../../public/assets/icons/edit';
// import { JoinTypeIcon } from '../../../../public/assets/icons/communicate';
import { GenderIcon } from '../../../../public/assets/icons/communicate';

const listCss = 'flex items-center gap-6';

export default function WhDetailInfo() {
  const detailList = {
    id: '0',
    regist_at: '2024.12.12',
    view: 99,
    title: '호스트가 작성한 타이틀 노출',
    name: '기묘림',
    score: '36.5',
    people: 4,
    wait: 3,
    location: 'test',
    review: 3,
    period: '24.03.21 ~ 24.03.24 (3박)',
    nick: '기묘림',
    introduce: '안녕하세요. 잘 부탁 드립니다.',
    sex: '여성',
    age: 19,
    birth: '2024.04.11',
    gender: '여성만',
    link: 'opentalklink.com//1231421 ',
    content:
      'Lorem ipsum dolor sit amet consectetur. Ultrices massa lobortis ac aliquet. Eget cras eget purus elementum eu dictum sem morbi. Id fermentum commodo proin magna nullam netus. Facilisis vehicula metus vitae pretium blandit. Feugiat nec justo tortor sed. Scelerisque ultricies ornare et donec tincidunt. Tincidunt massa sit augue iaculis ultricies. Diam quis gravida nunc at vulputate amet faucibus. Ante aliquam amet suscipit facilisi vehicula sed. Dui purus cursus risus auctor et pharetra auctor. Ullamcorper at at elit ipsum. Adipiscing eget nunc pellentesque eu tortor posuere sed. Quam viverra enim feugiat at duis aliquam arcu. Ultrices enim blandit sapien at aliquet lacus. Varius sed sociis in faucibus nulla lectus morbi ultrices. Pulvinar accumsan nunc euismod ac. Aenean sapien vel diam nascetur enim a amet eu nulla. Tempor aliquam nunc massa elit. Maecenas at nunc mattis arcu fermentum lobortis suspendisse. Nulla nulla condimentum nunc pretium ut auctor egestas cras. Luctus enim mi aenean et dictum ipsum. Rhoncus varius ultrices ullamcorper fames.',
    requestList: [{}, {}, {}],
  };

  const titleCss = 'text-nutral-black-01 text-headline-04 mt-[60px] mb-5';

  return (
    <div className='max-w-[807px]'>
      <div>
        <div className='flex items-center justify-between text-nutral-black-04 text-caption-02'>
          {/* left */}
          <div className='flex gap-6 my-5'>
            <span>게시 {detailList.regist_at}</span>
            <span>조회수 {detailList.view}</span>
          </div>

          {/* right */}
          <div className='flex gap-6'>
            <ChatIcon />
            <ShareAndroidIcon />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <h1 className='text-nutral-black-02 text-headline-03'>
            {detailList.title}
          </h1>

          <div className='flex gap-5'>
            <span className='flex'>
              {/* <PencilIcon /> */}
              <ReportIcon />
              수정하기
            </span>

            <span className='flex'>
              <ReportIcon />
              신고하기
            </span>
          </div>
        </div>

        <h2 className={titleCss}>동행 정보</h2>
        <div className=''>
          <ul className='flex flex-col gap-3 text-nutral-black-03 text-subtitle-01 bg-nutral-white-02 p-5 max-h-[244px]'>
            <li className={listCss}>
              <MapIcon />
              {detailList.location}
            </li>
            <li className={listCss}>
              <UsersGroupIcon />
              동행 인원
              <span className='text-primary-main'>{detailList.people}</span>
            </li>
            <li className={listCss}>
              <CalendarCheckIcon />
              {detailList.period}
              {/* <span className='text-nutral-black-01'>
                호스트 승인 대기 인원 {detailList.wait}
              </span> */}
            </li>
            {/* <li className={listCss}><JoinTypeIcon />{detailList.age}</li> */}
            <li className={listCss}>
              <GenderIcon />
              {detailList.gender}
            </li>
            <li className={listCss}>
              <LinkIcon />
              {detailList.link}
            </li>
          </ul>
        </div>

        <h2 className={titleCss}>동행 내용</h2>
        <div className='max-h-[170px] text-nutral-black-03 text-body-03'>
          {detailList.content}
        </div>
      </div>

      <div>
        <h3>승인 요청 리스트{detailList.requestList.length}</h3>

        <CheckIcon />
        <div className='mt-8 mx-5 bg-nutral-white-02 rounded'>
          <div className='border border-b-nutral-white-03'>
            {/* <Image
            className='inline object-cover rounded-full h-full'
            src={profileImageUrl}
            width={32}
            height={32}
            alt='프로필 이미지'
          /> */}
            {/* <div>
                        <p className='text-nutral-black-02 text-subtitle-01'>도쿄피플도쿄피플 <label className='py-[2px] px-2 w-[43px] h-6 rounded-xl bg-secondary-exlight'>51.5</label></p>

                        <p className='text-nutral-black-04 text-caption-02'>20대 여행 1년11개월</p> 

                        {status === 'yes' ? 
                        <p>
                            <CheckIcon />
                            승인하셨습니다. 벌써 기대가 되네요!
                        </p>
                        : status === 'no' ? 
                        <p>
                            <CloseIcon />
                            승인거부되었습니다.
                        </p>
                        : status === 'me' ?

                        <WhButton size='sm' onClick={() => {}} outLine >취소</WhButton>
                        <WhButton size='sm' onClick={() => {}}>승인</WhButton> 
                        : null
                    }
                    </div> */}
          </div>
        </div>

        <WhButton size='md' fitContent onClick={() => {}}>
          동행 확정
        </WhButton>
      </div>
    </div>
  );
}
