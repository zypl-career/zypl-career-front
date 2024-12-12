import { apiService } from '@/shared/api';
import { useMutation } from '@tanstack/react-query';
import { TUserFastRequest } from './types';

export const useTestSignin = () => {
  return useMutation<TUserFastRequest, Error, TUserFastRequest>({
    mutationFn: (form: TUserFastRequest) =>
      apiService
        .post('/user-fast/create', form)
        .then((response) => response.data),
    onSuccess(data) {
      localStorage.setItem('user-fast', JSON.stringify(data));
      return data;
    },
  });
};
