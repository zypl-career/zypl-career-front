import { useTranslations } from 'next-intl';
import { CardValue, cardData } from '@/shared';
import { MainValuesSureys } from '..';

const valuesSurveysCard = cardData.map((c, i) => ({
  ...c,
  isDone: i < 2,
  active: c.id === '03',
}));

export const ValuesSurveysHead = () => {
  const t = useTranslations('valuesSurveys');

  return (
    <section className="flex gap-5 py-8 theme:bg-primaryBg theme:text-primary">
      <CardValue data={valuesSurveysCard} />
      <div>
        <h2 className="font-bold text-2xl">{t('heading')}</h2>
        <div className="text-gray-600 pb-5 border-b border-b-gray-300">
          <p>{t('description')}</p>
        </div>
        <MainValuesSureys />
      </div>
    </section>
  );
};
