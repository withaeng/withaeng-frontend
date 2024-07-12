import { useMutation } from '@tanstack/react-query';
import { ApiResponse } from '@/types/api';
import { apiPost } from '@/utils/api';
import { UserDetail } from '@/types/user';

/** update user detail data api */
const updateUserDetailApi = (
  form: UserDetail
): Promise<ApiResponse<UserDetail & { id: string; email: string }>> =>
  apiPost('/api/v1/user/add-details', form);

export default function useUser() {
  const updateUserDetail = useMutation({
    mutationFn: (data: UserDetail) => updateUserDetailApi(data),
    onSuccess: (data) => {
      // TODO: 성공/실패 alert 추가
      if (data.error) {
        console.error(data.error.code + data.error.message);
      } else {
        console.log('성공?');
      }
    },
    onError: (err) => console.error(err),
  });

  return { updateUserDetail };
}
