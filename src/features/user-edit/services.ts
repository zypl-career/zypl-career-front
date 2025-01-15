import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiService } from '@api';
import { TUserLogin } from '@entities';
import { TUserEditRequest, TUserEditResponse } from './types';

export const useUserById = (id: string) => {
  return useQuery<TUserLogin>({
    queryKey: ['user', id],
    queryFn: () => apiService.get(`user/get/${id}`).then(({ data }) => data),
  });
};

export const useEditUser = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation<TUserEditResponse, Error, TUserEditRequest>({
    mutationKey: ['user', id],
    mutationFn: (data) =>
      apiService.patch(`user/update/${id}`, data).then(({ data }) => data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
      return data;
    },
  });
};
