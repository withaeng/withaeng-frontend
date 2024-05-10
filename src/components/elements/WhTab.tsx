'use client';

const defaultCss =
  'text-nutral-black-05 hover:text-nutral-black-02 py-4 px-3.5 border-b border-nutral-white-03';
const focusCss =
  'text-primary-main hover:text-primary-main border-b border-primary-main';

export interface TabData {
  id: string;
  title: string;
}

interface TabProps {
  dataList: TabData[];
  value: string;
  onChange: (value: string) => void;
  children?: React.ReactNode;
}

export default function WhTab({
  dataList,
  value,
  onChange,
  children,
}: TabProps) {
  return (
    <div>
      <ul className='text-subtitle-01 flex whitespace-nowrap overflow-x-auto w-full'>
        {dataList.map((item) => (
          <li key={item.id}>
            <button
              className={`${defaultCss} ${value === item.id && focusCss}`}
              type='button'
              onClick={() => onChange(item.id)}
            >
              {item.title}
            </button>
          </li>
        ))}
        <li className='w-full border-b border-nutral-white-03'></li>
      </ul>
      {children}
    </div>
  );
}
