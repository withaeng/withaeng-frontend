'use client';

interface WhRadioProps {
  children: React.ReactNode;
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  size?: string;
  onChange: (value: any) => void;
}

const defaultRadioCss =
  'appearance-none border border-nutral-white-03 bg-nutral-white-01 hover:border-primary-main checked:border-0 rounded-full cursor-pointer duration-500';

let radioSizeClass = '';
let radioWrapperCss = '';

export default function WhRadio({
  children,
  id,
  name,
  value,
  checked = false,
  size = 'sm',
  onChange = () => {},
}: WhRadioProps) {
  if (size === 'sm') {
    radioSizeClass = 'w-5 h-5 checked:shadow-primary-inner-06';
    radioWrapperCss = 'gap-3 text-body-02';
  } else {
    radioSizeClass = 'w-6 h-6 checked:shadow-primary-inner-08';
    radioWrapperCss = 'gap-5 text-body-01';
  }

  return (
    <div className={`inline-flex ${radioWrapperCss}`}>
      <input
        className={`${defaultRadioCss} ${radioSizeClass}`}
        type='radio'
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => {
          onChange(value);
        }}
      />
      <label htmlFor={id} className='cursor-pointer'>
        {children}
      </label>
    </div>
  );
}
