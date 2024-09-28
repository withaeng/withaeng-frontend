import { useQuery } from '@tanstack/react-query';
import { ApiResponse } from '@/types/api';
import { apiGet } from '@/utils/api';
import { FindAccompanyResponse } from '@/@types/accompany';

const fetchAccompanyDetail = async (
  accompanyId: number
): Promise<ApiResponse<FindAccompanyResponse>> =>
  apiGet(`/api/v1/accompany/${accompanyId}`);

export default function useAccompanyDetail(accompanyId: number) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['accompanyDetail', accompanyId],
    queryFn: () => fetchAccompanyDetail(accompanyId),
    enabled: !!accompanyId,
  });

  return { data, isLoading, isError };
}
