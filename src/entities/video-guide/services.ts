import { TArticleData } from '@ui';
import { TResponse } from '@types';
import { useQuery } from '@tanstack/react-query';
import { apiService } from '@api';

export const useGetVideoGuide = () => {
  return useQuery<TResponse<TArticleData[]>, Error, TArticleData[]>({
    queryKey: ['video-guide'],
    queryFn: () =>
      apiService
        .get('article/get', {
          params: {
            sections: ['User Guide Videos'],
          },
        })
        .then(({ data }) => data),
    select: (articles) => {
      const videos = articles.data.filter((item) =>
        item.image.endsWith('.mp4'),
      );
      return videos.sort(
        (a, b) =>
          new Date(String(b.createdAt)).getTime() -
          new Date(String(a.createdAt)).getTime(),
      );
    },
  });
};
