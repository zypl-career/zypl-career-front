import { apiService } from '@api';
import { useMutation } from '@tanstack/react-query';
import { TSignIn, TLoginResponse } from './types';

export const useSignIn = () => {
  return useMutation<TLoginResponse, Error, TSignIn>({
    mutationKey: ['signIn'],
    mutationFn: (form: TSignIn) =>
      apiService.post('/user/login', form).then((response) => response?.data),
  });
};
