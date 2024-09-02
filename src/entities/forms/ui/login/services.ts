import { apiService } from '@api';
import { useMutation } from '@tanstack/react-query';
import { TSignIn, TToken } from './types';

export const useSignIn = () => {
  return useMutation<TToken, Error, TSignIn>({
    mutationFn: (form: TSignIn) =>
      apiService.post('/user/login', form).then((response) => response?.data),
    onSuccess(data) {
      localStorage.setItem('access', JSON.stringify(data));
      return data;
    },
  });
};
