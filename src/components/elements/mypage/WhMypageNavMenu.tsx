'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function MypageNavMenu() {
  const segment: string | null = useSelectedLayoutSegment() || 'myInfo';
  const defaultNavCss =
    'px-5 py-2.5 hover:text-primary-main rounded text-headline-04 text-nutral-black-02';

  const navItem = [
    {
      href: '/mypage/myInfo',
      label: '내 정보 관리',
      segment: 'myInfo',
    },
    {
      href: '/mypage/myactive',
      label: '내 활동',
      segment: 'myactive',
    },
    {
      href: '/mypage/setting',
      label: '설정',
      segment: 'setting',
    },
  ];

  return (
    <ul className='flex flex-col text-headline-04 w-[305px] gap-[14px]'>
      {navItem.map((item) => (
        <li key={item.href}>
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
