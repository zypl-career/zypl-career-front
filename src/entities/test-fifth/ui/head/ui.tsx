import { MainChoosingValues } from '..';
import { VALUES_SURVEYS_DATA } from './constants';
import { CardValue, cardData } from '@/shared';

const choosingValuesCard = cardData.map((c, i) => ({
  ...c,
  isDone: i < 2,
  active: c.id === '03',
}));

export const ChoosingValuesHead = () => {
  return (
    <section className="flex gap-5 py-8">
      <CardValue data={choosingValuesCard} />
      <div>
        <h2 className="font-bold text-2xl">{VALUES_SURVEYS_DATA.heading}</h2>
        <div className="text-gray-600 pb-5 border-b border-b-gray-300 mb-10">
          <p>{VALUES_SURVEYS_DATA.description}</p>
        </div>
        <MainChoosingValues />
      </div>
    </section>
  );
};
