import { VALUES_SURVEYS_DATA } from '.';
import { CardValue, cardData } from '@/shared';
import { MainValuesSureys } from '..';

const valuesSurveysCard = cardData.map((c, i) => ({
  ...c,
  isDone: i < 2,
  active: c.id === '03',
}));

export const ValuesSurveysHead = () => {
  return (
    <section className="flex gap-5 py-8 lg:px-20">
      <CardValue data={valuesSurveysCard} />
      <div>
        <h2 className="font-bold text-2xl">{VALUES_SURVEYS_DATA.heading}</h2>
        <div className="text-gray-600 pb-5 border-b border-b-gray-300">
          <p>{VALUES_SURVEYS_DATA.description}</p>
        </div>
        <MainValuesSureys />
      </div>
    </section>
  );
};
