import type { InternalAxiosRequestConfig } from 'axios';
import { getAccessToken } from '@utils';

export const requestInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  authInterceptor(config);
  return config;
};

const authInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  const authToken = getAccessToken();
  if (authToken?.access) {
    config.headers = Object.assign({}, config.headers, {
      Authorization: `${authToken.access}`,
    });
  }

  return config;
};
