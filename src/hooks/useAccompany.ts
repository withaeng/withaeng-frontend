import { useRouter } from 'next/navigation';
import { useQuery, useMutation } from '@tanstack/react-query';
import { ApiResponse } from '@/@types/response';
import { apiGet, apiPost } from '@/utils/api';
import { TAccompanyPost, TAccompanySearch } from '@/types/accompany';
import {
  CreateAccompanyRequest,
  CreateAccompanyResponse,
} from '@/@types/accompany';

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

/** register post api */
const registerPostApi = (
  data: CreateAccompanyRequest
): Promise<ApiResponse<CreateAccompanyResponse>> => {
  const { imageFile, ...rest } = data;
  return apiPost('/api/v1/accompany', rest);
};

/** S3 image upload */
const uploadPostImageApi = (url: string, image: File) => apiPost(url, image);

export default function useAccompany() {
  const router = useRouter();

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

  const registerPost = useMutation({
    mutationFn: (data: CreateAccompanyRequest) => registerPostApi(data),
    onSuccess: (data, variables) => {
      // TODO: 성공/실패 alert 추가
      if (data.error) {
        console.error(data.error.code + data.error.message);
      } else {
        console.log('성공?');
        // 이미지 있으면 S3에 업로드
        if (variables.imageFile) {
          uploadPostImageApi(data.data.preSignedUrl, variables.imageFile);
        }
        router.replace(`/detail/${data.data.id}`);
      }
    },
    onError: console.error,
  });

  return {
    getAccompanyList,
    getDestinationList,
    getAccompanySearch,
    registerPost,
  };
}
