import WhChip from '@/components/elements/WhChip';
import { useUserStore } from '@/providers/UserStoreProvider';
import {
  consumeStyleList,
  foodRestrictionsList,
  preferTravelThemesList,
} from '@/types/user';

export default function SignUpPreferStep2ModalContent() {
  const {
    preferTravelThemes,
    updatePreferTravelThemes,
    consumeStyle,
    updateConsumeStyle,
    foodRestrictions,
    updateFoodRestrictions,
  } = useUserStore((state) => state);

  return (
    <>
      <h3 className='my-5 text-headline-04 xl:text-headline-03'>
        잘하고 계세요 :) <br />
        조금만 화이팅 해주세요!
      </h3>
      <div className='mb-11 flex flex-col gap-10'>
        <div>
          <p className='mb-3'>여행 관심사는 어떻게 되세요?</p>
          <div className='flex flex-wrap gap-2'>
            {preferTravelThemesList.map((item) => (
              <WhChip
                key={item.id}
                checked={preferTravelThemes.includes(item.id)}
                value={item.id}
                onClick={() => updatePreferTravelThemes(item.id)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>여행에서의 소비 스타일은 어때요?</p>
          <div className='flex flex-wrap gap-2'>
            {consumeStyleList.map((item) => (
              <WhChip
                key={item.id}
                checked={consumeStyle.includes(item.id)}
                value={item.id}
                onClick={() => updateConsumeStyle(item.id)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>못 먹는 음식 있으세요?</p>
          <div className='flex flex-wrap gap-2'>
            {foodRestrictionsList.map((item) => (
              <WhChip
                key={item.id}
                checked={foodRestrictions.includes(item.id)}
                value={item.id}
                onClick={() => updateFoodRestrictions(item.id)}
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
