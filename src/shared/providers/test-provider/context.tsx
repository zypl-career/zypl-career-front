/* eslint-disable @typescript-eslint/no-empty-function */
'use client';

import { createContext } from 'react';
import { TTestContext } from './types';
import { feedbackOptions } from '@/entities/values/ui/content/constants';
import { CARDS_DATA_INTERES } from '@/entities/interests/ui/cards/constants';

export const TestContext = createContext<TTestContext>({
  test: {
    name: 'Sample Name',
    first: feedbackOptions.map(() => 0),
    second: CARDS_DATA_INTERES.map(() => ''),
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
    seventh: '',
    time_spent: 120,
  },
  setTest: () => {},
});
