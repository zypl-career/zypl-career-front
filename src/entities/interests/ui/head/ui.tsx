import { CardsInteres } from '..';
import { useTranslations } from 'next-intl';
import { CardValue, cardData } from '@/shared';

const interestsCard = cardData.map((c) => ({
  ...c,
  isDone: c.id === '01',
  active: c.id === '02',
}));

export const InterestsHead = () => {
  const t = useTranslations('careerInterests');

  return (
    <section className="flex gap-5 py-8">
      <CardValue data={interestsCard} />
      <div>
        <h2 className="font-bold text-2xl">{t('heading')}</h2>
        <div className="text-gray-600 pb-5">
          <p>{t('description')}</p>
        </div>
        <div>
          <p className="font-semibold py-6 border-t">{t('likeQuestion')}</p>
        </div>
        <CardsInteres />
      </div>
    </section>
  );
};
