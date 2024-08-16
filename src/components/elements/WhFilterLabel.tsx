import { Close20Icon } from '../../../public/assets/icons/menu';

interface WhFilterLabelProps {
  label: string;
  onDelete?: () => void;
}

export default function WhFilterLabel({ label, onDelete }: WhFilterLabelProps) {
  return (
    <div className='inline-flex w-fit items-center gap-1 py-[7px] pl-3 pr-1.5 border rounded-[50px] bg-nutral-white-02 border-nutral-white-03 cursor-pointer'>
      <span className='text-caption-01 text-nutral-black-05'>{label}</span>
      <div onClick={onDelete}>
        <Close20Icon stroke='#939393' />
      </div>
    </div>
  );
}
