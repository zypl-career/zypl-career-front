'use client';

import { useMutation } from '@tanstack/react-query';
import { apiService } from '@api';
import { TSignUp, TUserResponse } from './types';

export const useSignUp = () => {
  return useMutation<TUserResponse, Error, TSignUp>({
    mutationKey: ['user'],
    mutationFn: (form: TSignUp) =>
      apiService.post('user/create', form).then((response) => response.data),
    onSuccess(data) {
      return data;
    },
  });
};
