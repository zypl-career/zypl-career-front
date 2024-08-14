import { apiService } from '@api';
import { useMutation } from '@tanstack/react-query';
import { IUserData, TSignUp, } from './types';


export const useSignUp = () => {
  return useMutation<IUserData, Error, TSignUp>({
    mutationFn: (form: TSignUp) => apiService.post('/user/create', form).then((response) => response.data),
    onSuccess(data) {
      localStorage.setItem('user', JSON.stringify(data))
      return data;
    },
  });
};
