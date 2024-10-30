'use client';

import { Button, Input, PaperPlane } from '@/shared';
import { MoreCard, moreData } from '@/entities';
import { useTranslations } from 'next-intl';

export const CareerTips = () => {
  const t = useTranslations('CareerTips');

  return (
    <section className="bg-[#F8F8F8] theme:bg-primaryBg theme:text-primary">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="py-5 md:py-32">
          <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
            {t('title')}
          </p>
          <p className="font-bold text-gray-600 py-2 theme:text-primary">
            {t('subscribePrompt')}
          </p>
          <p className="md:w-[800px] text-gray-500 theme:text-primary">
            {t('description')}
          </p>
          <div className="py-5">
            <Input
              variant="outline"
              className="md:w-[360px]"
              label={t('emailLabel')}
            />
            <div className="py-5">
              <Button
                showRightArrowIcon
                variant="default"
                size="subscribe"
                rounded="full"
              >
                {t('subscribeButton')}
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-5 md:py-14">
          <PaperPlane />
        </div>
      </div>

      <div className="container grid grid-rows-1 lg:grid-cols-3 md:grid-cols-2 gap-24 pb-4 lg:pb-10">
        {moreData.map((card, index) => (
          <MoreCard
            key={index}
            imageSrc={card.imageSrc}
            imageAlt={card.imageAlt}
            imageHeight={card.imageHeight}
            imageWidth={card.imageWidth}
            title={card.title}
            date={card.date}
            buttonText={card.buttonText}
          />
        ))}
      </div>
    </section>
  );
};
