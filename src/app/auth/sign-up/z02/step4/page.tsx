'use client';

import { useRouter } from 'next/navigation';
import ButtonGroup from '../../components/FooterButtonList';

export default function SignUpStep4Page() {
  const router = useRouter();
  const onClick = () => {
    router.push('/auth/sign-up/z03/step5');
  };

  return (
    <div className='flex flex-col gap-10'>
      <h4 className='text-headline-04 text-nutral-black-01 text-center pb-[25px] border-b border-nutral-white-03'>
        이용약관
      </h4>
      {/* FIXME: 높이는 임의 지정. (현재 디자인도 확정된 부분이 아니기 때문.) - 240329 */}
      <div className='h-96 overflow-auto'>
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
      <div className='mt-2'>
        <ButtonGroup prev onClick={onClick} label='이용약관에 동의합니다.' />
      </div>
    </div>
  );
}
