import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import WhButton from '@/components/elements/WhButton';
import PasswordInput from '../PasswordInput';

export default function ResetPasswordModalContent({
  password,
  setPassword,
  handleSubmit,
}: {
  password: string;
  setPassword: (value: string) => void;
  handleSubmit: () => void;
}) {
  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // FIXME: 입력이 올바르지 않은 경우 추가 작업

    handleSubmit();
  };

  return (
    <form onSubmit={handleSignUpSubmit} className='flex flex-col h-full'>
      <WhModalHeader>회원가입 정보 입력</WhModalHeader>
      <PasswordInput password={password} setPassword={setPassword} />
      <WhButton size='lg' type='submit'>
        동의합니다.
      </WhButton>
    </form>
  );
}
