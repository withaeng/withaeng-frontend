import WhButton from '@/components/elements/WhButton';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import PasswordInput from '../PasswordInput';

interface Props {
  password: string;
  setPassword: (value: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function ChangePasswordModalContent({
  password,
  setPassword,
  handleSubmit,
}: Props) {
  return (
    <>
      <WhModalHeader>비밀번호 재설정</WhModalHeader>
      <form
        onSubmit={handleSubmit}
        className='mx-5 mt-5 flex flex-col gap-10 text-center'
      >
        <PasswordInput
          password={password}
          setPassword={setPassword}
          label='비밀번호 재설정'
        />
        <WhButton size='lg' type='submit' disabled={!password}>
          비밀번호 재설정 완료
        </WhButton>
      </form>
    </>
  );
}
