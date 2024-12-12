'use client';

import { MoreCardCareerArticles, useArticles } from '@entities';
import { LoaderArticles } from '@/entities/career-articles/ui/sections/more-card/loader';

export const CareerTips = () => {
  const articlesApi = useArticles({ limit: '3' });
  return (
    <section className="bg-[#F8F8F8] theme:bg-primaryBg theme:text-primary">
      {/* <div className="container flex flex-col md:flex-row justify-between">
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
      </div> */}

      <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-5 container pb-4 lg:pb-10">
        {articlesApi.isLoading ? (
          <>
            <LoaderArticles />
            <LoaderArticles />
            <LoaderArticles />
          </>
        ) : (
          articlesApi.data?.data.map((card) => (
            <MoreCardCareerArticles
              id={card.id}
              key={card.id}
              imageSrc={card.image}
              imageAlt={card.title}
              imageHeight={300}
              imageWidth={420}
              title={card.title}
              date={card.createdAt}
              buttonText="Подробнее"
            />
          ))
        )}
      </div>
    </section>
  );
};
