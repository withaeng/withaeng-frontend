type Props = {
  children: React.ReactNode;
};

export default function Container({ children }: Props) {
  return <div className='w-full'>{children}</div>;
}
