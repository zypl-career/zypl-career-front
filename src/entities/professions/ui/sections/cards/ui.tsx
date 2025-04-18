'use client';

import Link from 'next/link';
import { NextCard } from '@entities';
import { useGetProfessions } from '../../../services';
import { Spinner } from '@ui';

export const CardsSection = () => {
  const specialtyApi = useGetProfessions();

  return (
    <section className="theme:bg-primaryBg theme:text-primary theme:border-primary theme:border-y">
      <div className="grid lg:grid-cols-2 py-14 pb-28 container gap-x-36">
        {specialtyApi.isLoading ? (
          <Spinner />
        ) : (
          specialtyApi.data?.map((profession) => (
            <Link
              key={profession.clusterName}
              href={`/profession/${profession.id}`}
              className="inline self-baseline"
            >
              <NextCard title={profession.clusterName} />
            </Link>
          ))
        )}
      </div>
    </section>
  );
};
