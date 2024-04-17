import WhMypageNavMenu from './myInfo/WhMypageNavMenu';

export default async function MypageLayout({ children }) {
  return (
    <div className='flex items-stretch bg-nutral-white-01'>
      {/* left */}
      <header className='flex items-end flex-col grow'>
        <section className='w-[305px] h-dvh'>
          <div className='fixed h-dvh flex flex-col'>
            <WhMypageNavMenu />
          </div>
        </section>
      </header>

      {/* right */}
      <div className='flex items-start h-dvh flex-col grow'>
        <div className='h-full'>
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
