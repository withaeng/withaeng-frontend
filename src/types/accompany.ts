export interface Accompany {
  title: string;
  status: string;
  content: string;
  continent: string;
  country?: string;
  city?: string;
  startTripDate?: Date;
  endTripDate?: Date;
  profileImageUrl?: string;
  thumbnailImageUrl?: string;
  accompanyCnt: number;
  accompaniedCnt: number;
  openKakaoUrl: string;
  age: number[] | number;
  gender: string;
  tags: string[];
  continen: string;
}

// export interface popularCityList {
//   id: number;
//   name: string;
//   engName: string;
//   country: string;
//   continent: string;
//   cityImageUrl: string;
// }
