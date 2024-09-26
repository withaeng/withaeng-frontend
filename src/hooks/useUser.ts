import { useMutation } from '@tanstack/react-query';
import { ApiResponse } from '@/types/api';
import { apiPost } from '@/utils/api';
import { UserDetail, UserNickname } from '@/types/user';

/** update user nickname api */
const updateUseNicknameApi = (
  nickname: UserNickname
): Promise<ApiResponse<UserNickname>> =>
  apiPost('/api/v1/user/me/nickname', nickname);

/** update user prefer data api */
const updateUserPreferApi = (
  form: UserDetail
): Promise<ApiResponse<UserDetail>> =>
  apiPost('/api/v1/user/me/travel-preference', form);

export default function useUser() {
  const updateUserNickname = useMutation({
    mutationFn: (data: UserNickname) => updateUseNicknameApi(data),
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

  const updateUserPrefer = useMutation({
    mutationFn: (data: UserDetail) => updateUserPreferApi(data),
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

  return { updateUserNickname, updateUserPrefer };
}
