import { TTestRequest } from '../providers/test-provider';

export const saveTest = (test: Partial<TTestRequest>) => {
  localStorage.setItem('test', JSON.stringify(test));
};

export const getTest = (): TTestRequest => {
  return JSON.parse(localStorage.getItem('test') ?? '{}');
};
