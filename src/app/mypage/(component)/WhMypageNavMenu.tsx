'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function MypageNavMenu() {
  const segment: string | null = useSelectedLayoutSegment() || 'Info';
  const defaultNavCss =
    'px-3 xl:px-5 py-2.5 hover:text-primary-main rounded text-subtitle-02 xl:text-headline-04 text-nutral-black-02 bg-nutral-white-02';

  const navItem = [
    {
      href: '/mypage/Info',
      label: '내 정보 관리',
      segment: 'Info',
    },
    {
      href: '/mypage/activity',
      label: '내 활동',
      segment: 'activity',
    },
    {
      href: '/mypage/setting',
      label: '설정',
      segment: 'setting',
    },
  ];

  return (
    <ul className='flex xl:flex-col max-xl:text-center gap-2 w-full xl:w-[305px] xl:gap-[14px]'>
      {navItem.map((item) => (
        <li key={item.href} className='w-full'>
          <Link href={item.href}>
            <div
              className={`${defaultNavCss} ${segment === item.segment && 'bg-primary-exLight '}`}
            >
              {item.label}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
