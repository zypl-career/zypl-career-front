'use client';

import { FC, useEffect, useMemo } from 'react';
import { Button, ProgressTest, differenceInMinutes } from '@/shared';
import { TABLE_DATA, type TResultsTableProps } from '.';

import { useResultTest } from './services';
import { useTest } from '@/shared/providers/test-provider';
import Link from 'next/link';

export const TableResults: FC<TResultsTableProps> = ({ title }) => {
  const { test, handleTestTime } = useTest();
  const { data, isLoading } = useResultTest(test);

  useEffect(() => {
    const timeStart = new Date(localStorage.getItem('timeStart') || new Date());
    const timeEnd = new Date();
    handleTestTime(differenceInMinutes(timeStart, timeEnd));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const payload = useMemo(
    () =>
      TABLE_DATA.map((item) => ({
        ...item,
        progress: +(Number(data?.payload[item.id - 1]) * 100).toFixed(2),
      })).sort((a, b) => (b.progress || 0) - (a.progress || 0)),
    [data?.payload],
  );

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold my-2">{title}</h3>
      <div className="divide-y divide-gray-200 p-4 bg-white shadow w-full rounded-xl">
        {payload?.map((item, i) => (
          <div key={i} className="flex justify-between items-center py-7">
            <div>
              {i + 1}. {item.title}
            </div>
            <ProgressTest progress={item.progress} />
          </div>
        ))}
      </div>
      <div className="py-4">
        <Button
          size="cluster"
          rounded="full"
          disabled={isLoading}
          showRightArrowIcon
          asChild
        >
          <Link href="/professions-you">Посмотреть подходящие професии</Link>
        </Button>
      </div>
    </div>
  );
};
