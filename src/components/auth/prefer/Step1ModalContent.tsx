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
      <h3 className='text-headline-03 my-5'>
        닉네임, 본인의 여행 스타일을 선택해주세요. <br />
        선택된 여행 취향에 맞게 추천 해드려요 :)
      </h3>
      <div className='flex flex-col gap-10 mb-11'>
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
          <div className='flex gap-2 flex-wrap'>
            {mbtiList.map((item) => (
              <WhChip
                key={item.id}
                checked={mbti.includes(item.value)}
                value={item.value}
                onClick={() => updateMbti(item.value)}
              >
                {item.value}
              </WhChip>
            ))}
          </div>
        </div>
        <div>
          <p className='mb-3'>여행 선호지역은 어디인가요?</p>
          <div className='flex gap-2 flex-wrap'>
            {preferTravelTypeList.map((item) => (
              <WhChip
                key={item.id}
                checked={preferTravelType.includes(item.value)}
                value={item.value}
                onClick={() => updatePreferTravelType(item.value)}
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
