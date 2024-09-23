'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/navigation';
import { Kebab } from '../../../../public/assets/icons/menu';
import {
  PencilIcon,
  LinkIcon,
  RemoveIcon,
} from '../../../../public/assets/icons/edit';

const menuItemCss =
  'flex flex-col gap-3 items-center p-[10px] rounded bg-nutral-white-01 focus:outline-none';

const menuListCss =
  'flex items-center justify-center gap-2 text-nutral-black-04 text-subtitle-02';

interface DropDownMenuProps {
  isHost: boolean;
}

function DropDownMenu({ isHost }: DropDownMenuProps) {
  const router = useRouter();

  if (!isHost) {
    // 호스트 시점의 메뉴
    return (
      <div className={menuItemCss}>
        <DropdownMenu.Item>
          <button
            type='button'
            onClick={() => router.push('/linkCopy')}
            aria-label='공유'
            className={menuListCss}
          >
            <LinkIcon width={20} height={20} />
            공유
          </button>
        </DropdownMenu.Item>
        <DropdownMenu.Label>
          <button
            type='button'
            onClick={() => router.push('/edit')}
            aria-label='수정'
            className={menuListCss}
          >
            <PencilIcon width={20} height={20} />
            수정
          </button>
        </DropdownMenu.Label>
        <DropdownMenu.Item>
          {/* <RemoveIcon width={20} height={20} fill='#737373' /> */}
          <button
            type='button'
            onClick={() => router.push('/delete')}
            aria-label='삭제'
            className={menuListCss}
          >
            <RemoveIcon width={20} height={20} />
            <span className='text-subtitle-02 text-caption-main'>삭제</span>
          </button>
        </DropdownMenu.Item>
      </div>
    );
  }

  // 게스트 시점의 메뉴
  return (
    <div className={menuItemCss}>
      <DropdownMenu.Item>
        <button
          type='button'
          onClick={() => router.push('/')}
          aria-label='공유'
          className={menuListCss}
        >
          <LinkIcon width={20} height={20} />
          공유
        </button>
      </DropdownMenu.Item>
    </div>
  );
}

export default function WhDetailMenu() {
  return (
    <div className='relative'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type='button'
            className='cursor-pointer items-center'
            aria-label='상세페이지 메뉴 열기'
          >
            <Kebab />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            side='bottom'
            align='end'
            className='shadow-modal'
          >
            <DropDownMenu isHost />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
