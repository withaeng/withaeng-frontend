// MBTI types constants
const Mbti = {
  ISTJ: 'ISTJ',
  ISTP: 'ISTP',
  ISFJ: 'ISFJ',
  ISFP: 'ISFP',
  INFJ: 'INFJ',
  INTP: 'INTP',
  INFP: 'INFP',
  INTJ: 'INTJ',
  ESFJ: 'ESFJ',
  ESFP: 'ESFP',
  ESTJ: 'ESTJ',
  ENTP: 'ENTP',
  ESTP: 'ESTP',
  ENFP: 'ENFP',
  ENTJ: 'ENTJ',
  ENFJ: 'ENFJ',
} as const;

const PreferTravelType = {
  DOMESTIC: '국내',
  ABROAD: '해외',
} as const;

const PreferTravelThemes = {
  PHOTOGRAPHY: '사진',
  FOOD: '음식',
  SIGHTSEEING: '관광지',
  NATURE: '자연',
  CAFE: '카페',
  MUSEUM: '박물관',
  EXHIBITION: '전시관',
  ART_GALLERY: '미술관',
  VILLAGE_FESTIVAL: '마을 축제',
  HEALING_CARE: '힐링 케어',
  SHOPPING: '쇼핑',
  RESORT: '호캉스',
} as const;

const ConsumeStyle = {
  COST_EFFECTIVE: '가성비',
  STYLISH: '쓸 때 쓰는 스타일',
  LUXURY: '황제투어',
} as const;

const FoodRestrictions = {
  SHELLFISH: '갑각류',
  SEAFOOD: '해산물',
  SPICY_FOOD: '매운 음식',
  MEAT: '육류',
  STRONGLY_SEASONED_FOOD: '향이 센 음식',
  DAIRY_PRODUCTS: '유제품',
  RAW_FOOD: '날 것',
  OILY_FOOD: '기름진 음식',
  FLOUR: '면 요리',
  CARBONATED_DRINKS: '탄산',
} as const;

const PreferAccompanyGender = {
  MALE: '남성',
  FEMALE: '여성',
  ANY: '상관 없음',
} as const;

const SmokingType = {
  FREQUENT: '자주 하는 편',
  OCCASIONAL: '선택적 흡연',
  NON_SMOKER: '금연 중',
} as const;

const DrinkingType = {
  FREQUENT: '자주 하는 편',
  OCCASIONAL: '선택적 음주',
  ABSTINENT: '금주 중',
  NON_DRINKER: '아예 음주 안함',
} as const;

export {
  Mbti,
  PreferTravelType,
  PreferTravelThemes,
  ConsumeStyle,
  FoodRestrictions,
  PreferAccompanyGender,
  SmokingType,
  DrinkingType,
};
