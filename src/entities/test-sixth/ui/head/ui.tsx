import { MainQuestionnaireValues } from '..';
import { useTranslations } from 'next-intl';
import { CardValue, cardData } from '@/shared';

const questionnaireValuesCard = cardData.map((c, i) => ({
  ...c,
  isDone: i < 2,
  active: c.id === '03',
}));

export const QuestionnaireValuesHead = () => {
  const t = useTranslations('valuesSurveys');

  return (
    <section className="flex gap-5 py-8 theme:bg-primaryBg theme:text-primary">
      <CardValue data={questionnaireValuesCard} />
      <div>
        <h2 className="font-bold text-2xl">{t('heading')}</h2>
        <div className="text-gray-600 pb-5 border-b border-b-gray-300 mb-10">
          <p>{t('description')}</p>
        </div>
        <MainQuestionnaireValues />
      </div>
    </section>
  );
};
