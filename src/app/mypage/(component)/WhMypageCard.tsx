interface Props {
  linkText?: React.ReactNode;
  title: string;
  content?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const defaultCardCss =
  'flex items-center justify-between pb-5 xl:mb-8 xl:border-b border-nutral-white-03';

export default function WhMypageCard({
  onClick,
  linkText,
  title = '',
  content = '',
  children,
}: Props) {
  return (
    <div className='w-full bg-nutral-white-01 xl:w-fit xl:min-w-[955px] xl:px-10 xl:py-7 xl:shadow-modal'>
      <div className={`${defaultCardCss}`}>
        <div>
          <h4 className='text-headline-04 text-nutral-black-02'>{title}</h4>
          {content && (
            <p className='mt-3 text-body-03 text-nutral-black-05 xl:mt-1'>
              {content}
            </p>
          )}
        </div>
        {linkText && (
          <button
            type='button'
            onClick={onClick}
            className='text-subtitle-02 text-secondary-main'
          >
            {linkText}
          </button>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
