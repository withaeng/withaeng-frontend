export interface AccompanyData {
  title: string;
  content: string;
  continent: string;
  country?: string;
  city?: string;
  startTripDate?: Date;
  endTripDate?: Date;
  bannerImageUrl?: string;
  accompanyCnt: number;
  openKakaoUrl: string;
  age: number[] | number;
  gender: string;
  tags: string[];
}
