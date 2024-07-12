import Image from 'next/image';
import HomeBannerImage from '../../../public/assets/images/img_home_banner.webp';

export default function HomeBanner() {
  return (
    <section>
      <Image src={HomeBannerImage} alt='같이행 배너 이미지' />
    </section>
  );
}
