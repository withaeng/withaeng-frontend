import { useState } from 'react';
import WhCheckbox from '@/components/elements/WhCheckbox';
import WhChip from '@/components/elements/WhChip';
import WhSlider from '@/components/elements/WhSlider';
import { AccompanyData } from '@/types/accompany';

const ageMarks = {
  20: '20',
  25: '25',
  30: '30',
  35: '35',
  40: '40',
  45: '45',
  50: '50+',
};

const genderList = [
  { id: 'male', name: '남성' },
  { id: 'female', name: '여성' },
  { id: 'all', name: '누구나 가능' },
];

export default function Step2ModalContent({
  form,
  setForm,
}: {
  form: AccompanyData;
  setForm: React.Dispatch<React.SetStateAction<AccompanyData>>;
}) {
  const [isAllAge, setIsAllAge] = useState(false);
  const ageText = () => {
    if (isAllAge) {
      return '누구나 환영';
    }
    if (!Array.isArray(form.age)) {
      if (form.age < 50) return `${form.age}세`;
      return `${form.age}세 이상`;
    }
    if (form.age[0] === form.age[1]) {
      if (form.age[0] < 50) return `${form.age[0]}세`;
      return `${form.age[0]}세 이상`;
    }
    if (form.age[1] < 50) return `${form.age[0]}세 ~ ${form.age[1]}세`;
    return `${form.age[0]}세 ~ ${form.age[1]}세 이상`;
  };

  const handleAllAge = () => {
    if (!isAllAge) {
      setForm((prev) => ({ ...prev, age: [20, 50] }));
    }
    setIsAllAge((prev) => !prev);
  };

  return (
    <div className='grow flex flex-col overflow-hidden'>
      <h3 className='text-headline-03 my-10'>어떤 동행을 원하세요?? 👀</h3>
      <div className='flex flex-col gap-10 grow overflow-auto'>
        <div>
          <div className='flex justify-between'>
            <p className='mb-5'>인원을 설정해주세요. (본인 포함)</p>
            <span className='text-subtitle-02'>{ageText()}</span>
          </div>
          <div className='mb-12'>
            <WhSlider
              range
              min={20}
              max={50}
              step={5}
              defaultValue={[20, 50]}
              marks={ageMarks}
              value={form.age}
              disabled={isAllAge}
              onChange={(value) => setForm((prev) => ({ ...prev, age: value }))}
            />
          </div>
          <WhCheckbox
            value='isAllAge'
            id='isAllAge'
            checked={isAllAge}
            onChange={handleAllAge}
          >
            누구나 환영
          </WhCheckbox>
        </div>
        <div>
          <p className='mb-3'>원하는 동행 성별을 설정해주세요.</p>
          <div className='flex gap-2 items-center'>
            {genderList.map((genderItem) => (
              <WhChip
                key={genderItem.id}
                checked={form.gender === genderItem.id}
                value={genderItem.id}
                onClick={(value) =>
                  setForm((prev) => ({ ...prev, gender: value }))
                }
              >
                {genderItem.name}
              </WhChip>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
