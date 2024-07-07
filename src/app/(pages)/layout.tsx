import { PropsWithChildren } from 'react';
import { Header } from '@/widgets';

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
