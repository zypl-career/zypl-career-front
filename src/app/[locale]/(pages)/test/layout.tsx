import { TestProvider } from '@/shared';
import { PropsWithChildren } from 'react';

const TestPage = ({ children }: PropsWithChildren) => {
  return <TestProvider>{children}</TestProvider>;
};

export default TestPage;
