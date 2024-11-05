import { FeedbackContent, FeedbackValues } from '@/entities';
import { CardValue, cardData } from '@/shared';
import { useTranslations } from 'next-intl';

export const CareerValues = () => {
  const t = useTranslations('careerValues');

  return (
    <section className="flex gap-5 py-8">
      <CardValue data={cardData} />
      <div>
        <h2 className="font-bold text-2xl">{t('heading')}</h2>
        <div className="text-gray-600 theme:text-primary">
          <p>{t('description')}</p>
        </div>
        <FeedbackValues />
        <FeedbackContent />
      </div>
    </section>
  );
};
