import { TAccompanyPost, TPopularCity } from '@/types/accompany';
import { TabData } from '@/components/elements/WhTab';

const popularCityList: TPopularCity[] = [
  {
    id: 1,
    city: '서울',
    cityEng: 'SEOUL',
    country: '대한민국',
    continent: '국내',
    bannerImageUrl:
      'https://images.unsplash.com/photo-1519010470956-6d877008eaa4?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    city: '도쿄',
    cityEng: 'TOKYO',
    country: '일본',
    continent: '동아시아',
    bannerImageUrl:
      'https://images.unsplash.com/photo-1519010470956-6d877008eaa4?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    city: '다낭',
    cityEng: 'DANANG',
    country: '베트남',
    continent: '동남아시아',
    bannerImageUrl:
      'https://images.unsplash.com/photo-1519010470956-6d877008eaa4?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    city: '제주도',
    cityEng: 'JEJU',
    country: '대한민국',
    continent: '국내',
    bannerImageUrl:
      'https://images.unsplash.com/photo-1519010470956-6d877008eaa4?q=80&w=2749&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const continentList: TabData[] = [
  { id: 'ALL', title: '전체' },
  { id: 'KOREA', title: '국내' },
  { id: 'JAPAN', title: '일본' },
  { id: 'EAST_ASIA', title: '동아시아' },
  { id: 'SOUTH_EAST_ASIA', title: '동남아시아' },
  { id: 'EUROPE', title: '유럽' },
  { id: 'NORTH_AMERICA', title: '북미' },
  { id: 'SOUTH_AMERICA', title: '남미' },
  { id: 'OCEANIA', title: '오세아니아' },
];

const accompanyList: TAccompanyPost[] = [
  {
    id: 1,
    userId: 0,
    userProfileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userNickname: '도쿄피플',
    status: 'joining',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    content: '위드행 내용이 들어가며 최대 한 줄은 채웁니다.',
    tags: null,
    startTripDate: '2024-03-15',
    endTripDate: '2024-03-16',
    memberCount: 3,
    joinedCount: 1,
    bannerImageUrl:
      'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
    destination: {
      continent: 'KOREA',
      country: '대한민국',
      city: '서울',
    },
  },
  {
    id: 2,
    userId: 1,
    userProfileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userNickname: '도쿄피플',
    status: 'joining',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    content: '위드행 내용이 들어가며 최대 한 줄은 채웁니다.',
    tags: null,
    startTripDate: '2024-07-15',
    endTripDate: '2024-07-16',
    memberCount: 4,
    joinedCount: 2,
    bannerImageUrl:
      'https://images.unsplash.com/photo-1601699233172-1bb3354b845b?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destination: {
      continent: 'EUROPE',
      country: '유럽',
      city: '포르투갈',
    },
  },
  {
    id: 3,
    userId: 2,
    userProfileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userNickname: '도쿄피플',
    status: 'joining',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    content: '위드행 내용이 들어가며 최대 한 줄은 채웁니다.',
    tags: ['태그 1', '태그 2', '태그 3'],
    startTripDate: '2024-08-15',
    endTripDate: '2024-08-16',
    memberCount: 4,
    joinedCount: 4,
    bannerImageUrl:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destination: {
      continent: 'SOUTH_EAST_ASIA',
      country: '동남아시아',
      city: '베트남',
    },
  },
  {
    id: 4,
    userId: 3,
    userProfileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userNickname: '도쿄피플',
    status: 'joining',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    content: '위드행 내용이 들어가며 최대 한 줄은 채웁니다.',
    tags: ['태그 1', '태그 2', '태그 3'],
    startTripDate: '2024-08-15',
    endTripDate: '2024-08-16',
    memberCount: 4,
    joinedCount: 4,
    bannerImageUrl:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destination: {
      continent: 'JAPAN',
      country: '일본',
      city: '도쿄',
    },
  },
  {
    id: 5,
    userId: 4,
    userProfileImageUrl:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    userNickname: '도쿄피플',
    status: 'joining',
    title:
      '위드행 제목이 들어가며 최대 한 줄은 채웁니다. 위드행 제목이 들어가며 최대 한 줄은 채웁니다.',
    content: '위드행 내용이 들어가며 최대 한 줄은 채웁니다.',
    tags: ['태그 1', '태그 2', '태그 3'],
    startTripDate: '2024-08-15',
    endTripDate: '2024-08-16',
    memberCount: 4,
    joinedCount: 4,
    bannerImageUrl:
      'https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    destination: {
      continent: 'NORTH_AMERICA',
      country: '미국',
      city: '뉴욕',
    },
  },
];

export { popularCityList, continentList, accompanyList };
