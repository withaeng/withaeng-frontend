'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode;
}

/**
 * 현재 step에 따라 step bar 너비 수정.
 * @param path 현재 경로
 * @returns 너비
 */
function stepbar(path: string): string {
  if (path.includes('/step5')) return 'w-1/3';
  if (path.includes('/step6')) return 'w-2/3';
  if (path.includes('/step7')) return 'w-full';
  throw new Error(`잘못된 경로 입니다. 현재 경로 : ${path}`);
}

export default function SignUpZ03Layout({ children }: Props) {
  const path = usePathname();
  return (
    <div className='pb-10 px-15 pt-18'>
      <p className='text-nutral-black-04 text-right'>
        <Link href='/'>건너뛰기</Link>
      </p>
      <div className='h-0.5 w-full bg-primary-exLight mt-2'>
        <div
          className={`h-0.5 bg-primary-main transition-all ${stepbar(path)}`}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
