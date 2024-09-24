import { Close20Icon } from '../../../public/assets/icons/menu';
import { FilterIcon } from '../../../public/assets/icons/system';

interface WhFilterLabelProps {
  label: string;
  icon: 'left' | 'right' | 'none';
  onClick?: () => void; // icon === 'none' || icon === 'left'
  onDelete?: (label: string) => void; // icon === 'right'
}

const containerStyle = (icon: string) => {
  switch (icon) {
    case 'right':
    case 'left':
      return 'rounded-[50px] border border-nutral-white-03 bg-nutral-white-02 hover:border-primary-main hover:bg-primary-eexLight';
    case 'none':
      return 'rounded bg-transparent hover:bg-secondary-exLight';
    default:
      return '';
  }
};

const paddingStyle = (icon: string) => {
  switch (icon) {
    case 'right':
      return 'pl-2 pr-1.5';
    case 'left':
      return 'pl-1.5 pr-2';
    case 'none':
      return 'px-2';
    default:
      return '';
  }
};

const textColorStyle = (icon: string) => {
  switch (icon) {
    case 'right':
      return 'text-nutral-black-05 group-hover:text-primary-main';
    case 'left':
      return 'text-nutral-black-03 group-hover:text-primary-main';
    case 'none':
      return 'text-secondary-light group-hover:text-secondary-main';
    default:
      return '';
  }
};

export default function WhFilterLabel({
  label,
  icon,
  onClick,
  onDelete,
}: WhFilterLabelProps) {
  return (
    <div
      className={`group inline-flex w-fit min-w-fit cursor-pointer items-center gap-1 py-1 *:text-caption-01 ${paddingStyle(icon)} ${containerStyle(icon)} `}
      onClick={onClick}
    >
      {icon === 'left' && (
        <div>
          <FilterIcon
            width={20}
            height={20}
            fill='#535353'
            className='group-hover:fill-primary-main'
          />
        </div>
      )}
      <div className={textColorStyle(icon)}>{label}</div>
      {icon === 'right' && (
        <div onClick={() => onDelete?.(label)}>
          <Close20Icon
            stroke='#939393'
            className='group-hover:stroke-primary-main'
          />
        </div>
      )}
    </div>
  );
}
