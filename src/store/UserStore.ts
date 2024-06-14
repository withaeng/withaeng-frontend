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

  mbti: string;
  favorArea: string;
  interest: [];
  consumeType: string;
  cantEat: [];
  gender: string;
  smoke: string;
  drink: string;
}

// 상태 저장소 생성
export const useStore = create<{
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

// 동행자 정보 타입 정의
interface Accompany {
  status: string;
  profileImageUrl: string;
  nickname: string;
  title: string;
  tags: string[] | null;
  startTripDate: string;
  endTripDate: string;
  accompanyCnt: number;
  accompaniedCnt: number;
  thumbnailImageUrl: string;
}

// 동행자 상태 저장소 생성
export const useAccompanyStore = create<{
  candidates: Accompany[];
  fetchAccompany: () => Promise<void>;
}>((set) => ({
  candidates: [],
  fetchAccompany: async () => {
    try {
      const response = await fetch('/api/accompany'); // 실제 API 경로로 수정하세요
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Accompany[] = await response.json();
      set({ candidates: data });
    } catch (error) {
      console.error('Fetch accompany failed:', error);
    }
  },
}));
