import WhMypageNavMenu from '../../components/elements/mypage/WhMypageNavMenu';

interface LayoutProps {
  children: React.ReactNode;
}

export default function MypageLayout({ children }: LayoutProps) {
  return (
    <div className='flex bg-nutral-white-02  gap-5 pt-[124px] overflow-auto h-dvh'>
      {/* left */}
      <div className='w-[305px] flex items-end flex-col grow'>
        <div className='fixed flex flex-col'>
          <WhMypageNavMenu />
        </div>
      </div>

      {/* right */}
      <div className='flex items-start flex-col grow '>
        <main>{children}</main>
      </div>
    </div>
  );
}
