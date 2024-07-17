'use client';

import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import { UserSignUpForm } from '@/types/auth';

export default function TermContent({
  setForm,
  setTermPage,
}: {
  setForm: React.Dispatch<React.SetStateAction<UserSignUpForm>>;
  setTermPage: (value: boolean) => void;
}) {
  const onClick = () => {
    setForm((prev) => ({ ...prev, term: true }));
    setTermPage(false);
  };
  return (
    <div className='flex flex-col h-full'>
      <WhModalHeader>이용약관</WhModalHeader>
      <div className='grow mx-5 mt-5 mb-6 overflow-auto'>
        {/* FIXME: 내용 변경 필요 */}
        {`네이버는 본 개인정보처리방침은 개인정보보호법 기준으로 작성하되, 네이버 내에서의 이용자 
          개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해 노력하였습니다. 이는 쉬운 용어를
          사용한 개인정보처리방침 작성 원칙인 'Plain Language Privacy Policy(쉬운 용어를 사용한 개인정보처리방침)’를 도입한 것입니다.

          네이버는 본 개인정보처리방침은 개인정보보호법 기준으로 작성하되, 네이버 내에서의 이용자 
          개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해 노력하였습니다. 이는 쉬운 용어를
          사용한 개인정보처리방침 작성 원칙인 'Plain Language Privacy Policy(쉬운 용어를 사용한 개인정보처리방침)’를 도입한 것입니다.네이버는 본 개인정보처리방침은 개인정보보호법 기준으로 
          작성하되, 네이버 내에서의 이용자 개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해
          노력하였습니다. 이는 쉬운 용어를 사용한 개인정보처리방침 작성 원칙인 'Plain Language Privacy Policy(쉬운 용어를 사용한 개인정보처리방침)’를 도입한 것입니다.

          네이버는 본 개인정보처리방침은 개인정보보호법 기준으로 작성하되, 네이버 내에서의 이용자 
          개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해 노력하였습니다. 이는 쉬운 용어를
          사용한 개인정보처리방침 작성 원칙인 'Plain Language Privacy Policy(쉬운 용어를 사용한 개인정보처리방침)’를 도입한 것입니다.네이버는 본 개인정보처리방침은 개인정보보호법 기준으로 
          작성하되, 네이버 내에서의 이용자 개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해
          노력하였습니다. 이는 쉬운 용어를 사용한 개인정보처리방침 작성 원칙인 'Plain Language Privacy Policy(쉬운 용어를 사용한 개인정보처리방침)’를 도입한 것입니다.

          네이버는 본 개인정보처리방침은 개인정보보호법 기준으로 작성하되, 네이버 내에서의 이용자 
          개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해 노력하였습니다. 이는 쉬운 용어를
          사용한 개인정보처리방침 작성 원칙인 'Plain Language Privacy Policy(쉬운 용어를 사용한 개인정보처리방침)’를 도입한 것입니다.네이버는 본 개인정보처리방침은 개인정보보호법 기준으로 
          작성하되, 네이버 내에서의 이용자 개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해
          노력하였습니다. 이는 쉬운 용어를 사용한 개인정보처리방침 작성 원칙인 'Plain Language Privacy Policy(쉬운 용어를 사용한 개인정보처리방침)’를 도입한 것입니다.

          네이버는 본 개인정보처리방침은 개인정보보호법 기준으로 작성하되, 네이버 내에서의 이용자 
          개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해 노력하였습니다. 이는 쉬운 용어를
          사용한 개인정보처리방침 작성 원칙인 'Plain Language Privacy Policy(쉬운 용어를 사용한 개인정보처리방침)’를 도입한 것입니다.네이버는 본 개인정보처리방침은 개인정보보호법 기준으로 
          작성하되, 네이버 내에서의 이용자 개인정보 처리 현황을 최대한 알기 쉽고 상세하게 설명하기 위해
          노력하였습니다. 이는 쉬운 용어를 사용한 개인정보처리방침 작성 원칙인 'Plain Language Privacy Policy(쉬운 용어를 사용한 개인정보처리방침)’를 도입한 것입니다.`}
      </div>
      <WhModalButtonList
        prev
        onPrevClick={() => setTermPage(false)}
        onClick={onClick}
        label='이용약관에 동의합니다.'
      />
    </div>
  );
}
