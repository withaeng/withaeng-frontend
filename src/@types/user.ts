import { AccompanyGender } from '@/@types/accompany';

type MBTIType =
  | 'ISTJ'
  | 'ISTP'
  | 'ISFJ'
  | 'ISFP'
  | 'INFJ'
  | 'INTP'
  | 'INFP'
  | 'INTJ'
  | 'ESTJ'
  | 'ESTP'
  | 'ESFJ'
  | 'ESFP'
  | 'ENFJ'
  | 'ENTP'
  | 'ENFP'
  | 'ENTJ';

type PreferTravelType = 'DOMESTIC' | 'INTERNATIONAL';

type PreferTravelThemes =
  | 'PICTURE'
  | 'FOOD'
  | 'TOURIST_ATTRACTION'
  | 'NATURE'
  | 'CAFE'
  | 'MUSEUM'
  | 'EXHIBITION_HALL'
  | 'ART_MUSEUM'
  | 'LOCAL_FESTIVAL'
  | 'HEALING_CARE'
  | 'SHOPPING'
  | 'HOTEL_VACATION';
type ConsumeStyle = 'BUDGET_FRIENDLY' | 'SPLURGE' | 'LUXURY';

type FoodRestrictions =
  | 'SHELLFISH'
  | 'SEAFOOD'
  | 'SPICY_FOOD'
  | 'MEAT'
  | 'STRONGLY_FLAVORED'
  | 'DAIRY'
  | 'RAW_FOOD'
  | 'GREASY_FOOD'
  | 'NOODLES'
  | 'GLUTEN'
  | 'CARBONATED_DRINKS';
type SmokingType =
  | 'FREQUENT_SMOKER'
  | 'OCCASIONAL_SMOKER'
  | 'QUITTING_SMOKER'
  | 'NON_SMOKER';

type DrinkingType =
  | 'FREQUENT_DRINKER'
  | 'OCCASIONAL_DRINKER'
  | 'ABSTAINER'
  | 'NON_DRINKER';

/* 유저 관련 정보 수정 req body */
export interface AddUserDetailsRequest {
  nickname?: string;
  mbti?: MBTIType;
  preferTravelType?: PreferTravelType[];
  preferTravelThemes?: PreferTravelThemes[];
  consumeStyle?: ConsumeStyle;
  foodRestrictions?: FoodRestrictions[];
  preferAccompanyGender?: AccompanyGender;
  smokingType?: SmokingType;
  drinkingType?: DrinkingType;
}

/* 유저 관련 정보 수정 res */
export interface UserDetailsResponse {
  id: number;
  email: string;
  nickname: string;
  isMale: boolean;
  birth: string;
  mbti?: MBTIType;
  preferTravelType?: PreferTravelType;
  preferTravelThemes: PreferTravelThemes[];
  consumeStyle: ConsumeStyle;
  foodRestrictions?: FoodRestrictions[];
  preferAccompanyGender?: AccompanyGender;
  smokingType?: SmokingType;
  drinkingType?: DrinkingType;
}
