import WhBadge from '@/components/elements/WhBadge';

const badgeList = [
  'continuous_attendance_1day',
  'continuous_attendance_7days',
  'continuous_attendance_30days',
  'continuous_attendance_100days',
  'accompany_once',
  'accompany_7times',
  'accompany_30times',
  'accompany_100times',
  'accompany_completed_once',
  'accompany_completed_7times',
  'accompany_completed_30times',
  'accompany_completed_100times',
  'lock',
  'lock',
  'lock',
];

export default function Page() {
  return (
    <section className='h-full grid grid-cols-3 gap-12 justify-items-center'>
      {badgeList.map((badge: string) => (
        <WhBadge key={badge} name={badge} />
      ))}
    </section>
  );
}
