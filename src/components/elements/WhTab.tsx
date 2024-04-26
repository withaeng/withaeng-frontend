'use client';

import WhChip from './WhChip';

const defaultCss =
  'text-nutral-black-05 hover:text-nutral-black-02 py-4 px-3.5 border-b border-nutral-white-03';
const focusCss =
  'text-primary-main hover:text-primary-pressing border-b border-primary-main';

export interface TabData {
  id: string;
  title: string;
  subDatas: { id: string; name: string }[];
}

interface TabProps {
  dataList: TabData[];
  tabValue: string;
  onTabChange: (value: string) => void;
  value: string;
  onChange: (value: string) => void;
}

export default function WhTab({
  dataList,
  tabValue,
  onTabChange,
  value,
  onChange,
}: TabProps) {
  const index = dataList.findIndex((data) => data.id === tabValue);

  return (
    <div className=''>
      <ul className='text-subtitle-01 flex whitespace-nowrap overflow-x-auto w-full'>
        {dataList.map((item) => (
          <button
            type='button'
            key={item.id}
            onClick={() => onTabChange(item.id)}
          >
            <li className={`${defaultCss} ${tabValue === item.id && focusCss}`}>
              {item.title}
            </li>
          </button>
        ))}
      </ul>
      <div className='mt-[21px] mx-2.5 flex flex-wrap gap-5 max-w-[628px]'>
        {dataList[index].subDatas.map((datas) => (
          <WhChip
            key={datas.id}
            value={value}
            checked={datas.id === value}
            onClick={() => onChange(datas.id)}
          >
            {datas.name}
          </WhChip>
        ))}
      </div>
    </div>
  );
}
