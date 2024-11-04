'use client';
import Image from 'next/image';
import { Hero as HeroImg, TimeIcon } from '@/shared';
import { ApproveTestModal } from './components';
import { useTranslations } from 'next-intl';

export const Hero = () => {
  const t = useTranslations('HomePage');
  return (
    <div className="flex flex-col md:flex-row justify-between bg-[#F8F8F8] theme:bg-primaryBg">
      <div className="py-5 container md:mx-24 md:py-32">
        <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8 text-primary">
          {t('title')}
        </p>
        <p className="md:w-[522px] text-gray-600 text-primary">{t('about')}</p>
        <div className="hidden md:flex gap-2 py-5">
          <ApproveTestModal />
          <div className="flex items-center justify-center gap-1 py-2">
            <TimeIcon />
            <p className="font-thin">{t('time')}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center md:justify-end py-5">
        <Image src={HeroImg} alt="hero" className="lg:w-[1180px]" />
      </div>
      <div className="sm:hidden flex flex-col container gap-2 py-5">
        <ApproveTestModal />
        <div className="flex items-center justify-center gap-1 py-2">
          <TimeIcon />
          <p className="font-thin">{t('time')}</p>
        </div>
      </div>
    </div>
  );
};
