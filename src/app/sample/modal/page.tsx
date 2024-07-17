'use client';

import WhButton from '@/components/elements/WhButton';
import useModal from '@/hooks/useModal';

export default function Page() {
  const { alert, confirm } = useModal();
  const openAlert1 = () => {
    alert(
      '이용자의 매너 점수를 내렸어요.',
      '확인',
      '😱 ‘도쿄피플’님의 매너는 Bad...'
    );
  };
  const openAlert2 = () => {
    alert('30일 뒤에 다시 매너점수를 반영할 수 있어요.', '확인');
  };

  const openConfirm1 = async () => {
    const res = await confirm(
      '승인한 후에는 취소가 불가능해요.',
      '네, 동행을 승인할게요',
      '아니오',
      '‘도쿄피플’님의 동행을 승인할까요?'
    );
    console.log('openConfirm1', res);
  };
  const openConfirm2 = async () => {
    const res = await confirm(
      '승인한 후에는 취소가 불가능해요.',
      '네, 동행을 승인할게요',
      '아니오'
    );

    console.log('openConfirm2', res);
  };
  return (
    <div className='flex gap-3'>
      <div className='flex gap-1.5'>
        <WhButton onClick={openAlert1} fitContent>
          alert-타이틀 o
        </WhButton>
        <WhButton onClick={openAlert2} fitContent>
          alert-타이틀 x
        </WhButton>
      </div>
      <div className='flex gap-1.5'>
        <WhButton onClick={openConfirm1} fitContent>
          confirm-타이틀 o
        </WhButton>
        <WhButton onClick={openConfirm2} fitContent>
          confirm-타이틀 x
        </WhButton>
      </div>
    </div>
  );
}
