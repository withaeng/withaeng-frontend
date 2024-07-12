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
  city: string;
  cityEng: string;
  bannerImageUrl: string;
};
