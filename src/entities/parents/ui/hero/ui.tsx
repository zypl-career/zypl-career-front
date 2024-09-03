'use client';

import Image from 'next/image';
import { Parents } from '@/shared';

export const ParentsHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white lg:px-36 theme:bg-primaryBg theme:text-primary theme:border theme:border-primary">
      <div className="order-1 md:order-2 lg:w-96 py-24 md:px-16 flex justify-center">
        <Image src={Parents} alt="video-hero" />
      </div>
      <div className="order-2 md:order-1 py-5 px-2 md:py-32">
        <p className="text-2xl md:text-5xl font-bold md:pb-8">Родители</p>
        <p className="text-gray-600 theme:text-primary">
          Мы собрали информацию, инструменты и статьи, которые помогут вам
          помочь своему ребенку узнать о мире труда и изучить карьеру.
        </p>
      </div>
    </div>
  );
};
