import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { apiService } from '@api';
import { TResponse } from '@types';
import { removeEmpty, touUnique } from '@utils';
import { TArticleData, TArticleDataRequest } from './types';

export const useArticles = (params?: TArticleDataRequest) => {
  return useQuery<TResponse<TArticleData[]>>({
    queryKey: ['articles', params],
    queryFn: () =>
      apiService.get('article/get', { params }).then(({ data }) => data),
  });
};

export const useArticleTags = () => {
  return useQuery<string[], Error, string[]>({
    queryKey: ['articleTag'],
    queryFn: () =>
      apiService.get('article/hashtags').then(({ data }) => data),
    placeholderData: keepPreviousData,
    select: (data) => removeEmpty(touUnique(data.flatMap((article) => article))),
  });
};

export const useArticleId = (id: TArticleData['id']) => {
  return useQuery<TArticleData>({
    queryKey: ['articles', id],
    queryFn: () => apiService.get(`article/get/${id}`).then(({ data }) => data),
  });
};
