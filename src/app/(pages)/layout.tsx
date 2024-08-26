'use client';
import { PropsWithChildren } from 'react';
import { Header } from '@/widgets';
import { cn, useTheme } from '@/shared';

const MainLayout = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  return (
    <main className={cn({ [`theme theme-${theme}`]: theme })}>
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
