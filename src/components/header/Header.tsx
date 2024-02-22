import Container from '../Container';
import UserMenu from './UserMenu';
import Logo from './Logo';

export default function Header() {
  return (
    <header className='w-full bg-white z-10 shadow-sm py-3 border-b-[1px]'>
      <Container>
        <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
          <div>
            <Logo />
            {/* <p>가치행</p> */}
          </div>
          <UserMenu />
        </div>
      </Container>
    </header>
  );
}
