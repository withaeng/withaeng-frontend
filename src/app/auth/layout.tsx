import Header from '@/components/header/Header';

interface Props {
  children: React.ReactNode;
}

export default function SignUpLayout({ children }: Props) {
  return (
    <div className='bg-nutral-white-02 h-dvh flex flex-col'>
      <Header />
      <main className='flex justify-center items-center grow'>
        <div className='w-[630px] rounded border bg-nutral-white-01 border-nutral-white-03'>
          {children}
        </div>
      </main>
    </div>
  );
}
