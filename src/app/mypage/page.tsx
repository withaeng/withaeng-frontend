'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function MyPage() {
  const router = useRouter();

  useEffect(() => {
    router.push('/mypage/myInfo');
  }, [router]);

  return null;
}

export default MyPage;
