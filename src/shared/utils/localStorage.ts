'use client';

import { TUserData } from '@entities';

type TAccessToken = {
  access: string;
  refresh: string;
};

export const getAccessToken = (): TAccessToken => {
  return JSON.parse(
    globalThis?.window?.localStorage?.getItem('access') ?? '{}',
  );
};

export const setAccessToken = (token: TAccessToken) => {
  globalThis?.window?.localStorage?.setItem('access', JSON.stringify(token));
};

export const removeAccessToken = () => {
  return globalThis?.window?.localStorage?.removeItem('access');
};

export const setUserStorage = (user: TUserData) => {
  globalThis?.window?.localStorage?.setItem('user', JSON.stringify(user));
};

export const getUserStorage = (): TUserData | null => {
  return JSON.parse(
    globalThis?.window?.localStorage?.getItem('user') ?? 'null',
  );
};

export const removeUserStorage = () => {
  return globalThis?.window?.localStorage?.removeItem('user');
};
