import React from 'react';
import Image from 'next/image';

export interface IconProps {
  src: boolean;
}

const WhIcon: React.FC<IconProps> = ({ src }) => (
  <div>
    {src ? null : (
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
