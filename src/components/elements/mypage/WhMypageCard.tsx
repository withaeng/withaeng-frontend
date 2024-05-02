import { ReactNode } from 'react';

interface Props {
  linkText?: ReactNode;
  title: string;
  content?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const defaultCardCss =
  'flex items-center justify-between pb-5 mb-8 border-b border-nutral-white-03';

export default function WhMypageCard({
  onClick,
  linkText,
  title = '',
  content = '',
  children,
}: Props) {
  return (
    <div className='bg-nutral-white-01 w-fit py-7 px-10 shadow-modal min-w-[955px]'>
      <div className={`${defaultCardCss}`}>
        <div>
          <h4 className='text-nutral-black-02 text-headline-04'>{title}</h4>
          {content && (
            <p className='text-body-03 text-nutral-black-05 mt-1'>{content}</p>
          )}
        </div>
        {linkText && (
          <button
            type='button'
            onClick={onClick}
            className='text-secondary-main text-subtitle-02'
          >
            {linkText}
          </button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
