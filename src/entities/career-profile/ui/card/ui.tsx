'use client';

import { Button, TimeIcon } from '@/shared';
import { useTranslations } from 'next-intl';

export const CardFuture = () => {
  const t = useTranslations('cardFuture');

  return (
    <div className="py-5 px-5 mt-8 p-4 bg-white shadow w-full lg:w-[580px] rounded-xl">
      <h3 className="font-bold text-lg">{t('title')}</h3>
      <p className="text-gray-600">{t('description')}</p>
      <div className="pt-5 lg:pt-10 lg:flex items-center gap-2">
        <Button variant="subscribe" showRightArrowIcon size="subscribe">
          {t('buttonText')}
        </Button>
        <div className="flex items-center justify-center gap-1 py-2">
          <TimeIcon />
          <p className="font-thin">{t('timeEstimate')}</p>
        </div>
      </div>
    </div>
  );
};
