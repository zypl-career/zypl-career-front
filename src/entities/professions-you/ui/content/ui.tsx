'use client';

import { useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';

import {
  NextEducational,
  TABLE_DATA,
  useResultTest,
  isTestAuth,
  useGetProfessions,
} from '@entities';
import { Button, Spinner } from '@ui';
import { ArrowIcon } from '@icons';
import { useTestStore } from '@providers';

const limit = 10;

export const ContentProfessions = () => {
  const { test } = useTestStore();
  const { data, isLoading: isLoadingTest } = useResultTest(test);
  const professionsApi = useGetProfessions();
  const [page, setPage] = useState(1);
  const t = useTranslations('ContentProfessions');

  const isPayload = isTestAuth(data);
  const isLoading = professionsApi.isLoading || isLoadingTest;

  const professions = useMemo(
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
        .map((item, idx) => ({
          ...item,
          progress:
            idx !== 0 ? Math.min(item.progress + 50, 100) : item.progress,
        }))
        .sort((a, b) => (b.progress || 0) - (a.progress || 0))
        .map((item) => ({
          ...item,
          professions: professionsApi.data?.find(
            (itm) => itm.clusterTag === item.title,
          ),
        }))
        .flatMap((item) => item.professions)
        .filter((item) => item),
    [data?.payload, isPayload, professionsApi.data],
  );

  return (
    <div className="lg:px-28">
      <div className="py-10">
        <h3 className="font-semibold text-3xl pb-5">{t('title')}</h3>
        <p className="text-gray-600 lg:w-[800px] pb-5">{t('description')}</p>
        <hr className="bg-gray-900" />
      </div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-2">
          {isLoading ? (
            <Spinner />
          ) : (
            professions
              ?.slice((page - 1) * limit, page * limit)
              ?.map((prof, i) => (
                <NextEducational
                  key={i}
                  title={prof?.clusterName || ''}
                  href={`/profession/${prof?.id}`}
                />
              ))
          )}
        </div>
      </div>
      <div className="flex items-center space-x-4 my-4">
        <Button
          variant="white"
          startIcon={<ArrowIcon className="fill-black rotate-180" />}
          rounded="full"
          disabled={isLoading || page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          {t('previous')}
        </Button>
        <Button
          variant="white"
          endIcon={<ArrowIcon className="fill-black" />}
          rounded="full"
          disabled={isLoading || page === Math.ceil(professions.length / limit)}
          onClick={() => setPage((prev) => prev + 1)}
        >
          {t('next')}
        </Button>
      </div>
    </div>
  );
};
