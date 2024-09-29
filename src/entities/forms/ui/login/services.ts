import { apiService } from '@api';
import { useMutation } from '@tanstack/react-query';
import { TSignIn, TToken } from './types';
import { setAccessToken } from '@/shared';

export const useSignIn = () => {
  return useMutation<TToken, Error, TSignIn>({
    mutationFn: (form: TSignIn) =>
      apiService.post('/user/login', form).then((response) => response?.data),
    onSuccess(data) {
      setAccessToken(data);
      return data;
    },
  });
};
