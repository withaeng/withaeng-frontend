import { ChevronDown20Icon } from '../../../../public/assets/icons/arrow/index';

interface Props {
  isOpen?: boolean;
}

export default function WhMypageMoreButton({ isOpen = false }: Props) {
  return (
    // <div className='z-10 py-3 px-[23.5px] border'>
    <button
      type='button'
      className='max-w-[118px] z-10 flex justify-between items-center py-3 px-[23.5px] border rounded-[20px] border-nutral-white-03 bg-nutral-white-01'
    >
      {isOpen ? '접기' : '펼치기'}
      <ChevronDown20Icon />
    </button>
    // </div>
  );
}
