'use client';

import { FC, PropsWithChildren, useMemo, useState } from 'react';
import { TestContext } from './context';
import { TTestRequest } from './types';
import { feedbackOptions } from '@/entities/values/ui/content/constants';
import { CARDS_DATA_INTERES } from '@/entities/interests/ui/cards/constants';

export const TestProvider: FC<PropsWithChildren> = ({ children }) => {
  const [test, setTest] = useState<Partial<TTestRequest>>({
    name: 'Sample Name',
    first: feedbackOptions.map(() => 0),
    second: CARDS_DATA_INTERES.map(() => ''),
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
    seventh: '',
    time_spent: 120,
  });

  const defaultValue = useMemo(
    () => ({
      test,
      setTest,
    }),
    [test],
  );

  return (
    <TestContext.Provider value={defaultValue}>
      {children}
    </TestContext.Provider>
  );
};
