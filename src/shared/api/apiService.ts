import axios from 'axios';

import {
  responseInterceptor,
  requestInterceptor,
  errorInterceptor,
} from './utils';

export const apiService = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

apiService.interceptors.response.use(responseInterceptor, errorInterceptor);
apiService.interceptors.request.use(requestInterceptor);
