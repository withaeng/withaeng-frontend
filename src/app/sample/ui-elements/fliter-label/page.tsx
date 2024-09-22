import WhFilterLabel from '@/components/elements/WhFilterLabel';

export default function FilterLabelPage() {
  const filterLabelList = ['여행지 : 도쿄', '동행일정 : 24.04.24(1일)'];

  return (
    <div className='mt-3 flex gap-3'>
      {filterLabelList.map((label) => (
        <WhFilterLabel label={label} key={label} />
      ))}
    </div>
  );
}
