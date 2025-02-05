import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { apiService } from '@api';
import { toUnique } from '@utils';
import { TResponse } from '@types';
import { TEducationCenterData, TEducationCenterParams } from './types';

export const useEducationCenter = (params?: TEducationCenterParams) => {
  return useQuery<TResponse<TEducationCenterData[]>>({
    queryKey: ['education-center', params],
    queryFn: () =>
      apiService
        .get('education-center/get', { params })
        .then(({ data }) => data),
  });
};

export const useEducationCenterTags = (params?: TEducationCenterParams) => {
  return useQuery<TResponse<TEducationCenterData[]>, Error, string[]>({
    queryKey: ['education-center-tag', params],
    queryFn: () =>
      apiService
        .get('education-center/get', { params })
        .then(({ data }) => data),
    placeholderData: keepPreviousData,
    select: (data) =>
      toUnique(data.data.flatMap((eduCenter) => eduCenter?.city)),
  });
};
