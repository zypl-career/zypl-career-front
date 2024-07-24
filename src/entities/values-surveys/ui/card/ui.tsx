import { RadioGroupCard } from '@/shared';
import { LABELS } from '.';

export const CardValuesSurveys = () => {
  return (
    <div>
      <h3 className="font-semibold lg:px-80">
        Кадом изҳорот вазъи молиявии оилаи шуморо ҳангоми 14 ё 15-солагиатон
        беҳтар тавсиф мекунад?
      </h3>
      {LABELS.map((label, index) => (
        <RadioGroupCard key={index} label={label} />
      ))}
    </div>
  );
};
