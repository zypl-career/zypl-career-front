'use client';

import { TTestRequest } from '@providers';

export const saveTest = (test: Partial<TTestRequest>) => {
  localStorage.setItem('test', JSON.stringify(test));
};

export const getTest = (): TTestRequest => {
  return JSON.parse(globalThis?.window?.localStorage?.getItem('test') ?? '{}');
};
