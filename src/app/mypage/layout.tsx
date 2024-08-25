import WhMypageNavMenu from './(component)/WhMypageNavMenu';

interface LayoutProps {
  children: React.ReactNode;
}

export default function MypageLayout({ children }: LayoutProps) {
  return (
    <div className='max-xl:px-4 pt-5 flex max-xl:flex-col justify-center xl:bg-nutral-white-02 gap-5 xl:pt-[124px] overflow-auto min-h-full'>
      {/* left */}
      <WhMypageNavMenu />

      {/* right */}
      <div>{children}</div>
    </div>
  );
}
