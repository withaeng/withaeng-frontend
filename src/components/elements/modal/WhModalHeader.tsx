export default function WhModalHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='text-headline-04 text-nutral-black-01 text-center xl:pb-6 xl:border-b xl:border-nutral-white-03'>
      <h4>{children}</h4>
    </div>
  );
}
