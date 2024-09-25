import {
  CreateAccompanyRequest,
  CreateAccompanyResponse,
} from '@/@types/accompany';
import { ApiResponse } from '@/@types/response';
import { apiPost } from '@/utils/api';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

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

  return { registerPost };
}
