import { apiService } from '@api';
import { useQuery } from '@tanstack/react-query';
import { TResponse } from '@types';
import { Specialty } from './constants';
import { TSpecialty } from './types';

export const useGetProfessions = (
  params?: Partial<Record<keyof TSpecialty, any>>,
) => {
  return useQuery<TResponse<TSpecialty[]>, Error, TSpecialty[]>({
    queryKey: [Specialty.SpecialtyKey, params],
    queryFn: () =>
      apiService
        .get(Specialty.SpecialtyPath, { params })
        .then(({ data }) => data),
    select: ({ data }) => data,
  });
};

export const useGetProfessionsById = (id: TSpecialty['id']) => {
  return useQuery<TSpecialty>({
    queryKey: [Specialty.SpecialtyKey, id],
    queryFn: () =>
      apiService
        .get(`${Specialty.SpecialtyPath}/${id}`)
        .then(({ data }) => data),
  });
};
