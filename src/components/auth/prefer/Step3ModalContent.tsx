import WhChip from '@/components/elements/WhChip';
import { useUserStore } from '@/providers/userStoreProvider';
import {
  drinkingTypeList,
  preferAccompanyGenderList,
  smokingTypeList,
} from '@/types/user';

export default function SignUpPreferStep3ModalContent() {
  const {
    preferAccompanyGender,
    updatePreferAccompanyGender,
    smokingType,
    updateSmokingType,
    drinkingType,
    updateDrinkingType,
  } = useUserStore((state) => state);

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
                checked={preferAccompanyGender.includes(item.value)}
                value={item.value}
                onClick={() => updatePreferAccompanyGender(item.value)}
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
                checked={smokingType.includes(item.value)}
                value={item.value}
                onClick={() => updateSmokingType(item.value)}
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
                checked={drinkingType.includes(item.value)}
                value={item.value}
                onClick={() => updateDrinkingType(item.value)}
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
