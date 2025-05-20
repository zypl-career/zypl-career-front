import type { InternalAxiosRequestConfig } from 'axios';
import { useUserStore } from '@providers';

export const requestInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  authInterceptor(config);
  return config;
};

const authInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  const access = useUserStore.getState().userData?.access;

  if (access) {
    config.headers = Object.assign({}, config.headers, {
      Authorization: `${access}`,
    });
  }

  return config;
};
