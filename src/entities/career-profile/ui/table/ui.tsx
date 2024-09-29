'use client';

import { FC, useEffect, useMemo } from 'react';
import { Button, ProgressTest, differenceInMinutes } from '@/shared';
import { TABLE_DATA, type TResultsTableProps } from '.';

import { useResultTest } from './services';
import { useTest } from '@/shared/providers/test-provider';

export const TableResults: FC<TResultsTableProps> = ({ title }) => {
  const { test, handleTestTime } = useTest();
  const { data } = useResultTest(test);

  useEffect(() => {
    const timeStart = new Date(localStorage.getItem('timeStart') || new Date());
    const timeEnd = new Date();
    handleTestTime(differenceInMinutes(timeStart, timeEnd));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const payload = useMemo(
    () => data?.payload?.sort((a, b) => b - a).map((p) => +p.toFixed(2) * 100),
    [data?.payload],
  );

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold my-2">{title}</h3>
      <div className="divide-y divide-gray-200 p-4 bg-white shadow w-full rounded-xl">
        {payload?.map((item, i) => (
          <div key={i} className="flex justify-between items-center py-7">
            <div>
              {i + 1}. {TABLE_DATA[i].title}
            </div>
            <ProgressTest progress={item} />
          </div>
        ))}
      </div>
      <div className="py-4">
        <Button variant="subscribe" size="cluster" showRightArrowIcon={true}>
          Посмотреть подходящие професии
        </Button>
      </div>
    </div>
  );
};
