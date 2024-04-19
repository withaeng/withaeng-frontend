import WhMypageNavMenu from '../../components/elements/mypage/WhMypageNavMenu';

export default function MypageLayout({ children }) {
  return (
    <div className='flex bg-nutral-white-02 h-screen gap-5 pt-[124px]'>
      {/* left */}
      <div className='w-[305px] flex items-end flex-col grow'>
        <div className='fixed h-dvh flex flex-col'>
          <WhMypageNavMenu />
        </div>
      </div>

      {/* right */}
      <div className='flex items-start h-dvh flex-col grow'>
        <main>{children}</main>
      </div>
    </div>
  );
}
