import { useQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/types/api';
import { apiGet } from '@/utils/api';
import { TAccompanyPost } from '@/types/accompany';

/** 모든 동행 게시글 조회 API */
const accompanyAllApi = (): Promise<ApiResponse<TAccompanyPost[]>> =>
  apiGet('/api/v1/accompany/all');

/** 여행지 목록 조회 API */
const destinationAllApi = (): Promise<ApiResponse<TAccompanyPost[]>> =>
  apiGet('/api/v1/destinations');

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
  return {
    getAccompanyList,
    getDestinationList,
  };
}
