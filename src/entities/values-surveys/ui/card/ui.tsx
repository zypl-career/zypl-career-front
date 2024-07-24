import { RadioGroupCard } from '@/shared';
import { LABELS } from '.';

export const CardValuesSurveys = () => {
  return (
    <div>
      {LABELS.map((label, index) => (
        <RadioGroupCard key={index} label={label} />
      ))}
    </div>
  );
};
