import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { apiService } from '@api';
import { toUnique, removeEmpty } from '@utils';
import { TResponse } from '@types';
import { TCourseData, TCourseParams } from './types';

export const useCourses = (params?: TCourseParams) => {
  return useQuery<TResponse<TCourseData[]>>({
    queryKey: ['courses', params],
    queryFn: () =>
      apiService.get('course/get', { params }).then(({ data }) => data),
  });
};

export const useCoursesTag = (params?: TCourseParams) => {
  return useQuery<TResponse<TCourseData[]>, Error, string[]>({
    queryKey: ['coursesTag', params],
    queryFn: () =>
      apiService.get('course/get', { params }).then(({ data }) => data),
    placeholderData: keepPreviousData,
    select: (data) =>
      removeEmpty(toUnique(data.data.flatMap((course) => course?.tags))),
  });
};

export const useCourseById = (id: TCourseData['id']) => {
  return useQuery<TCourseData>({
    queryKey: ['courses', id],
    queryFn: () => apiService.get(`course/get/${id}`).then(({ data }) => data),
    enabled: !!id,
  });
};
