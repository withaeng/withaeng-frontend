'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import useAuth from '@/context/useAuth';
import Container from '../Container';
import Logo from './Logo';
import WhButton from '../elements/WhButton';
import WhTooltip from '../elements/WhTooltip';
import { HamburgerIcon } from '../../../public/assets/icons/menu';
import { ProfilIconRed02 } from '../../../public/assets/icons/profile';
import { AddPlusIcon } from '../../../public/assets/icons/edit';

const mypageGnbCss =
  'text-subtitle-01 py-2.5 px-5 hover:bg-primary-exLight w-full';

// TODO: GNG profile icon 서버에서 받아서 표시
export default function Header() {
  const { user } = useAuth();
  const [isOpenMymenu, setIsOpenMymenu] = useState(false);
  const mymenuRef = useRef<HTMLUListElement>(null);

  // mymenu popover 기능
  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (!mymenuRef.current?.contains(e.target)) {
        setIsOpenMymenu(false);
      }
    };
    window.addEventListener('click', pageClickEvent, true);
    return () => {
      window.addEventListener('click', pageClickEvent, true);
    };
  }, []);

  return (
    <header className='flex items-center justify-center w-full px-5 py-3 border-b border-nutral-white-03 bg-nutral-white-01'>
      <Container>
        {/* logo & main menu */}
        <div className='flex-auto'>
          <Logo />
        </div>

        {/* 게시글 등록 버튼 */}
        <div className='mr-7'>
          <WhTooltip
            position='bottom'
            coreText='동행'
            content='을 직접 찾아볼까요?'
          >
            <Link href='/register'>
              <WhButton size='md'>
                같이행 등록
                <AddPlusIcon width={20} height={20} stroke='#fff' />
              </WhButton>
            </Link>
          </WhTooltip>
        </div>
        {/* profile menu */}
        <div className=' px-4 py-3 border rounded-full border-nutral-white-03 relative'>
          <div
            className='flex items-center gap-3 cursor-pointer'
            onClick={() => setIsOpenMymenu((prev) => !prev)}
          >
            <HamburgerIcon />
            {/* TODO: 서버에서 url 전달받아 표시 예정 > width, height 값 지정 필요 */}
            <ProfilIconRed02 />
          </div>
          {isOpenMymenu && (
            <ul
              ref={mymenuRef}
              className='py-2 bg-nutral-white-02 shadow-modal absolute top-15 right-0 w-[200px]'
            >
              {user ? (
                <>
                  <li className='text-primary-pressing py-3 px-5'>
                    같이행_이름명이노출됨
                  </li>
                  <Link href='/mypage'>
                    <li className={mypageGnbCss}>마이페이지</li>
                  </Link>
                  <Link href='/mypage'>
                    <li className={mypageGnbCss}>리뷰관리</li>
                  </Link>
                  <Link href='/mypage'>
                    <li className={mypageGnbCss}>배지관리</li>
                  </Link>
                  <Link href='/mypage'>
                    <li className={mypageGnbCss}>로그아웃</li>
                  </Link>
                </>
              ) : (
                <>
                  <li className='text-primary-pressing py-3 px-5'>
                    로그인이 필요합니다.
                  </li>
                  <Link href='/login'>
                    <li className={mypageGnbCss}>로그인 / 회원가입</li>
                  </Link>
                </>
              )}
            </ul>
          )}
        </div>
      </Container>
    </header>
  );
}
