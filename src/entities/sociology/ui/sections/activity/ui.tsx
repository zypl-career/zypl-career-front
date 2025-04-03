'use client';

import { FC, useMemo } from 'react';
import { useGetProfessions, useGetProfessionsById } from '@entities';
import { useParams } from 'next/navigation';
import { Spinner } from '@ui';

export const ActivitySociology: FC = () => {
  const params = useParams();
  const professionApi = useGetProfessionsById(String(params.id));
  const professionsApi = useGetProfessions();

  const professions = useMemo(
    () =>
      professionsApi.data?.filter(
        (p) => p.clusterName === professionApi.data?.clusterName,
      ),
    [professionApi.data?.clusterName, professionsApi.data],
  );

  const isLoading = professionApi.isLoading || professionsApi.isLoading;

  return (
    <div className="grid md:grid-cols-3 gap-5 my-5">
      {isLoading ? (
        <Spinner />
      ) : (
        professions?.map((specialtyItem) => (
          <section
            key={specialtyItem.id}
            className="relative self-baseline rounded-xl border border-gray-200 bg-white p-4"
          >
            <dl className="flex flex-col divide-y">
              <div className="py-4">
                <dt className="text-gray-500">Номи ихтисос</dt>
                <dd className="font-medium">{specialtyItem.name}</dd>
              </div>
              <div className="py-4">
                <dt className="text-gray-500">Номи муассисаи таълимӣ</dt>
                <dd className="font-medium">{specialtyItem.universityName}</dd>
              </div>
              <div className="py-4">
                <dt className="text-gray-500">Маблағи таҳсил бо (сомонӣ)</dt>
                <dd className="font-medium">{specialtyItem.monthlyIncome}</dd>
              </div>
              <div className="py-4">
                <dt className="text-gray-500">Шакли таҳсил</dt>
                <dd className="font-medium">{specialtyItem.specialtyCode}</dd>
              </div>
              <div className="py-4">
                <dt className="text-gray-500">Таҳсилот</dt>
                <dd className="font-medium">{specialtyItem.clusterName}</dd>
              </div>
              <div className="py-4">
                <dt className="text-gray-500">Рамзи ихтисос</dt>
                <dd className="font-medium">{specialtyItem.specialtyCode}</dd>
              </div>
              <div className="py-4">
                <dt className="text-gray-500">Забони таҳсил</dt>
                <dd className="font-medium">{specialtyItem.languageOfStudy}</dd>
              </div>
            </dl>
          </section>
        ))
      )}
    </div>
  );
};
