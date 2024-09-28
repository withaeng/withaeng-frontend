import { AccompanyAge, AccompanyGender } from '@/@types/accompany';

export interface TAccompanyPost {
  id: number;
  userId: number;
  userNickname: string;
  userProfileImageUrl: string;
  title: string;
  content: string;
  destination: {
    continent: string;
    country: string;
    city: string;
  };
  status: string;
  startTripDate: string;
  endTripDate: string;
  bannerImageUrl: string;
  memberCount: number;
  joinedCount: number;
  viewCount?: number;
  likeCount?: number;
  tags: string[] | null;
}

export type TPopularCity = {
  id: number;
  continent: string;
  country: string;
  countryEng: string;
  city: string;
  cityEng: string;
  bannerImageUrl: string;
};

export type TAccompanyFilter = {
  city: { id: string; value: string }[];
  gender: { id: string; value: string }[];
  startDate: Date | null;
  endDate: Date | null;
  isToday: boolean;
  companion?: number | number[];
  companionFree: boolean;
  age?: number | number[];
  ageFree: boolean;
};

export type TAccompanySearch = {
  page: number;
  size: number;
  sort: string;
  status: string;
  continent: string;
  country: string;
  city: string;
  startDate: string;
  endDate: string;
  minMemberCount: number;
  maxMemberCount: number;
  minAllowedAge: AccompanyAge;
  maxAllowedAge: AccompanyAge;
  preferGender: AccompanyGender;
};

export type AccompanyData = {
  title: string;
  content: string;
  continent: string;
  country: string;
  city: string;
  startTripDate: Date | null;
  endTripDate: Date | null;
  bannerImageUrl: string;
  accompanyCnt: number;
  openKakaoUrl: string;
  age: number | number[];
  gender: string;
  tags: string[];
};
