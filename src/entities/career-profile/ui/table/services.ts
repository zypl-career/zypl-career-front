import { apiService } from '@/shared/api';
import { TTestRequest, TTestResponse } from '@/shared/providers/test-provider';
import { useQuery } from '@tanstack/react-query';

export const useResultTest = (test: Partial<TTestRequest>) => {
  return useQuery<TTestResponse, Error, Partial<TTestRequest>>({
    queryKey: ['resultTest'],
    queryFn: () => apiService.post('test', test).then(({ data }) => data),
  });
};
