import axios from 'axios';

import {
  responseInterceptor,
  requestInterceptor,
  errorInterceptor,
} from './utils';

export const apiService = axios.create({
  baseURL: 'https://zypllback-vpq7gp0b.b4a.run/',
});

apiService.interceptors.response.use(responseInterceptor, errorInterceptor);
apiService.interceptors.request.use(requestInterceptor);
