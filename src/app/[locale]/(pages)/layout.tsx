import { PropsWithChildren } from 'react';
import { ThemesLayout } from '@features';

const MainLayout = ({ children }: PropsWithChildren) => {
  return <ThemesLayout>{children}</ThemesLayout>;
};

export default MainLayout;
