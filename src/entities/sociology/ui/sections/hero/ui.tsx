'use client';

import { ArrowLeft } from '@icons';
import { useParams, useRouter } from 'next/navigation';
import { FC } from 'react';
import { useGetProfessionsById } from '@entities';
import { Skeleton } from '@ui';
import { useTranslations } from 'next-intl';

export const HeroSociology: FC = () => {
  const params = useParams();
  const professionApi = useGetProfessionsById(String(params.id));
  const router = useRouter();
  const t = useTranslations('ToolsInspiration.tools.professions.history');

  return (
    <div className="bg-gray-700 my-5 rounded-2xl flex items-center px-8 py-4 gap-8 divide-x divide-gray-600">
      <ArrowLeft className="cursor-pointer" onClick={() => router.back()} />
      <div className="flex flex-col px-8">
        <div className="font-bold lg:text-3xl text-[#F9FAFB] py-2">
          {professionApi.isLoading ? <Skeleton /> : professionApi.data?.name}
        </div>
        <div className="text-gray-300">
          {t('title')}{' '}
          {professionApi.isLoading ? (
            <Skeleton />
          ) : (
            <span className="font-bold">{professionApi.data?.clusterName}</span>
          )}
        </div>
      </div>
    </div>
  );
};
