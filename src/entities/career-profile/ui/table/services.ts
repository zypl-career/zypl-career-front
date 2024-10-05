import { apiService } from '@/shared/api';
import {
  TTestRequest,
  TTestResponse,
  TTestResponseWithoutAuth,
} from '@/shared/providers/test-provider';
import { useQuery } from '@tanstack/react-query';

export const useResultTest = (test: Partial<TTestRequest>) => {
  return useQuery<Partial<TTestRequest>, Error, TTestResponse | TTestResponseWithoutAuth>({
    queryKey: ['resultTest'],
    queryFn: async () => {
      return await apiService
        .post('test', test)
        .then(({ data }) => data);
    },
  });
};
