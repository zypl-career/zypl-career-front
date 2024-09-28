import { CardsInteres } from '..';
import { careerValuesContent } from './constants';
import { CardValue, cardData } from '@/shared';

const interestsCard = cardData.map(c => ({ ...c, isDone: c.id === '01', active: c.id === '02' }));

export const InterestsHead = () => {
  return (
    <section className="flex gap-5 py-8 lg:px-20">
      <CardValue data={interestsCard} />
      <div>
        <h2 className="font-bold text-2xl">{careerValuesContent.heading}</h2>
        <div className="text-gray-600 pb-5">
          <p>{careerValuesContent.description}</p>
        </div>
        <div>
          <p className="font-semibold py-6 border-t">
            Аз ин ду кадомеаш ба шумо писанд аст?
          </p>
        </div>
        <CardsInteres />
      </div>
    </section>
  );
};
