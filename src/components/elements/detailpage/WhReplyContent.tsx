import Image from 'next/image';
import { useState } from 'react';
import detailList from '../../../data';

const titleCss = 'text-nutral-black-01 text-headline-04 mt-[60px] mb-5';

const replyInputWrapCss =
  'w-[807px] flex justify-between items-center mt-3 py-2 px-4 border border-nutral-white-03 rounded placeholder:text-nutral-white-04';

const replyInputCss =
  'min-w-[700px] placeholder:text-nutral-white-04 placeholder:text-body-02 outline-0';

export default function WhReplyContent() {
  const [lookMore, setLookMore] = useState(false);

  const handleMoreClick = () => {
    setLookMore(!lookMore);
  };
  return (
    <div>
      <h2 className={titleCss}>
        댓글&nbsp;<span className='text-primary-main'>N</span>
      </h2>
      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-5'>
          <Image
            className='inline object-cover rounded-full h-full'
            src={detailList.profileImageUrl}
            width={48}
            height={48}
            alt='프로필 이미지'
          />
          <div>
            <p className='text-nutral-black-02 text-Subtitle-01'>
              도쿄피플도쿄피플
            </p>
            <p className='text-caption-01 text-black-04 mt-[5px]'>1시간 전</p>
          </div>
        </div>
        <div
          className={`flex items-center max-w-[735px]  ${lookMore ? 'flex-wrap' : ''}`}
        >
          <p
            className={`text-body-02 text-nutral-black-03  ${!lookMore && 'truncate'}`}
          >
            {detailList.content}
          </p>
          <button
            type='button'
            onClick={handleMoreClick}
            className={`text-nutral-black-05 ${!lookMore && 'w-4/5'}`}
          >
            {lookMore ? '접기' : '더보기'}
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
          className={`flex items-center max-w-[735px]  ${lookMore ? 'flex-wrap' : ''}`}
        >
          <p
            className={`text-body-02 text-nutral-black-03  ${!lookMore && 'truncate'}`}
          >
            {detailList.content}
          </p>
          <button
            type='button'
            onClick={handleMoreClick}
            className={`text-nutral-black-05 ${!lookMore && 'w-4/5'}`}
          >
            {lookMore ? '접기' : '더보기'}
          </button>
        </div>
        <p className='text-caption-01 text-primary-main'>답글달기</p>
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
  );
}
