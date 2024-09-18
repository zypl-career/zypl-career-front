'use client';

import { useContext } from 'react';
import { TestContext } from './context';
import { saveTest } from '@/shared';
import { TTestRequest } from '.';

export const useTest = () => {
  const { test, setTest } = useContext(TestContext);
  
  const handleTestValue = (value: number, index: number) => {
    saveTest(({ ...test, first: test?.first?.map((el, i) => i === index ? value : el) }));
    setTest(({ ...test, first: test?.first?.map((el, i) => i === index ? value : el) }));
  };

  const handleTestInteraction = (value: string, index: number) => {
    saveTest(({ ...test, second: test?.second?.map((el, i) => i === index ? value : el) }));
    setTest(({ ...test, second: test?.second?.map((el, i) => i === index ? value : el) }));
  };  

  const handleTestString = (value: string, key: keyof Partial<TTestRequest>) => {
    saveTest(({ ...test, [key]: value }));
    setTest(({ ...test, [key]: value }));
  };

  const handleTestTime = (time: number) => {
    saveTest(({ ...test, time_spent: time }));
    setTest(({ ...test, time_spent: time }));
  };

  return { test, setTest, handleTestValue, handleTestInteraction, handleTestString, handleTestTime };
};
