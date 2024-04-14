import WhBadge from '@/components/elements/WhBadge';

const badgeList = [
  {
    name: 'continuous_attendance_1day',
    value: '연속 출석 1일',
  },
  {
    name: 'continuous_attendance_7days',
    value: '연속 출석 7일',
  },
  {
    name: 'continuous_attendance_30days',
    value: '연속 출석 30일',
  },
  {
    name: 'continuous_attendance_100days',
    value: '연속 출석 100일',
  },
  {
    name: 'accompany_once',
    value: '동행 참여 1회',
  },
  {
    name: 'accompany_7times',
    value: '동행 참여 7회',
  },
  {
    name: 'accompany_30times',
    value: '동행 참여 30회',
  },
  {
    name: 'accompany_100times',
    value: '동행 참여 100회',
  },
  {
    name: 'accompany_completed_once',
    value: '동행 성공 1회',
  },
  {
    name: 'accompany_completed_7times',
    value: '동행 성공 7회',
  },
  {
    name: 'accompany_completed_30times',
    value: '동행 성공 30회',
  },
  {
    name: 'accompany_completed_100times',
    value: '동행 성공 100회',
  },
  {
    name: 'lock',
    value: '동행 성공 100회',
  },
];

export default function Page() {
  return (
    <section className='h-full grid grid-cols-3 gap-x-12 gap-y-12 justify-items-center bg-nutral-white-02 py-[60px] px-20'>
      {badgeList.map((badge) => (
        <div className='flex flex-col gap-4 items-center'>
          <WhBadge key={badge.name} name={badge.name} />
          <span className='text-subtitle-01'>{badge.value}</span>
        </div>
      ))}
    </section>
  );
}
