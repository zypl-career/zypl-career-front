'use server';

import { PropsWithChildren } from 'react';
import { ThemesLayout } from '@/features/themes';

const MainLayout = ({ children }: PropsWithChildren) => {
  return children ? <ThemesLayout>{children}</ThemesLayout> : null;
};

export default MainLayout;
