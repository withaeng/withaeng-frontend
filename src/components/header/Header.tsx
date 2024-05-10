'use client';

import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { HamburgerIcon } from '../../../public/assets/icons/menu';
// TODO: ProfilIconGray01 제외하고 그 외 프로필 아이콘은 제거 예정 > 서버에서 전달 받음
import {
  ProfilIconGray01,
  ProfilIconBlue01,
  ProfilIconGreen01,
  ProfilIconGreen02,
  ProfilIconOrange01,
  ProfilIconOrange02,
  ProfilIconPurple01,
  ProfilIconPurple02,
  ProfilIconRed01,
  ProfilIconRed02,
} from '../../../public/assets/icons/profile';
import Container from '../Container';
import Logo from './Logo';
import WhButton from '../elements/WhButton';
import { AddPlusIcon } from '../../../public/assets/icons/edit';

// TODO: 프로필 아이콘은 제거 예정 > 서버에서 전달 받음
const profileIcons = [
  ProfilIconGray01,
  ProfilIconBlue01,
  ProfilIconGreen01,
  ProfilIconGreen02,
  ProfilIconOrange01,
  ProfilIconOrange02,
  ProfilIconPurple01,
  ProfilIconPurple02,
  ProfilIconRed01,
  ProfilIconRed02,
];

export default function Header() {
  const router = useRouter();
  const goToAccompanyRegister = useCallback(() => {
    // TODO: 동행 게시글 작성 화면으로 이동
    router.push('/accompany-register');
  }, []);
  // TODO: GNG profile icon 서버에서 받아서 표시
  const RandomProfileIcon = profileIcons[Math.floor(Math.random() * 10)];
  return (
    <header className='flex items-center justify-center w-full px-5 py-3 border-b border-nutral-white-03'>
      <Container>
        {/* logo & main menu */}
        <div className='flex-auto'>
          <Logo />
        </div>

        {/* 게시글 등록 버튼 */}
        <div className='mr-7'>
          <WhButton size='md' onClick={goToAccompanyRegister}>
            같이행 등록
            <AddPlusIcon width={20} height={20} stroke='#fff'/>
          </WhButton>
        </div>
        {/* profile menu */}
        <div className='flex items-center gap-3 px-4 py-3 border rounded-full border-nutral-white-03'>
          <HamburgerIcon />
          <div className='relative w-8 h-8'>
            {/* TODO: 서버에서 url 전달받아 표시 예정 > width, height 값 지정 필요 */}
            {/* mouse hover 이벤트 발생 시 프로필 아이콘 투명도를 이용해서 변경 */}
            <RandomProfileIcon />
          </div>
        </div>
      </Container>
    </header>
  );
}
