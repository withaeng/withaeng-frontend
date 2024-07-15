interface TitleProps {
  title: string;
}

const defaultHeaderCss =
  'text-headline-03 text-nutral-black-02 py-7 pl-10 pr-2.5 border-0 rounded shadow-modal bg-nutral-white-01';

export default function WhMypageHeader({ title = '' }: TitleProps) {
  return <div className={`${defaultHeaderCss}`}>{title}</div>;
}
