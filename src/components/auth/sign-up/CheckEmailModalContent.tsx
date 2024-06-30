import WhModalHeader from '@/components/elements/modal/WhModalHeader';

const secondarySpanCss = 'text-secondary-main font-semibold underline';

export default function CheckEmailModalComponent({
  handleEmail,
}: {
  handleEmail: () => void;
}) {
  return (
    <>
      <WhModalHeader>이메일을 확인해주세요.</WhModalHeader>
      <div className='mx-[95px] mt-10 text-center'>
        입력한 정보로 인증 메일을 보내드렸습니다.
        <br />
        이메일을 받지 못하셨다구요?
        <br />
        그렇다면{' '}
        <button
          type='button'
          onChange={handleEmail}
          className={`${secondarySpanCss}`}
        >
          이메일 재전송
        </button>
        을 클릭해주세요.
      </div>
    </>
  );
}
