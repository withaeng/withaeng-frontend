'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Kebab } from '../../../../public/assets/icons/menu';
import { PencilIcon, RemoveIcon } from '../../../../public/assets/icons/edit';
import WhModal from '../modal/WhModal';
import WhModalHeader from '../modal/WhModalHeader';
import WhModalButtonList from '../modal/WhModalButtonList';

const menuItemCss =
  'flex flex-col gap-3 items-center p-[10px] rounded bg-nutral-white-01 focus:outline-none';

const menuListCss =
  'flex items-center justify-center gap-2 text-nutral-black-04 text-subtitle-02';

function DropDownMenu({ onDelete }) {
  const router = useRouter();

  return (
    <div className={menuItemCss}>
      <DropdownMenu.Label>
        <button
          type='button'
          onClick={() => router.push('/edit')}
          aria-label='수정'
          className={menuListCss}
        >
          <PencilIcon width={28} height={28} />
          수정
        </button>
      </DropdownMenu.Label>
      <DropdownMenu.Item>
        <button
          type='button'
          onClick={onDelete}
          aria-label='삭제'
          className={menuListCss}
        >
          <RemoveIcon width={28} height={28} />
          <span className='text-subtitle-02 text-caption-main'>삭제</span>
        </button>
      </DropdownMenu.Item>
    </div>
  );
}

export default function ReplyMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {};

  const handleConfirmDelete = () => {
    console.log('댓글이 삭제되었습니다.');
    setIsModalOpen(false);
  };

  return (
    <div className='relative'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type='button'
            className='cursor-pointer items-center'
            aria-label='상세페이지 메뉴 열기'
          >
            <Kebab fill='#BAB8B6' />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            side='bottom'
            align='end'
            className='shadow-modal'
          >
            <DropDownMenu onDelete={handleDeleteClick} />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      {/* 삭제 확인 모달 */}
      {isModalOpen && (
        <WhModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          isDismissible={false}
          className='flex flex-col justify-between px-4 py-5 xl:px-[84px] xl:py-[72px]'
        >
          <WhModalHeader>댓글을 삭제하시겠어요?</WhModalHeader>
          <WhModalButtonList
            leftLabel='아니오'
            label='네'
            onClick={handleConfirmDelete}
          />
        </WhModal>
      )}
    </div>
  );
}
