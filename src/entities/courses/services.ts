import { apiService } from '@api';
import { TResponse } from '@types';
import { useQuery } from '@tanstack/react-query';
import { TCourseData } from './types';

export const useCourses = () => {
  return useQuery<TResponse<TCourseData[]>>({
    queryKey: ['courses'],
    queryFn: () => apiService.get('course/get').then(({ data }) => data),
  });
};

export const useCourseById = (id: TCourseData['id']) => {
  return useQuery<TCourseData>({
    queryKey: ['courses', id],
    queryFn: () => apiService.get(`course/get/${id}`).then(({ data }) => data),
    enabled: !!id,
  });
};
