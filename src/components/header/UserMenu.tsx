'use client';

import { CookieValueTypes, getCookie } from 'cookies-next';
import useAuth from '@/hooks/useAuth';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useRouter } from 'next/navigation';
import { HamburgerIcon } from '../../../public/assets/icons/menu';
import { ProfilIconRed02 } from '../../../public/assets/icons/profile';

const mypageGnbCss =
  '*:text-subtitle-01 py-2.5 px-5 hover:bg-primary-exLight w-full';

function UserDropDownMenu({ session }: { session: CookieValueTypes }) {
  const { signout } = useAuth();
  const router = useRouter();

  if (!session) {
    return (
      <div className='*:focus:shadow-none'>
        <DropdownMenu.Label className='text-primary-pressing py-3 px-5'>
          로그인이 필요합니다.
        </DropdownMenu.Label>
        <DropdownMenu.Item className={mypageGnbCss}>
          <button
            type='button'
            onClick={() => router.push('/login')}
            aria-label='로그인, 회원가입 버튼'
          >
            로그인 / 회원가입
          </button>
        </DropdownMenu.Item>
      </div>
    );
  }

  return (
    <div className='*:focus:shadow-none'>
      <DropdownMenu.Label className='text-primary-pressing py-3 px-5'>
        같이행
      </DropdownMenu.Label>
      <DropdownMenu.Item className={mypageGnbCss}>
        <button
          type='button'
          onClick={() => router.push('/mypage')}
          aria-label='마이페이지 버튼'
        >
          마이페이지
        </button>
      </DropdownMenu.Item>
      <DropdownMenu.Item className={mypageGnbCss}>
        <button
          type='button'
          onClick={() => router.push('/mypage')}
          aria-label='리뷰관리 버튼'
        >
          리뷰관리
        </button>
      </DropdownMenu.Item>
      <DropdownMenu.Item className={mypageGnbCss}>
        <button
          type='button'
          onClick={() => router.push('/mypage')}
          aria-label='배지관리 버튼'
        >
          배지관리
        </button>
      </DropdownMenu.Item>
      <DropdownMenu.Item className={mypageGnbCss}>
        <button type='button' onClick={signout} aria-label='로그아웃 버튼'>
          로그아웃
        </button>
      </DropdownMenu.Item>
    </div>
  );
}

export default function UserMenu() {
  const session: CookieValueTypes = getCookie('accessToken');

  return (
    <div className='xl:px-4 xl:py-3 xl:border rounded-full xl:border-nutral-white-03 relative *:focus:shadow-none'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button
            type='button'
            className='flex items-center gap-3 cursor-pointer'
            aria-label='사용자 메뉴'
          >
            <HamburgerIcon className='hidden xl:block' />
            {/* TODO: 서버에서 url 전달받아 표시 예정 > width, height 값 지정 필요 */}
            <ProfilIconRed02 />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            side='bottom'
            align='end'
            className='py-2 bg-nutral-white-02 shadow-modal w-[200px]'
          >
            <UserDropDownMenu session={session} />
            <DropdownMenu.Arrow className='fill-nutral-white-01' />
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
}
