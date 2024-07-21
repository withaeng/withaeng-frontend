export default function StepBar({ value }: { value: number }): React.ReactNode {
  return (
    <div className='h-0.5 w-full bg-primary-exLight mt-2'>
      <div
        className='h-full bg-primary-main transition-all'
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
