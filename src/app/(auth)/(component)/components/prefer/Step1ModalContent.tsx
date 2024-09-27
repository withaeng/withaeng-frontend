import WhChip from '@/components/elements/WhChip';
import WhInput from '@/components/elements/WhInput';
import { useUserStore } from '@/providers/UserStoreProvider';
import { mbtiList, preferTravelTypeList } from '@/types/user';

export default function SignUpPreferStep1ModalContent() {
  const {
    nickname,
    updateNickname,
    mbti,
    updateMbti,
    preferTravelType,
    updatePreferTravelType,
  } = useUserStore((state) => state);

  return (
    <>
      <h3 className='my-5 text-headline-04 xl:text-headline-03'>
        닉네임, 본인의 여행 스타일을 선택해주세요. <br />
        선택된 여행 취향에 맞게 추천 해드려요 :)
      </h3>
      <div className='mb-11 flex flex-col gap-10 overflow-auto'>
        <div>
          <WhInput
            value={nickname}
            handleInputChange={updateNickname}
            size='lg'
            placeholder='닉네임은 2자 ~ 10자 이내로 입력 가능합니다.'
            label='닉네임을 입력해주세요.'
            minLength={2}
            maxLength={10}
          />
        </div>
        <div>
          <p className='mb-3'>당신의 MBTI는 무엇인가요?</p>
          <div className='flex flex-wrap gap-2'>
            {mbtiList.map((item) => (
              <WhChip
                key={item.id}
                checked={mbti.includes(item.id)}
                value={item.id}
                onClick={() => updateMbti(item.id)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>여행 선호지역은 어디인가요?</p>
          <div className='flex flex-wrap gap-2'>
            {preferTravelTypeList.map((item) => (
              <WhChip
                key={item.id}
                checked={preferTravelType.includes(item.id)}
                value={item.id}
                onClick={() => updatePreferTravelType(item.id)}
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
