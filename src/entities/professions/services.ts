import { apiService } from '@api';
import { useQuery } from '@tanstack/react-query';
import { TResponse } from '@types';
import { Specialty } from './constants';
import { TSpecialty } from './types';

type TGetProfessionsParams = {
  params?: Partial<Record<keyof TSpecialty, any>>;
  options?: Partial<{
    uniqueProfession?: boolean;
  }>;
};

export const useGetProfessions = (props?: TGetProfessionsParams) => {
  const uniqueProfession = props?.options?.uniqueProfession ?? true;
  return useQuery<TResponse<TSpecialty[]>, Error, TSpecialty[]>({
    queryKey: [Specialty.SpecialtyKey, props?.params],
    queryFn: () =>
      apiService
        .get(Specialty.SpecialtyPath, {
          params: { ...props?.params, limit: 1239 },
        })
        .then(({ data }) => data),
    select: ({ data }) =>
      uniqueProfession
        ? Array.from(
            new Map(
              data.map((profession) => [profession.clusterName, profession]),
            ).entries(),
          ).map(([, profession]) => profession)
        : data,
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
