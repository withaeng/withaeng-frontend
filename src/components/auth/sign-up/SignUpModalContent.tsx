import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import WhRadio from '@/components/elements/WhRadio';
import WhCheckbox from '@/components/elements/WhCheckbox';
import WhInput from '@/components/elements/WhInput';
import WhButton from '@/components/elements/WhButton';
import WhCalendar from '@/components/elements/WhCalendar';
import { UserSignUp } from '@/types/auth';
import PasswordInput from '../PasswordInput';

const secondarySpanCss = 'text-secondary-main text-subtitle-02';

export default function SignUpModalContent({
  form,
  setForm,
  setTermPage,
  handleSubmit,
}: {
  form: UserSignUp;
  setForm: React.Dispatch<React.SetStateAction<UserSignUp>>;
  setTermPage: (value: boolean) => void;
  handleSubmit: () => void;
}) {
  const handleSignUpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // FIXME: 입력이 올바르지 않은 경우 추가 작업
    if (!form.email) {
      console.error('이메일을 입력하세요');
      return;
    }
    if (!form.password) {
      console.error('비밀번호를 입력하세요');
      return;
    }
    if (!form.term) {
      console.error('이용약관에 동의해주세요.');
      return;
    }
    console.log(form);

    handleSubmit();
  };

  return (
    <form onSubmit={handleSignUpSubmit} className='flex flex-col h-full'>
      <WhModalHeader>회원가입 정보 입력</WhModalHeader>
      <div className='grow flex flex-col gap-10 mt-10 mx-[15px]'>
        <WhInput
          type='email'
          label='이메일'
          value={form.email}
          handleInputChange={(value) =>
            setForm((prev) => ({ ...prev, email: value }))
          }
          size='lg'
          placeholder='이메일'
        />
        <PasswordInput
          password={form.password}
          setPassword={(value) =>
            setForm((prev) => ({ ...prev, password: value }))
          }
        />
        <div>
          <label htmlFor='sign-up_birth'>
            생년월일 {/* FIXME: required label 처리 (임시 작업) */}
            <span className='text-caption-main'>*</span>
          </label>
          <div id='sign-up_birth' className='mt-3'>
            <WhCalendar
              value={form.birth}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, birth: value ?? new Date() }))
              }
            />
          </div>
        </div>

        <div>
          <label htmlFor='sign-up_gender'>
            성별 {/* FIXME: required label 처리 (임시 작업) */}
            <span className='text-caption-main'>*</span>
          </label>
          <div id='sign-up_gender' className='flex mt-3 gap-8'>
            <WhRadio
              id='male'
              name='gender'
              value='male'
              checked={form.gender === 'male'}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, gender: value }))
              }
            >
              남성
            </WhRadio>
            <WhRadio
              id='female'
              name='gender'
              value='female'
              checked={form.gender === 'female'}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, gender: value }))
              }
            >
              여성
            </WhRadio>
          </div>
        </div>
      </div>
      <div className='flex justify-between mb-3'>
        <label htmlFor='이용약관' className='text-body-03 text-nutral-black-05'>
          <span className={secondarySpanCss}>만 14세 이용</span>에 동의하며,{' '}
          <button
            type='button'
            aria-label='개인정보 이용약관 버튼'
            onClick={() => setTermPage(true)}
            className={`${secondarySpanCss} underline cursor-pointer`}
          >
            개인정보 이용약관
          </button>
          에 동의합니다.
        </label>
        <WhCheckbox
          id='이용약관'
          value='term'
          checked={form.term}
          onChange={() => setForm((prev) => ({ ...prev, term: !prev.term }))}
        />
      </div>
      <WhButton size='lg' type='submit'>
        동의합니다.
      </WhButton>
    </form>
  );
}
