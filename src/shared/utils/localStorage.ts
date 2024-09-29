'use client';

type TAccessToken = {
  access: string;
  refresh: string;
};

export const getAccessToken = (): TAccessToken => {
  return JSON.parse(globalThis?.window?.localStorage?.getItem('access') ?? '{}');
};

export const setAccessToken = (token: TAccessToken) => {
  globalThis?.window?.localStorage?.setItem('access', JSON.stringify(token));
};

export const removeAccessToken = () => {
  return globalThis?.window?.localStorage?.removeItem('access');
};
