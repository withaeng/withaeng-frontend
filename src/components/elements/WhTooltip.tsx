const defaultTooltipCss =
  'absolute hidden group-hover:inline-block  whitespace-nowrap px-4 py-2 text-nutral-white-01 bg-secondary-main rounded';

let positionCss = '';

const defaultPointCss =
  'absolute hidden group-hover:inline-block border-[10px]';
let pointCss = '';

interface TooltipProps {
  position: 'top' | 'right' | 'bottom' | 'left';
  content: string;
  children?: React.ReactNode;
}

export default function WhTooltip({
  position = 'top',
  content = '',
  children,
}: TooltipProps) {
  if (position === 'top') {
    positionCss = 'left-1/2 -translate-x-1/2 bottom-[calc(100%+5px)]';
  } else if (position === 'bottom') {
    positionCss = 'left-1/2 -translate-x-1/2 top-[calc(100%+5px)]';
  } else if (position === 'left') {
    positionCss = 'top-1/2 -translate-y-1/2 right-[calc(100%+5px)]';
  } else if (position === 'right') {
    positionCss = 'top-1/2 -translate-y-1/2 left-[calc(100%+5px)]';
  }

  if (position === 'top') {
    pointCss =
      'left-1/2 -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-b-0 border-t-secondary-main';
  } else if (position === 'bottom') {
    pointCss =
      'left-1/2 -translate-x-1/2 top-full border-l-transparent border-r-transparent border-t-0 border-b-secondary-main';
  } else if (position === 'left') {
    pointCss =
      'top-1/2 -translate-y-1/2 right-full border-t-transparent border-b-transparent border-r-0 border-l-secondary-main';
  } else if (position === 'right') {
    pointCss =
      'top-1/2 -translate-y-1/2 left-full border-t-transparent border-b-transparent border-l-0 border-r-secondary-main';
  }

  return (
    <div className='relative cursor-pointer group'>
      <div className='mx-2 my-1'>{children}</div>
      <span className={`${defaultTooltipCss} ${positionCss}`}>{content}</span>
      <span className={`${defaultPointCss} ${pointCss}`}></span>
    </div>
  );
}
