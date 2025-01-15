'use client';
import { getAccessToken, getUserStorage } from '@utils';

export const getUser = () => {
  const token = getAccessToken();
  const user = getUserStorage();

  return { isAuth: !!token?.access || false, user };
};
