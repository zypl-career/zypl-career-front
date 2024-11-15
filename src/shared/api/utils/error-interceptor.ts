import { AxiosError } from 'axios';
import { AxiosErrorResponse } from '../types';
import { errorStatus } from './error-statuses';
import { ErrorType, parseError } from '@/shared';

export const errorInterceptor = (error: AxiosError<AxiosErrorResponse>) => {
  const status = Number(error.response?.status) ?? 0;
  
  
  if (status in errorStatus) {
    errorStatus[status](error.message || '');
  }
  
  if (error.response?.data) {
    parseError(error.response.data as unknown as ErrorType);
  }
  return Promise.reject(error);
};
