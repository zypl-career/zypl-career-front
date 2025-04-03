'use client';

import { FC } from 'react';
import { useParams } from 'next/navigation';
import { useGetProfessionsById } from '@entities';
import { Badge, Spinner } from '@ui';

export const ReviewSociology: FC = () => {
  const params = useParams();
  const professionApi = useGetProfessionsById(String(params.id));
  return (
    <div className="bg-white rounded-2xl border border-gray-200 lg:p-12">
      <h2 className="font-bold text-xl mb-2">Обзор</h2>
      <p>{professionApi.data?.specialtyDescription}</p>
      <main className="space-y-3 mt-4">
        <h3 className="font-bold text-3xl">Карьераный возможности</h3>
        <div className="flex flex-wrap items-center gap-3">
          {professionApi.isLoading ? (
            <Spinner />
          ) : (
            professionApi.data?.careerOpportunities.map((item, index) => (
              <Badge key={index} title={item} />
            ))
          )}
        </div>
      </main>
    </div>
  );
};
