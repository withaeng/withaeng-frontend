import Header from '@/components/header/Header';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function SignUpLayout({ children, modal }: Props) {
  return (
    <div className='bg-nutral-white-02 h-dvh flex flex-col'>
      <Header />
      <main className='flex justify-center items-center grow'>{children}</main>
      {modal}
    </div>
  );
}
