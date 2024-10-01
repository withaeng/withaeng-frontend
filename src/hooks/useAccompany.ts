import { useQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/types/api';
import { apiGet } from '@/utils/api';
import { TAccompanyPost, TAccompanySearch } from '@/types/accompany';

/** 모든 동행 게시글 조회 API */
const accompanyAllApi = (): Promise<ApiResponse<TAccompanyPost[]>> =>
  apiGet('/api/v1/accompany/all');

/** 여행지 목록 조회 API */
const destinationAllApi = (): Promise<ApiResponse<TAccompanyPost[]>> =>
  apiGet('/api/v1/destinations');

/** 검색(조회만) API */
const accompanySeardhApi = (
  params: TAccompanySearch
): Promise<ApiResponse<TAccompanyPost[]>> => {
  const searchParams = new URLSearchParams();
  searchParams.append('page', params.page.toString());
  searchParams.append('size', params.size.toString());
  searchParams.append('sort', params.sort);
  searchParams.append('status', params.status);
  searchParams.append('continent', params.continent);
  searchParams.append('country', params.country);
  searchParams.append('city', params.city);
  searchParams.append('startDate', params.startDate);
  searchParams.append('endDate', params.endDate);
  searchParams.append('minMemberCount', params.minMemberCount.toString());
  searchParams.append('maxMemberCount', params.maxMemberCount.toString());
  searchParams.append('minAllowedAge', params.minAllowedAge.toString());
  searchParams.append('maxAllowedAge', params.maxAllowedAge.toString());
  searchParams.append('preferGender', params.preferGender.toString());

  const queryString = searchParams.toString();
  return apiGet(`/api/v1/accompany/search?${queryString}`);
};

export default function useAccompany() {
  const getAccompanyList = useQuery({
    queryKey: ['all-accompany'],
    queryFn: () => accompanyAllApi(),
    enabled: false,
  });
  const getDestinationList = useQuery({
    queryKey: ['all-destination'],
    queryFn: () => destinationAllApi(),
    enabled: false,
  });

  const getAccompanySearch = (params: TAccompanySearch) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useQuery({
      queryKey: ['accompany-search'],
      queryFn: () => accompanySeardhApi(params),
      enabled: false,
    });

  return {
    getAccompanyList,
    getDestinationList,
    getAccompanySearch,
  };
}
