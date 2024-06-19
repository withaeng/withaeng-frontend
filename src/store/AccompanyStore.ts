import { create } from 'zustand';
import { Accompany } from '../types/accompany';

// 동행자 상태 저장소 생성
const useAccompanyStore = create<{
  accompany: Accompany[];
  fetchAccompany: () => Promise<void>;
}>((set) => ({
  accompany: [],
  fetchAccompany: async () => {
    try {
      const response = await fetch('/api/v1/accompany/all');
      if (!response.ok) {
        throw new Error('not ok');
      }
      const data: Accompany[] = await response.json();
      set({ accompany: data });
    } catch (error) {
      console.error('fail:', error);
    }
  },
}));

export default useAccompanyStore;
