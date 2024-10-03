'use client';

import { getAccessToken } from '..';

export const getUser = () => {
  const token = getAccessToken();

  return { isAuth: !!token?.access || false };
};
