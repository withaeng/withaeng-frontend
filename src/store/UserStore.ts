import { create } from 'zustand';

// 사용자 정보 타입 정의
interface User {
  name: string;
  score: string;
  review: number;
  period: string;
  nick: string;
  introduce: string;
  sex: string;
  birth: string;
  circularPercentage: number;

  mbti?: string;
  preferTravelType: string; // 여행 선호지역
  preferTravelThemes: string[]; // 여행 관심사
  consumeStyle: string; // 소비 스타일
  foodRestrictions: string[]; //못 먹는 음식
  preferAccompanyGender: string; //동행자 타입
  smokingType: string; //흡연
  drinkingType: string; //음주
}

// 상태 저장소 생성
const useStore = create<{
  user: User | null;
  updateUser: (updateUser: Partial<User>) => void;
  fetchUser: () => Promise<void>;
}>((set) => ({
  // 실API 추가 시
  // -> user : null, 초기상태 null로
  user: {
    name: '솔솔',
    score: '36.5',
    review: 3,
    period: '1년 11개월',
    nick: '솔솔 zustand 테스트 중',
    introduce: '안녕하세요. 잘 부탁 드립니다.',
    sex: '여성',
    birth: '2024.04.11',
    circularPercentage: 88,

    mbti: 'ISTJ',
    preferTravelType: '국내', // 여행 선호지역
    preferTravelThemes: ['사진', '음식', '자연'], // 여행 관심사
    consumeStyle: '가성비', // 소비 스타일
    foodRestrictions: ['갑각류', '날 것', '밀가루'], // 못 먹는 음식
    preferAccompanyGender: '여성', // 동행자 타입
    smokingType: '자주 하는 편', // 흡연
    drinkingType: '금주 중', // 음주
  },
  updateUser: (updateUser) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updateUser } : state.user,
    })),
  fetchUser: async () => {
    try {
      const response = await fetch('/api/user'); // TODO : 실API 넣을 예정
      if (!response.ok) {
        throw new Error('response not ok~');
      }
      const fetchUser = await response.json();
      set({ user: fetchUser });
    } catch (error) {
      console.error('fail', error);
    }
  },
}));

export default useStore;
