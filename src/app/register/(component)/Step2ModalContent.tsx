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
  return (
    <>
      <h3 className='text-headline-03 my-10'>어떤 동행을 원하세요?? 👀</h3>
      <div className='flex flex-col gap-10 my-5'>
        <div>
          <div className='flex justify-between'>
            <p className='mb-5'>인원을 설정해주세요. (본인 포함)</p>
            <span>
              {Array.isArray(form.age)
                ? `${form.age[0]}살 ~ ${form.age[1]}`
                : `${form.age}살`}
            </span>
          </div>
          <WhSlider
            range
            min={20}
            max={50}
            step={5}
            defaultValue={[20, 50]}
            marks={ageMarks}
            value={form.age}
            onChange={(value) => setForm((prev) => ({ ...prev, age: value }))}
          />
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
    </>
  );
}
