import { createStore } from 'zustand/vanilla';
import { ApiResponse } from '@/types/api';
import { FindAccompanyResponse } from '@/@types/accompany';
import { apiGet } from '@/utils/api';

export type AccompanyDetailActions = {
  fetchAccompanyDetail: (accompanyId: number) => Promise<void>;
  setAccompanyDetail: (data: FindAccompanyResponse | null) => void;
};

export type AccompanyDetailStore = {
  accompanyDetail: FindAccompanyResponse | null;
} & AccompanyDetailActions;

export const defaultInitState: Omit<
  AccompanyDetailStore,
  'fetchAccompanyDetail' | 'setAccompanyDetail'
> = {
  accompanyDetail: null,
};

export const createAccompanyDetailStore = (initState = defaultInitState) =>
  createStore<AccompanyDetailStore>()((set) => ({
    ...initState,

    // API 호출을 위한 함수
    fetchAccompanyDetail: async (accompanyId: string) => {
      set({ isLoading: true, isError: false });
      try {
        const response: ApiResponse<FindAccompanyResponse> = await apiGet(
          `/api/v1/accompany/${accompanyId}`
        );

        if (response.success) {
          set({ accompanyDetail: response.data, isLoading: false });
        } else {
          console.error(response.error?.message);
          set({ isError: true, isLoading: false });
        }
      } catch (error) {
        console.error(error);
        set({ isError: true, isLoading: false });
      }
    },

    setAccompanyDetail: (data: FindAccompanyResponse | null) => {
      set({ accompanyDetail: data });
    },
  }));
