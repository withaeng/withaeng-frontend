import Image from 'next/image';

interface BadgeProps {
  name: string;
}

export default function WhBadge({ name }: BadgeProps) {
  return  <Image src={`/assets/images/badge/${name}.webp`} alt={`${name}`} width={195} height={142}  />;
}
