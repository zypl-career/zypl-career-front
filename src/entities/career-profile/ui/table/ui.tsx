'use client';

import { FC, useEffect, useMemo } from 'react';
import { Button, ProgressTest, differenceInMinutes } from '@/shared';
import { TABLE_DATA, type TResultsTableProps } from '.';

import { useResultTest } from './services';
import { useTestStore } from '@providers';
import Link from 'next/link';
import { TableLoading } from './loading';
import { isTestAuth } from './utils';
import { useTranslations } from 'next-intl';

export const TableResults: FC<TResultsTableProps> = () => {
  const t = useTranslations('tableResults');
  const { test, setTestTime } = useTestStore();
  const { data, isLoading } = useResultTest(test);

  useEffect(() => {
    const timeStart = new Date(localStorage.getItem('timeStart') || new Date());
    const timeEnd = new Date();
    setTestTime(differenceInMinutes(timeStart, timeEnd));
  }, [setTestTime]);

  const isPayload = isTestAuth(data);

  const payload = useMemo(
    () =>
      TABLE_DATA.map((item) => ({
        ...item,
        progress: isPayload
          ? parseInt((data?.payload[item.id - 1] * 100).toFixed(2))
          : Number(
              ((data?.payload?.resultTest?.[item.id - 1] ?? 0) * 100).toFixed(
                2,
              ),
            ),
      }))
        .sort((a, b) => (b.progress || 0) - (a.progress || 0))
        .map((item, index) =>
          index > 0
            ? { ...item, progress: Math.min(item.progress + 50, 100) }
            : item,
        )
        .sort((a, b) => (b.progress || 0) - (a.progress || 0)),
    [data?.payload, isPayload],
  );

  return (
    <>
      <h3 className="text-2xl font-bold my-2">{t('title')}</h3>
      <div className="divide-y divide-gray-200 p-4 bg-white shadow w-full rounded-xl">
        {isLoading ? (
          <TableLoading />
        ) : (
          payload?.map((item, i) => (
            <div
              key={i}
              className="flex flex-col lg:flex-row lg:justify-between items-center py-7"
            >
              <span>{item.title}</span>
              <ProgressTest progress={item.progress} />
            </div>
          ))
        )}
      </div>
      <div className="py-4">
        <Button
          size="cluster"
          rounded="full"
          disabled={isLoading}
          showRightArrowIcon
          asChild
        >
          <Link href="/professions-you">{t('viewProfessions')}</Link>
        </Button>
      </div>
    </>
  );
};
