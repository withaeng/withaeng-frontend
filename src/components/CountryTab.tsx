import WhChip from './elements/WhChip';
import WhTab, { TabData } from './elements/WhTab';

interface CountryTabData extends TabData {
  subDatas: { id: string; name: string }[];
}

const COUNTRY: CountryTabData[] = [
  {
    id: '0',
    title: '주요 국가 및 도시',
    subDatas: [
      { id: 'jeju', name: '제주도' },
      { id: 'busan', name: '부산' },
      { id: 'tokyo', name: '도쿄' },
      { id: 'osaka', name: '오사카' },
      { id: 'fukuoka', name: '후쿠오카' },
      { id: 'taiwan', name: '대만' },
      { id: 'hongkong', name: '홍콩' },
      { id: 'chiangmai', name: '치앙마이' },
      { id: 'bangkok', name: '방콕' },
    ],
  },
  {
    id: '1',
    title: '국내',
    subDatas: [
      { id: 'jeju', name: '제주도' },
      { id: 'busan', name: '부산' },
    ],
  },
  {
    id: '2',
    title: '일본',
    subDatas: [
      { id: 'tokyo', name: '도쿄' },
      { id: 'osaka', name: '오사카' },
      { id: 'fukuoka', name: '후쿠오카' },
      { id: 'shizuoka', name: '시즈오카' },
      { id: 'hokkaido', name: '홋카이도' },
      { id: 'nagoya', name: '나고야' },
      { id: 'japan', name: 'other' },
    ],
  },
  {
    id: '3',
    title: '동아시아',
    subDatas: [
      { id: 'ulaanbaatar', name: '울란바토르' },
      { id: 'taiwan', name: '대만' },
      { id: 'china', name: '중국' },
      { id: 'eastasia', name: 'other' },
    ],
  },
  {
    id: '4',
    title: '동남아시아',
    subDatas: [
      { id: 'vietnam', name: '베트남' },
      { id: 'hongkong', name: '홍콩' },
      { id: 'thailand', name: '태국' },
      { id: 'philippines', name: '필리핀' },
      { id: 'malaysia', name: '말레이시아' },
      { id: 'indonesia', name: '인도네시아' },
      { id: 'india', name: '인도' },
      { id: 'southeastasia', name: 'other' },
    ],
  },
  {
    id: '5',
    title: '유럽',
    subDatas: [
      { id: 'germany', name: '독일' },
      { id: 'france', name: '프랑스' },
      { id: 'italy', name: '이탈리아' },
      { id: 'spain', name: '스페인' },
      { id: 'europe', name: 'other' },
    ],
  },
  {
    id: '6',
    title: '북미',
    subDatas: [{ id: 'northamerica', name: 'other' }],
  },
  {
    id: '7',
    title: '남미',
    subDatas: [{ id: 'southamerica', name: 'other' }],
  },
  {
    id: '8',
    title: '오세아니아',
    subDatas: [{ id: 'oceania', name: 'other' }],
  },
];

interface Props {
  tabValue: string;
  onTabChange: (value: string) => void;
  value: string;
  onChange: (value: string) => void;
}
export default function CountryTab({
  tabValue,
  onTabChange,
  value,
  onChange,
}: Props) {
  const index = COUNTRY.findIndex((data) => data.id === tabValue);

  return (
    <WhTab dataList={COUNTRY} value={tabValue} onChange={onTabChange}>
      <div className='mt-[21px] mx-2.5 flex flex-wrap gap-3 max-w-[628px]'>
        {COUNTRY[index].subDatas?.map((datas) => (
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
    </WhTab>
  );
}
