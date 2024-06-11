import WhButton from '@/components/elements/WhButton';
import WhInput from '@/components/elements/WhInput';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';

interface Props {
  email: string;
  setEmail: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function FindPasswordModalContent({
  email,
  setEmail,
  handleSubmit,
}: Props) {
  return (
    <>
      <WhModalHeader>비밀번호 찾기.</WhModalHeader>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-10 mx-5 mt-5 text-center'
      >
        📨 가입한 이메일 주소를 입력해주세요.
        <br />
        해당 이메일로 인증코드를 전달합니다.
        <WhInput
          size='lg'
          placeholder='이메일 주소를 입력해주세요.'
          value={email}
          handleInputChange={setEmail}
        />
        <WhButton size='lg' type='submit' disabled={!email}>
          이메일로 인증 받기
        </WhButton>
      </form>
    </>
  );
}
