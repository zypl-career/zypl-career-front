'use client';

import { apiService } from '@api';
import { Description, ResourcesSeekerFiles, TArticleData } from '@ui';
import { removeEmpty } from '@utils';
import { useQuery } from '@tanstack/react-query';
import { TResponse } from '@types';

export const useResourcesSeekerFiles = () => {
  return useQuery<TResponse<TArticleData[]>, Error, ResourcesSeekerFiles[]>({
    queryKey: ['resources-seeker-files'],
    queryFn: () =>
      apiService
        .get('article/get', {
          params: {
            sections: ['Resources for Job Seekers'],
          },
        })
        .then(({ data }) => data),
    select: (articles) => {
      const description = articles.data.map((item) => {
        const parsedDescription = JSON.parse(item.description) as Description[];
        const descriptionItem = parsedDescription.filter(
          (desc) => desc.type === 'file',
        );
        return descriptionItem?.length
          ? { ...item, description: descriptionItem }
          : {};
      }) as ResourcesSeekerFiles[];

      return (
        removeEmpty(
          description.sort(
            (a, b) =>
              new Date(String(b.createdAt)).getTime() -
              new Date(String(a.createdAt)).getTime(),
          ),
        ) ?? []
      );
    },
  });
};
