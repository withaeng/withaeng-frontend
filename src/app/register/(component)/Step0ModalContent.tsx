import { RegisterGrapicSvg } from '../../../../public/assets/icons/edit';

export default function Step0ModalContent() {
  return (
    <div className='grow flex flex-col overflow-hidden text-center'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-headline-03'>
          잠깐! 🤚
          <br />
          작성 전 알아두셔야 할 부분이 있어요.
        </h1>
        <p>
          무분별한 동행 게시글 내용의 변동을 막기 위해,
          <br />
          게스트의 동행 신청이 있을 시 게시글의 수정 및 삭제가 불가능합니다.
        </p>
      </div>
      <div className='flex items-center justify-center grow'>
        <RegisterGrapicSvg />
      </div>
    </div>
  );
}
