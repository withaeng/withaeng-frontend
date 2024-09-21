import {
  CopyrightIcon,
  FooterLineIcon,
} from '../../public/assets/icons/system';

export default function Footer() {
  return (
    <footer className='border-t border-t-nutral-white-03 bg-nutral-white-02 py-10'>
      <ul className='flex cursor-pointer items-center justify-center gap-5 max-xl:flex-col'>
        <li className='flex items-center gap-2 text-caption-01 text-nutral-black-04 max-xl:mb-[10px]'>
          <CopyrightIcon />
          2024 Withaeng
        </li>
        <li className='max-xl:hidden'>
          <FooterLineIcon />
        </li>
        <li className='text-caption-02 text-nutral-white-04'>
          위드행 이용약관
        </li>
        <li className='text-caption-02 text-nutral-white-04'>
          개인정보 처리방침
        </li>
        <li className='text-caption-02 text-nutral-white-04'>서비스 소개</li>
      </ul>
    </footer>
  );
}
