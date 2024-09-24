import { useState } from 'react';
import WhCheckbox from '@/components/elements/WhCheckbox';
import WhChip from '@/components/elements/WhChip';
import WhSlider from '@/components/elements/WhSlider';
import { CreateAccompanyRequest } from '@/@types/accompany';

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
  { id: 'MALE', name: '남성' },
  { id: 'FEMALE', name: '여성' },
  { id: 'NO_PREFERENCE', name: '누구나 가능' },
];

export default function Step2ModalContent({
  form,
  setForm,
}: {
  form: CreateAccompanyRequest;
  setForm: React.Dispatch<React.SetStateAction<CreateAccompanyRequest>>;
}) {
  const [isAllAge, setIsAllAge] = useState(false);
  const ageText = () => {
    if (isAllAge) {
      return '누구나 환영';
    }
    if (form.startAccompanyAge === form.endAccompanyAge) {
      if (form.startAccompanyAge < 50) return `${form.startAccompanyAge}세`;
      return `${form.startAccompanyAge}세 이상`;
    }
    if (form.endAccompanyAge < 50)
      return `${form.startAccompanyAge}세 ~ ${form.endAccompanyAge}세`;
    return `${form.startAccompanyAge}세 ~ ${form.endAccompanyAge}세 이상`;
  };

  const handleAllAge = () => {
    if (!isAllAge) {
      setForm((prev) => ({ ...prev, age: [20, 50] }));
    }
    setIsAllAge((prev) => !prev);
  };

  return (
    <div className='flex grow flex-col overflow-hidden'>
      <h3 className='my-10 text-headline-03'>어떤 동행을 원하세요?? 👀</h3>
      <div className='flex grow flex-col gap-10 overflow-auto'>
        <div>
          <div className='flex justify-between'>
            <p className='mb-5'>원하는 동행 연령을 설정해주세요.</p>
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
              value={[form.startAccompanyAge, form.endAccompanyAge]}
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
          <div className='flex items-center gap-2'>
            {genderList.map((genderItem) => (
              <WhChip
                key={genderItem.id}
                checked={form.preferGender === genderItem.id}
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
