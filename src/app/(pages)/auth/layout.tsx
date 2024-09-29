'use client';

import { getUser } from '@/shared';
import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

const AuthLayout = ({ children }: { children: ReactNode }) => {
  const { isAuth } = getUser();
  const router = useRouter();
  if (isAuth) {
    router.push('/');
  }
  return children;
};

export default AuthLayout;
