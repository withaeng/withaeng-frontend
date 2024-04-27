import WhTab from './elements/WhTab';

const COUNTRY = [
  {
    id: '0',
    title: '전체',
  },
  {
    id: '1',
    title: '국내',
  },
  {
    id: '2',
    title: '일본',
  },
  {
    id: '3',
    title: '동아시아',
  },
  {
    id: '4',
    title: '동남아시아',
  },
  {
    id: '5',
    title: '유럽',
  },
  {
    id: '6',
    title: '북미',
  },
  {
    id: '7',
    title: '남미',
  },
  {
    id: '8',
    title: '오세아니아',
  },
];

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function MainTab({ value, onChange }: Props) {
  const index = COUNTRY.findIndex((data) => data.id === value);

  return (
    <WhTab dataList={COUNTRY} value={value} onChange={onChange}>
      <div>{COUNTRY[index].title}</div>
    </WhTab>
  );
}
