'use client';

import { ArrowLeft } from '@/shared';
import { useRouter } from 'next/navigation';
import { FC } from 'react';

export const HeroSociology: FC<{ name: string, title: string }> = ({ name, title }) => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-gray-700 my-5 rounded-2xl flex items-center px-8 py-4 gap-8 divide-x divide-gray-600">
        <ArrowLeft className="cursor-pointer" onClick={() => router.back()} />
        <div className="flex flex-col px-8">
          <p className="font-bold lg:text-3xl text-[#F9FAFB] py-2">
            {title}
          </p>
          <p className="text-gray-300">
            Номи кластер: <span className="font-bold">{name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
