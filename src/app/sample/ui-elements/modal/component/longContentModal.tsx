'use client';

import WhButton from '@/components/elements/WhButton';
import WhModal from '@/components/elements/modal/WhModal';
import WhModalBody from '@/components/elements/modal/WhModalBody';
import WhModalButtonList from '@/components/elements/modal/WhModalButtonList';
import WhModalFooter from '@/components/elements/modal/WhModalFooter';
import WhModalHeader from '@/components/elements/modal/WhModalHeader';
import useModal from '@/components/elements/modal/useModal';

export default function LongContentModal() {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <div>
      <label htmlFor=''>긴 내용 모달 열기</label>
      <WhButton size='md' fitContent onClick={onOpen}>
        긴 내용 모달
      </WhButton>
      <WhModal isOpen={isOpen} onClose={onClose}>
        <WhModalHeader>모달 헤더 입니다.</WhModalHeader>
        <div className='flex flex-col gap-10 mt-10'>
          <WhModalBody>
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
          </WhModalBody>
        </div>
        <WhModalFooter>
          <WhModalButtonList onClick={onClose} label='닫기'></WhModalButtonList>
        </WhModalFooter>
      </WhModal>
    </div>
  );
}
