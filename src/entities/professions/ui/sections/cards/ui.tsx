'use client';

import Link from 'next/link';
import { NextCard } from '@entities';
import { useGetProfessions } from '../../../services';
import { Spinner } from '@ui';

export const CardsSection = () => {
  const specialtyApi = useGetProfessions();
  return (
    <section className="theme:bg-primaryBg theme:text-primary theme:border-primary theme:border-y">
      <div className="grid lg:grid-cols-2 py-14 pb-28 container">
        {specialtyApi.isLoading ? (
          <Spinner />
        ) : (
          specialtyApi.data?.map((profession, index) => (
            <Link key={index} href={`/profession/${profession?.id}`}>
              <NextCard title={profession.clusterName} />
            </Link>
          ))
        )}
      </div>
    </section>
  );
};
