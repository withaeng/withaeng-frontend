'use client';

import React from 'react';
import Image from 'next/image';

interface IconProps {
  src: string;
  alt: string;
  isIcon: boolean;
}

export default function WhIcon({ src, alt, isIcon = false }: IconProps) {
  return (
    <div>
      {isIcon ? (
        <Image width={20} height={20} src={src} alt={alt} />
      ) : (
        <Image
          width={20}
          height={20}
          src='/assets/icons/sample-icon.svg'
          alt='sample-icon'
        />
      )}
    </div>
  );
}
