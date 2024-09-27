import WhChip from '@/components/elements/WhChip';
import { useUserStore } from '@/providers/UserStoreProvider';
import { drinkingTypeList, smokingTypeList } from '@/types/user';

export default function SignUpPreferStep3ModalContent() {
  const { smokingType, updateSmokingType, drinkingType, updateDrinkingType } =
    useUserStore((state) => state);

  return (
    <>
      <h3 className='my-5 text-headline-04 xl:text-headline-03'>
        마지막 단계에요! <br />
        짝짝짝~
      </h3>
      <div className='mb-11 flex flex-col gap-10'>
        <div>
          <p className='mb-3'>흡연은 어떻게 하세요?</p>
          <div className='flex flex-wrap gap-2'>
            {smokingTypeList.map((item) => (
              <WhChip
                key={item.id}
                checked={smokingType.includes(item.id)}
                value={item.id}
                onClick={() => updateSmokingType(item.id)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>음주는 어떻게 하세요?</p>
          <div className='flex flex-wrap gap-2'>
            {drinkingTypeList.map((item) => (
              <WhChip
                key={item.id}
                checked={drinkingType.includes(item.id)}
                value={item.id}
                onClick={() => updateDrinkingType(item.id)}
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
