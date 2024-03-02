import Link from 'next/link';
import Image from 'next/image';
import menuIcon from '../../../public/assets/icons/hamburger-menu.svg';
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

const menuLinkCss =
  'inline-block py-3.5 px-4 hover:text-nutral-black-03 active:text-primary-main';

// TODO: 프로필 아이콘은 제거 예정 > 서버에서 전달 받음
const profileIcons = [
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
  // TODO: GNG profile icon 서버에서 받아서 표시
  const randomProfileIcon = profileIcons[Math.floor(Math.random() * 9)];
  return (
    <header className='w-full flex items-center justify-center px-5 py-3 border-b border-nutral-white-03'>
      <Container>
        {/* logo & main menu */}
        <div className='w-full flex items-center gap-10'>
          <Logo />
          <ul className='flex text-subtitle-01 text-nutral-black-01'>
            <li>
              <Link href='/' className={`${menuLinkCss}`}>
                홈
              </Link>
            </li>
            <li>
              <Link href='/community' className={`${menuLinkCss}`}>
                커뮤니티
              </Link>
            </li>
          </ul>
        </div>

        {/* profile menu */}
        <div className='flex gap-3 items-center px-4 py-3 border rounded-full border-nutral-white-03'>
          <Image src={menuIcon} alt='메뉴' />
          <div className='relative w-8 h-8'>
            {/* TODO: 서버에서 url 전달받아 표시 예정 > width, height 값 지정 필요 */}
            {/* mouse hover 이벤트 발생 시 프로필 아이콘 투명도를 이용해서 변경 */}
            <Image
              src={ProfilIconGray01}
              alt='프로필 이미지'
              className='absolute w-full h-full opacity-100 hover:opacity-0'
            />
            <Image
              src={randomProfileIcon}
              alt='프로필 이미지'
              className='absolute w-full h-full opacity-0 hover:opacity-100'
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
