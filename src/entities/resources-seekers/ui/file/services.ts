import { apiService } from '@api';
import { TArticleData } from '@ui';
import { removeEmpty } from '@utils';
import { useQuery } from '@tanstack/react-query';
import { TResponse } from '@types';
import { Description, ResourcesSeekerFiles } from './model/types';

export const useResourcesSeekerFiles = () => {
  return useQuery<TResponse<TArticleData[]>, Error, ResourcesSeekerFiles[]>({
    queryKey: ['resources-seeker-files'],
    queryFn: () => apiService.get('article/get').then(({ data }) => data),
    select: (articles) => {
      const description: ResourcesSeekerFiles[] = articles.data.map((item) => {
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
