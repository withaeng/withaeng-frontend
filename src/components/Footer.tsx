import { CopyrightIcon, FooterLineIcon } from '../../public/assets/icons/system';

export default function Footer() {
  return (
    <footer className='py-10 bg-nutral-white-02 border-t border-t-nutral-white-03'>
      <ul className='flex justify-center items-center text-caption-02 text-nutral-white-04'>
        <li className='flex items-center text-caption-01 text-nutral-black-04 cursor-pointer px-5'>
          <CopyrightIcon />
          2024 Withaeng
        </li>
        <li><FooterLineIcon /></li>
        <li className='cursor-pointer px-5'>위드행 이용약관</li>
        <li className='cursor-pointer px-5'>개인정보 처리방침</li>
        <li className='cursor-pointer px-5'>서비스 소개</li>
      </ul>
    </footer>
  );
}
