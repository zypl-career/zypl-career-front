import axios from 'axios';

import {
  responseInterceptor,
  requestInterceptor,
  errorInterceptor,
} from './utils';

export const apiService = axios.create({
  baseURL: 'http://35.222.129.179/',
});

apiService.interceptors.response.use(responseInterceptor, errorInterceptor);
apiService.interceptors.request.use(requestInterceptor);
