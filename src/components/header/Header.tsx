import Image from 'next/image';
import Container from '../Container';
import Logo from './Logo';

const menuLinkCss =
  'inline-block py-3.5 px-4 hover:text-nutral-black-03 active:text-primary-main';

export default function Header() {
  return (
    <header className='w-full px-5 py-3 xl:px-21.25 border-b border-nutral-white-03'>
      <Container>
        <div className='flex items-center justify-between w-full select-none'>
          {/* logo & main menu */}
          <div className='flex items-center gap-32 cursor-pointer'>
            <Logo />
            <ul className='flex text-subtitle-01 text-nutral-black-01'>
              <li className={`${menuLinkCss}`}>홈</li>
              <li className={`${menuLinkCss}`}>커뮤니티</li>
            </ul>
          </div>

          {/* profile menu */}
          <div className='flex gap-3 items-center px-4 py-3 border rounded-[5rem] border-nutral-white-03'>
            <Image
              src='../assets/icons/hamburger-menu.svg'
              alt='withaeng-logo'
              width='0'
              height='0'
              className='w-8 h-8'
            />
            <div className='relative w-8 h-8'>
              {/* mouse hover 이벤트 발생 시 프로필 아이콘 투명도를 이용해서 변경 */}
              <Image
                src='../assets/icons/profile/gray-01.svg'
                alt='withaeng-logo'
                width='0'
                height='0'
                className='absolute w-full h-full opacity-100 hover:opacity-0'
              />
              <Image
                src='../assets/icons/profile/red-01.svg'
                alt='withaeng-logo'
                width='0'
                height='0'
                className='absolute w-full h-full opacity-0 hover:opacity-100'
              />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
