import { createStore } from 'zustand/vanilla';
import { UserDetail, UserNickname } from '@/types/user';

export type UserActions = {
  updateNickname: (nickname: string) => void;
  updateMbti: (mbti: string) => void;
  updatePreferTravelType: (preferTravelType: string) => void;
  updatePreferTravelThemes: (preferTravelThemes: string) => void;
  updateConsumeStyle: (consumeStyle: string) => void;
  updateFoodRestrictions: (foodRestrictions: string) => void;
  updateSmokingType: (smokingType: string) => void;
  updateDrinkingType: (drinkingType: string) => void;
};

export type UserStore = UserDetail & UserNickname & UserActions;

export const defaultInitState: UserDetail & UserNickname = {
  nickname: '',
  mbti: [],
  preferTravelType: '',
  preferTravelThemes: [],
  consumeStyle: '',
  foodRestrictions: [],
  smokingType: '',
  drinkingType: '',
};

export const createUserStore = (
  initState: UserDetail & UserNickname = defaultInitState
) =>
  createStore<UserStore>()((set) => ({
    ...initState,
    updateNickname: (nickname) => set(() => ({ nickname })),
    updateMbti: (mbti) =>
      set((state) => {
        if (state.mbti.includes(mbti)) {
          return { mbti: state.mbti.filter((item) => item !== mbti) };
        }
        return { mbti: [...state.mbti, mbti] };
      }),
    updatePreferTravelType: (preferTravelType) =>
      set(() => ({ preferTravelType })),
    updatePreferTravelThemes: (preferTravelThemes) =>
      set((state) => {
        if (state.preferTravelThemes.includes(preferTravelThemes)) {
          return {
            preferTravelThemes: state.preferTravelThemes.filter(
              (item) => item !== preferTravelThemes
            ),
          };
        }
        return {
          preferTravelThemes: [...state.preferTravelThemes, preferTravelThemes],
        };
      }),
    updateConsumeStyle: (consumeStyle) => set(() => ({ consumeStyle })),
    updateFoodRestrictions: (foodRestrictions) =>
      set((state) => {
        if (state.foodRestrictions.includes(foodRestrictions)) {
          return {
            foodRestrictions: state.foodRestrictions.filter(
              (item) => item !== foodRestrictions
            ),
          };
        }
        return {
          foodRestrictions: [...state.foodRestrictions, foodRestrictions],
        };
      }),
    updateSmokingType: (smokingType) => set(() => ({ smokingType })),
    updateDrinkingType: (drinkingType) => set(() => ({ drinkingType })),
  }));
