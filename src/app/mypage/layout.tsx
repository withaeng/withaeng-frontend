import WhMypageNavMenu from './(component)/WhMypageNavMenu';

interface LayoutProps {
  children: React.ReactNode;
}

export default function MypageLayout({ children }: LayoutProps) {
  return (
    <div className='flex justify-center bg-nutral-white-02 gap-5 pt-[124px] overflow-auto min-h-full'>
      {/* left */}
      <div className='w-[305px]'>
        <WhMypageNavMenu />
      </div>

      {/* right */}
      <div>{children}</div>
    </div>
  );
}
