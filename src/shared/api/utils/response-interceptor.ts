import type { AxiosResponse } from 'axios';
import { toast } from '@ui';

export const responseInterceptor = (response: AxiosResponse) => {  
  if (response.data) {
   return response.data 
  }
  
  if (response.data?.code > 300) {
    toast({
      title: 'Ошибка!',
      variant: 'warning',
      ...(response.data?.message ? { detail: response.data?.message } : {}),
    });
  }

  return response;
};
