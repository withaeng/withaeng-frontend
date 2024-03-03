'use client';

import React from 'react';
import Image from 'next/image';

interface IconProps {
  src?: string;
  alt?: string;
}

export default function WhIcon({ src = '', alt = '' }: IconProps) {
  return (
    <div>
      {src && alt ? (
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

WhIcon.defaultProps = {
  src: '',
  alt: '',
};
