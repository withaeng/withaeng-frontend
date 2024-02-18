'use client';

import { useCallback, useState } from 'react';

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="border-[1px] w-full md:w-auto py-2 transition">
      <div className="flex flex-row items-center justify-between">
        <button
          type="button"
          className="text-sm font-semibold px-4 mr-2 hover:bg-neutral-400"
          onClick={() => {}}
        >
          로그인
        </button>
        <button
          type="button"
          className="text-sm font-semibold px-4 hover:bg-neutral-400"
          onClick={() => {}}
        >
          회원가입
        </button>

        <button
          type="button"
          className="flex items-center hover:shadow-md cursor-pointer"
          onClick={() => toggleOpen()}
        >
          글쓰기
        </button>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer" />
        </div>
      )}
    </div>
  );
}
