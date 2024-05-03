import { useCallback, useState } from 'react';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import WhRadio from '@/components/elements/WhRadio';
import WhCheckbox from '@/components/elements/WhCheckbox';
import WhInput from '@/components/elements/WhInput';
import WhButton from '@/components/elements/WhButton';
import { CheckIcon } from '../../../../public/assets/icons/menu';
import {
  EyeHideIcon,
  EyeShowIcon,
} from '../../../../public/assets/icons/system';

const buttonStyle = 'w-full h-full flex justify-center items-center';
const secondarySpanCss = 'text-secondary-main text-subtitle-02';

export interface UserSignUp {
  email: string;
  password: string;
  birth: Date;
  gender: 'male' | 'female';
  term: boolean;
}

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
  const [showPw, setShowPw] = useState(false);

  const isMinWords = useCallback(
    () => (form.password.length > 0 ? form.password.length >= 8 : undefined),
    [form.password]
  );

  const isCombination = useCallback(
    () =>
      form.password.length > 0
        ? /^(?=.*[a-zA-Z])(?=.*[0-9])/.test(form.password)
        : undefined,
    [form.password]
  );

  const iconColor = useCallback((bol: boolean | undefined): string => {
    if (bol !== undefined) {
      if (bol) {
        return '#36C304';
      }
      return '#EC5C53';
    }
    return '#BAB8B6';
  }, []);

  const textColor = useCallback((bol: boolean | undefined): string => {
    if (bol !== undefined) {
      if (bol) {
        return 'text-caption-success';
      }
      return 'text-caption-main';
    }
    return 'text-nutral-white-04';
  }, []);

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
    if (!isMinWords() || !isCombination()) {
      console.error('비밀번호 규칙에 맞게 입력하세요');
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
        <div>
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
            isErr={
              form.password.length > 0
                ? !isMinWords() || !isCombination()
                : undefined
            }
            endAdornment={
              showPw ? (
                <button
                  type='button'
                  aria-label='show password'
                  className={buttonStyle}
                  onClick={() => setShowPw(false)}
                >
                  <EyeShowIcon width={20} height={20} />
                </button>
              ) : (
                <button
                  type='button'
                  aria-label='hide password'
                  className={buttonStyle}
                  onClick={() => setShowPw(true)}
                >
                  <EyeHideIcon width={20} height={20} />
                </button>
              )
            }
          />
          <div className='flex gap-6 mt-1'>
            <div className='flex gap-1 items-center'>
              <CheckIcon
                width={20}
                height={20}
                stroke={iconColor(isMinWords())}
              />
              <span className={`${textColor(isMinWords())} text-caption-02`}>
                최소 8자 입력
              </span>
            </div>
            <div className='flex gap-1 items-center'>
              <CheckIcon
                width={20}
                height={20}
                stroke={iconColor(isCombination())}
              />
              <span className={`${textColor(isCombination())} text-caption-02`}>
                영문자 + 숫자 조합
              </span>
            </div>
          </div>
        </div>
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
