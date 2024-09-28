import {
  CopyrightIcon,
  FooterLineIcon,
} from '../../public/assets/icons/system';

export default function Footer() {
  return (
    <footer className='border-t border-t-nutral-white-03 bg-nutral-white-02 py-10'>
      <ul className='flex items-center justify-center text-caption-02 text-nutral-white-04'>
        <li className='flex cursor-pointer items-center gap-2 px-5 text-caption-01 text-nutral-black-04'>
          <CopyrightIcon />
          2024 Withaeng
        </li>
        <li>
          <FooterLineIcon />
        </li>
        <li className='cursor-pointer px-5'>위드행 이용약관</li>
        <li className='cursor-pointer px-5'>개인정보 처리방침</li>
        <li className='cursor-pointer px-5'>서비스 소개</li>
      </ul>
    </footer>
  );
}
