import { FeedbackValues } from '@/entities';
import { VALUES_SURVEYS_DATA } from '.';
import { CardValue } from '@/shared';

export const ValuesSurveysHead = () => {
  return (
    <section className="flex gap-5 py-8 lg:px-20">
      <CardValue />
      <div>
        <h2 className="font-bold text-2xl">{VALUES_SURVEYS_DATA.heading}</h2>
        <div className="text-gray-600 pb-5">
          <p>{VALUES_SURVEYS_DATA.description}</p>
        </div>
        <div>
          <h3 className="font-semibold py-6 border-t">
            Кадом изҳорот вазъи молиявии оилаи шуморо ҳангоми 14 ё 15-солагиатон
            беҳтар тавсиф мекунад?
          </h3>
        </div>
      </div>
    </section>
  );
};
