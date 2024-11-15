import type { AxiosResponse } from 'axios';
import { toast } from 'sonner';

export const responseInterceptor = (response: AxiosResponse) => {
  if (response.data?.code > 300) {
    toast.error('Ошибка!',{
      description: response.data?.message,
    });
  }

  return response;
};
