import { ReactNode } from 'react';
import {
  ContinuousAttendance1DayIcon,
  ContinuousAttendance7DaysIcon,
  ContinuousAttendance30DaysIcon,
  ContinuousAttendance100DaysIcon,
  AccompanyOnceIcon,
  Accompany7TimesIcon,
  Accompany30TimesIcon,
  Accompany100TimesIcon,
  AccompanyCompletedOnceIcon,
  AccompanyCompleted7TimesIcon,
  AccompanyCompleted30TimesIcon,
  AccompanyCompleted100TimesIcon,
  DefaultBadgeIcon,
} from '../../../public/assets/icons/badge/index';

interface BadgeProps {
  name: string;
}
function badge(name: string): ReactNode {
  switch (name) {
    case 'continuous_attendance_1day':
      return <ContinuousAttendance1DayIcon />;
    case 'continuous_attendance_7days':
      return <ContinuousAttendance7DaysIcon />;
    case 'continuous_attendance_30days':
      return <ContinuousAttendance30DaysIcon />;
    case 'continuous_attendance_100days':
      return <ContinuousAttendance100DaysIcon />;
    case 'accompany_once':
      return <AccompanyOnceIcon />;
    case 'accompany_7times':
      return <Accompany7TimesIcon />;
    case 'accompany_30times':
      return <Accompany30TimesIcon />;
    case 'accompany_100times':
      return <Accompany100TimesIcon />;
    case 'accompany_completed_once':
      return <AccompanyCompletedOnceIcon />;
    case 'accompany_completed_7times':
      return <AccompanyCompleted7TimesIcon />;
    case 'accompany_completed_30times':
      return <AccompanyCompleted30TimesIcon />;
    case 'accompany_completed_100times':
      return <AccompanyCompleted100TimesIcon />;
    default:
      return <DefaultBadgeIcon />;
  }
}

const defaultBadgeCss = 'bg-white w-[195px] h-[142px] rounded';
export default function WhBadge({ name }: BadgeProps) {
  return <div className={defaultBadgeCss}>{badge(name)}</div>;
}
