export const mbtiList = [
  { id: 'ISTJ', value: 'ISTJ' },
  { id: 'ISTP', value: 'ISTP' },
  { id: 'ISFJ', value: 'ISFJ' },
  { id: 'ISFP', value: 'ISFP' },
  { id: 'INFJ', value: 'INFJ' },
  { id: 'INTP', value: 'INTP' },
  { id: 'INFP', value: 'INFP' },
  { id: 'INTJ', value: 'INTJ' },
  { id: 'ESFJ', value: 'ESFJ' },
  { id: 'ESFP', value: 'ESFP' },
  { id: 'ESTJ', value: 'ESTJ' },
  { id: 'ENTP', value: 'ENTP' },
  { id: 'ESTP', value: 'ESTP' },
  { id: 'ENFP', value: 'ENFP' },
  { id: 'ENTJ', value: 'ENTJ' },
  { id: 'ENFJ', value: 'ENFJ' },
];
export const preferTravelTypeList = [
  { id: 'DOMESTIC', value: '국내' },
  { id: 'INTERNATIONAL', value: '해외' },
];

export const preferTravelThemesList = [
  { id: 'PICTURE', value: '사진' },
  { id: 'FOOD', value: '음식' },
  { id: 'TOURIST_ATTRACTION', value: '관광지' },
  { id: 'NATURE', value: '자연' },
  { id: 'CAFE', value: '카페' },
  { id: 'MUSEUM', value: '박물관' },
  { id: 'EXHIBITION_HALL', value: '전시관' },
  { id: 'ART_MUSEUM', value: '미술관' },
  { id: 'LOCAL_FESTIVAL', value: '마을 축제' },
  { id: 'HEALING_CARE', value: '힐링 케어' },
  { id: 'SHOPPING', value: '쇼핑' },
  { id: 'HOTEL_VACATION', value: '호캉스' },
];

export const consumeStyleList = [
  { id: 'BUDGET_FRIENDLY', value: '가성비' },
  { id: 'SPLURGE', value: '쓸 때 쓰는 스타일' },
  { id: 'LUXURY', value: '황제투어' },
];

export const foodRestrictionsList = [
  { id: 'SHELLFISH', value: '갑각류' },
  { id: 'SEAFOOD', value: '해산물' },
  { id: 'SPICY_FOOD', value: '매운 음식' },
  { id: 'MEAT', value: '육류' },
  { id: 'STRONGLY_FLAVORED', value: '향이 센 음식' },
  { id: 'DAIRY', value: '유제품' },
  { id: 'RAW_FOOD', value: '날 것' },
  { id: 'GREASY_FOOD', value: '기름진 음식' },
  { id: 'NOODLES', value: '면 요리' },
  { id: 'GLUTEN', value: '밀가루' },
  { id: 'CARBONATED_DRINKS', value: '탄산' },
];

export const preferAccompanyGenderList = [
  { id: 'MALE', value: '남성' },
  { id: 'FEMALE', value: '여성' },
  { id: 'NO_PREFERENCE', value: '상관 없음' },
];

export const smokingTypeList = [
  { id: 'FREQUENT_SMOKER', value: '자주 하는 편' },
  { id: 'OCCASIONAL_SMOKER', value: '선택적 흡연' },
  { id: 'QUITTING_SMOKER', value: '금연 중' },
  { id: 'NON_SMOKER', value: '아예 흡연 안함' },
];

export const drinkingTypeList = [
  { id: 'FREQUENT_DRINKER', value: '자주 하는 편' },
  { id: 'OCCASIONAL_DRINKER', value: '선택적 음주' },
  { id: 'ABSTAINER', value: '금주 중' },
  { id: 'NON_DRINKER', value: '아예 음주 안함' },
];

export interface UserDetail {
  nickname: string;
  mbti: string[];
  preferTravelType: string;
  preferTravelThemes: string[];
  consumeStyle: string;
  foodRestrictions: string[];
  preferAccompanyGender: string;
  smokingType: string;
  drinkingType: string;
}
