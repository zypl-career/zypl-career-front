import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { apiService } from '@api';
import { TResponse } from '@types';
import { removeEmpty, toUnique } from '@utils';
import { Description, TArticleData, TArticleDataRequest } from './types';

export const useArticles = (params?: TArticleDataRequest) => {
  return useQuery<TResponse<TArticleData[]>>({
    queryKey: ['articles', params],
    queryFn: () =>
      apiService.get('article/get', { params }).then(({ data }) => data),
    select(data) {
      const description: TArticleData[] = data.data.map((item) => {
        const parsedDescription = JSON.parse(item.description) as Description[];
        const descriptionItem = parsedDescription.filter(
          (desc) => desc.type !== 'file',
        );
        return descriptionItem?.length
          ? { ...item, description: descriptionItem }
          : {};
      }) as TArticleData[];

      data.data = description.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
        const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
        return dateB.getTime() - dateA.getTime();
      });

      return removeEmpty(data);
    },
  });
};

export const useArticleTags = () => {
  return useQuery<string[], Error, string[]>({
    queryKey: ['articleTag'],
    queryFn: () => apiService.get('article/hashtags').then(({ data }) => data),
    placeholderData: keepPreviousData,
    select: (data) => removeEmpty(toUnique(data.flatMap((article) => article))),
  });
};

export const useArticleId = (id: TArticleData['id']) => {
  return useQuery<TArticleData>({
    queryKey: ['articles', id],
    queryFn: () => apiService.get(`article/get/${id}`).then(({ data }) => data),
  });
};
