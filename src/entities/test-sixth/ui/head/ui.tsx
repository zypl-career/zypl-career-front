import { MainQuestionnaireValues } from '..';
import { VALUES_SURVEYS_DATA } from './constants';
import { CardValue } from '@/shared';

export const QuestionnaireValuesHead = () => {
  return (
    <section className="flex gap-5 py-8 lg:px-20">
      <CardValue />
      <div>
        <h2 className="font-bold text-2xl">{VALUES_SURVEYS_DATA.heading}</h2>
        <div className="text-gray-600 pb-5 border-b border-b-gray-300 mb-10">
          <p>{VALUES_SURVEYS_DATA.description}</p>
        </div>
        <MainQuestionnaireValues />
      </div>
    </section>
  );
};
