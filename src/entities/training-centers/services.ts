import { apiService } from '@/shared/api';
import { useQuery } from '@tanstack/react-query';

export const useEducationCenter = () => {
  return useQuery({
    queryKey: ['education-center'],
    queryFn: () => apiService.get('education-center/get').then(({ data }) => data),
  });
};
