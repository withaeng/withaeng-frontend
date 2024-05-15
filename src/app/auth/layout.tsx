import Header from '@/components/header/Header';

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-nutral-white-02 h-dvh flex flex-col'>
      <Header />
      <main className='flex justify-center items-center grow'>{children}</main>
    </div>
  );
}
