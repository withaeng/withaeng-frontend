'use client';

import WhModal from '@/components/elements/modal/WhModal';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';

export default function SignUpTermModal() {
  const onClick = () => {};
  return (
    <WhModal className='px-[105px] py-[72px]'>
      <WhModalHeader>이용약관</WhModalHeader>
      <div className='mx-5 mt-5 mb-6 overflow-auto h-[470px]'>
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
        onClick={onClick}
        label='이용약관에 동의합니다.'
      />
    </WhModal>
  );
}
