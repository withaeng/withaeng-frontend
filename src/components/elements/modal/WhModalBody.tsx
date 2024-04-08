export default function WhModalBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className='max-h-96 overflow-auto'>{children}</div>;
}
