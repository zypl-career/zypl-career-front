import { apiService } from '@/shared/api';
import { TTestRequest, TTestResponseWithoutAuth } from '@/shared/providers/test-provider';
import { useQuery } from '@tanstack/react-query';

export const useResultTest = (test: Partial<TTestRequest>) => {
  return useQuery<Partial<TTestRequest>, Error, TTestResponseWithoutAuth>({
    queryKey: ['resultTest'],
    queryFn: () => apiService.post('test', test).then(({ data }) => data),
  });
};
