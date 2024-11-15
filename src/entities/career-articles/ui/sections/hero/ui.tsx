import { useTranslations } from 'next-intl';
import { CareerArticles } from '@/shared';

export const HeroCareerArticles = () => {
  const t = useTranslations('careerArticles');

  return (
    <section className="bg-white">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="lg:w-96 py-24 flex justify-center order-1 md:order-2">
          <CareerArticles />
        </div>
        <div className="py-5 md:py-32 order-2 md:order-1">
          <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
            {t('title')}
          </p>
          <p className="md:w-[522px] text-gray-600">{t('description')}</p>
        </div>
      </div>
    </section>
  );
};
