type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return (
    <div className='w-full max-w-screen-xl flex items-center justify-center select-none'>
      {children}
    </div>
  );
}
