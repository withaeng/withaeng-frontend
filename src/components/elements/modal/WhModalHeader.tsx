export default function WhModalHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='text-headline-04 text-nutral-black-01 text-center pb-6 border-b border-nutral-white-03'>
      <h4>{children}</h4>
    </div>
  );
}
