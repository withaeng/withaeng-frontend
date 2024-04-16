import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import WhRadio from '@/components/elements/WhRadio';
import WhCheckbox from '@/components/elements/WhCheckbox';
import WhInput from '@/components/elements/WhInput';
import { useRouter } from 'next/navigation';
import { UserSignUp } from '../page';
import WhButton from '@/components/elements/WhButton';
import {
  EyeHide20Icon,
  EyeShow20Icon,
} from '../../../../../../public/assets/icons/system';
import { useState } from 'react';

const buttonStyle = 'w-full h-full flex justify-center items-center';
const secondarySpanCss = 'text-secondary-main text-subtitle-02';

export default function SignUpContent({
  form,
  setForm,
  setTermPage,
}: {
  form: UserSignUp;
  setForm: React.Dispatch<React.SetStateAction<UserSignUp>>;
  setTermPage: (value: boolean) => void;
}) {
  const router = useRouter();
  const [showPw, setShowPw] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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
    // TODO: 서버 연결, 데이터 저장 및 이메일 전송
    router.replace('/auth/sign-up/email-check');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col h-full'>
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
        {/* TODO: 최소 8자, 영 + 숫자 조합 = 미설정 부분 체크 */}
        <WhInput
          type={showPw ? 'text' : 'password'}
          value={form.password}
          handleInputChange={(value) =>
            setForm((prev) => ({ ...prev, password: value }))
          }
          size='lg'
          placeholder='비밀번호를 입력하세요.'
          label='비밀번호'
          isClearable={false}
          endAdornment={
            showPw ? (
              <button
                type='button'
                className={buttonStyle}
                onClick={() => setShowPw(false)}
              >
                <EyeShow20Icon />
              </button>
            ) : (
              <button
                type='button'
                className={buttonStyle}
                onClick={() => setShowPw(true)}
              >
                <EyeHide20Icon />
              </button>
            )
          }
        />
        {/* TODO: 캘린더 추가 */}
        <div>생년월일 calendar 들어갈 자리</div>
        <div>
          <label htmlFor='sign-up_gender'>
            성별
            {/* FIXME: required label 처리 (임시 작업) */}
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
          <span
            onClick={() => setTermPage(true)}
            className={`${secondarySpanCss} underline cursor-pointer`}
          >
            개인정보 이용약관
          </span>
          에 동의합니다.
        </label>
        <WhCheckbox
          id='이용약관'
          value='term'
          checked={form.term}
          onChange={() => setForm((prev) => ({ ...prev, term: !prev.term }))}
        >
          {''}
        </WhCheckbox>
      </div>
      <WhButton size='lg' type='submit'>
        동의하며, 계속 진행하겠습니다.
      </WhButton>
    </form>
  );
}
