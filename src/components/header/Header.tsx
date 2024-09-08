import Link from 'next/link';
import Container from '../Container';
import Logo from './Logo';
import WhButton from '../elements/WhButton';
import WhTooltip from '../elements/WhTooltip';
import { AddPlusIcon } from '../../../public/assets/icons/edit';
import UserMenu from './UserMenu';

// TODO: GNG profile icon 서버에서 받아서 표시
export default function Header() {
  return (
    <div className='flex justify-center w-full border-b border-nutral-white-03 bg-nutral-white-01'>
      <Container>
        <header className='w-full flex items-center justify-between px-5 py-3'>
          {/* logo & main menu */}
          <Logo />

          <div className='flex items-center justify-center'>
            {/* 게시글 등록 버튼 */}
            <div className='hidden xl:block mr-7'>
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
            <UserMenu />
          </div>
        </header>
      </Container>
    </div>
  );
}
