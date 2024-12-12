import { useQuery } from '@tanstack/react-query';
import { apiService } from '@api';
import { TResponse } from '@types';
import { TArticleData, TArticleDataRequest } from './types';

export const useArticles = (params?: TArticleDataRequest) => {
  return useQuery<TResponse<TArticleData[]>>({
    queryKey: ['articles', params],
    queryFn: () =>
      apiService.get('article/get', { params }).then(({ data }) => data),
  });
};

export const useArticleId = (id: TArticleData['id']) => {
  return useQuery<TArticleData>({
    queryKey: ['articles', id],
    queryFn: () => apiService.get(`article/get/${id}`).then(({ data }) => data),
  });
};
