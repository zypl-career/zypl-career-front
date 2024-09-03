'use client';

import { FC } from 'react';
import { VideoHero } from '@/shared';
import type { TVideoHeroProps } from '.';

import Image from 'next/image';

export const VideoGuideHero: FC<TVideoHeroProps> = () => {
  return (
    <div className="bg-white">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="lg:w-96 pt-24 flex justify-center order-1 md:order-2">
          <Image src={VideoHero} alt="video-hero" className="w-52 h-52" />
        </div>
        <div className="py-5 md:py-32 order-2 md:order-1">
          <p className="text-2xl md:text-5xl font-bold md:pb-8">
            Видео с руководством пользователя
          </p>
          <p className="text-gray-600">
            Просмотрите короткие видео, демонстрирующие ключевые разделы
            веб-сайта, чтобы узнать, как получить максимальную отдачу от моего
            будущего.
          </p>
        </div>
      </div>
    </div>
  );
};
