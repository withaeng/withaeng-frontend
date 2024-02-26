import React from 'react';
import Image from 'next/image';

export interface IconProps {
  src: 'string | StaticImport';
}

const WhIcon: React.FC<IconProps> = ({ src }) => (
  <div>
    {src ? (
      <Image width={20} height={20} src={src} alt='sample-icon' />
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

export default WhIcon;
