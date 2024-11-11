'use client';

import Image from 'next/image';
import { CareerProfile } from '@/shared';
import { useTranslations } from 'next-intl';

export const CareerProfileHero = () => {
  const t = useTranslations('careerProfileHero');

  return (
    <div className="bg-white">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="lg:w-96 py-24 flex justify-center order-1 md:order-2">
          <Image src={CareerProfile} alt="video-hero" className="w-52 h-52" />
        </div>
        <div className="py-5 md:py-32 order-2 md:order-1">
          <p className="text-2xl md:text-5xl font-bold md:pb-8">{t('title')}</p>
          <p className="md:w-[522px] text-gray-600">{t('description')}</p>
        </div>
      </div>
    </div>
  );
};
