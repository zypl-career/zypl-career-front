'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { NextCard } from '@entities';
import { useGetProfessions } from '../../../services';
import { Spinner } from '@ui';

export const CardsSection = () => {
  const specialtyApi = useGetProfessions();

  const clusterMap = useMemo(
    () =>
      specialtyApi.data
        ? new Map(
            specialtyApi.data.map((profession) => [
              profession.clusterName,
              profession,
            ]),
          )
        : new Map(),
    [specialtyApi.data],
  );

  return (
    <section className="theme:bg-primaryBg theme:text-primary theme:border-primary theme:border-y">
      <div className="grid lg:grid-cols-2 py-14 pb-28 container">
        {specialtyApi.isLoading ? (
          <Spinner />
        ) : (
          Array.from(clusterMap.entries()).map(([clusterName, profession]) => (
            <Link key={clusterName} href={`/profession/${profession.id}`}>
              <NextCard title={clusterName} />
            </Link>
          ))
        )}
      </div>
    </section>
  );
};
