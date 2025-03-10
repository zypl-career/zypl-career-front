'use client';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { TTestRequest } from './types';

export type TestStore = {
  test: TTestRequest;
};

export type TestActions = {
  setTest: (data: TestStore['test']) => void;
  setTestInteraction: (
    value: string | number,
    index: number,
    key?: 'first' | 'second',
  ) => void;
  toggleTest: (value: string, key: keyof TestStore['test']) => void;
  setTestTime: (test: number) => void;
};

export const useTestStore = create<TestStore & TestActions>()(
  persist(
    (set, get) => ({
      test: {
        name: 'Sample Name',
        first: new Array(29).fill(0),
        second: new Array(18).fill(''),
        third: '',
        fourth: '',
        fifth: '',
        sixth: '',
        seventh: '',
        time_spent: 120,
      },
      setTest: (newTest) => set({ test: { ...get().test, ...newTest } }),
      setTestInteraction: (value, index, key = 'first') =>
        set({
          test: {
            ...get().test,
            [key]: get().test?.[key]?.map((el, i) =>
              i === index ? value : el,
            ),
          },
        }),
      toggleTest: (value, key) =>
        set({
          test: {
            ...get().test,
            [key]: value,
          },
        }),
      setTestTime: (test) => set({ test: { ...get().test, time_spent: test } }),
    }),
    {
      name: 'test',
      storage: createJSONStorage(() => globalThis?.window?.localStorage),
    },
  ),
);
