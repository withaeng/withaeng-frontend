import WhChip from '@/components/elements/WhChip';
import {
  consumeStyleList,
  foodRestrictionsList,
  preferTravelThemesList,
} from '@/types/user';

export default function SignUpPreferStep2ModalContent({
  interests,
  handleInterestsChip,
  consume,
  handleConsumeChip,
  cantEat,
  handleCantEatChip,
}: {
  interests: string[];
  handleInterestsChip: (value: string) => void;
  consume: string;
  handleConsumeChip: (value: string) => void;
  cantEat: string[];
  handleCantEatChip: (value: string) => void;
}) {
  return (
    <>
      <h3 className='text-headline-03 my-5'>
        잘하고 계세요 :) <br />
        조금만 화이팅 해주세요!
      </h3>
      <div className='flex flex-col gap-10 mb-11'>
        <div>
          <p className='mb-3'>여행 관심사는 어떻게 되세요?</p>
          <div className='flex gap-2 flex-wrap'>
            {preferTravelThemesList.map((item) => (
              <WhChip
                key={item.id}
                checked={interests.includes(item.value)}
                value={item.value}
                onClick={() => handleInterestsChip(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>여행에서의 소비 스타일은 어때요?</p>
          <div className='flex gap-2 flex-wrap'>
            {consumeStyleList.map((item) => (
              <WhChip
                key={item.id}
                checked={consume.includes(item.value)}
                value={item.value}
                onClick={() => handleConsumeChip(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>못 먹는 음식 있으세요?</p>
          <div className='flex gap-2 flex-wrap'>
            {foodRestrictionsList.map((item) => (
              <WhChip
                key={item.id}
                checked={cantEat.includes(item.value)}
                value={item.value}
                onClick={() => handleCantEatChip(item.value)}
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
