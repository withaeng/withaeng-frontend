import WhChip from '@/components/elements/WhChip';
import {
  drinkingTypeList,
  preferAccompanyGenderList,
  smokingTypeList,
} from '@/types/user';

export default function SignUpPreferStep3ModalContent({
  gender,
  handleGenderChip,
  smoking,
  handleSmokingChip,
  drinking,
  handleDrinkingChip,
}: {
  gender: string;
  handleGenderChip: (value: string) => void;
  smoking: string;
  handleSmokingChip: (value: string) => void;
  drinking: string;
  handleDrinkingChip: (value: string) => void;
}) {
  return (
    <>
      <h3 className='text-headline-03 my-5'>
        마지막 단계에요! <br />
        짝짝짝~
      </h3>
      <div className='flex flex-col gap-10 mb-11'>
        <div>
          <p className='mb-3'>원하는 동행자의 성별이 있나요?</p>
          <div className='flex gap-2 flex-wrap'>
            {preferAccompanyGenderList.map((item) => (
              <WhChip
                key={item.id}
                checked={gender.includes(item.value)}
                value={item.value}
                onClick={() => handleGenderChip(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>흡연은 어떻게 하세요?</p>
          <div className='flex gap-2 flex-wrap'>
            {smokingTypeList.map((item) => (
              <WhChip
                key={item.id}
                checked={smoking.includes(item.value)}
                value={item.value}
                onClick={() => handleSmokingChip(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>음주는 어떻게 하세요?</p>
          <div className='flex gap-2 flex-wrap'>
            {drinkingTypeList.map((item) => (
              <WhChip
                key={item.id}
                checked={drinking.includes(item.value)}
                value={item.value}
                onClick={() => handleDrinkingChip(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
