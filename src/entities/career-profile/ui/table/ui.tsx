'use client';

import { FC, useEffect } from 'react';
import { Button, differenceInMinutes } from '@/shared';
import { TABLE_DATA, type TResultsTableProps } from '.';

import Image from 'next/image';
import { useResultTest } from './services';
import { useTest } from '@/shared/providers/test-provider';
import { apiService } from '@/shared/api';

export const TableResults: FC<TResultsTableProps> = ({ title }) => {
  const { test } = useTest();
  const { data } = useResultTest(test);

  useEffect(() => {
    const timeStart = new Date(localStorage.getItem('timeStart') || new Date());
    const timeEnd = new Date();
    console.log(differenceInMinutes(timeStart, timeEnd));
    apiService.post('test', test).then(({ data }) => {
      console.log(data);
    });
    // handleTestTime(differenceInMinutes(timeStart, timeEnd));
  }, []);

  console.log(data);
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold my-2">{title}</h3>
      <div className="divide-y divide-gray-200 p-4 bg-white shadow w-full rounded-xl">
        {TABLE_DATA.map((item) => (
          <div key={item.id} className="flex justify-between items-center py-7">
            <div>
              {item.id}. {item.title}
            </div>
            <div className="w-64">
              <Image src={item.progressImage} alt="progress" />
            </div>
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
