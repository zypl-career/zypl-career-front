'use client';

import { RadioGroup, RadioGroupCard } from '@/shared';
import { LABELS_QUESTION } from '.';
import { useTest } from '@/shared/providers/test-provider';

export const CardQuestionnaireValues = ({ onSelect }: { onSelect: (value: string) => void }) => {
  const { handleTestString } = useTest();

  const handleSelect = (value: string) => {
    onSelect(value);
    handleTestString(value, 'sixth');
  };

  return (
    <>
      <h3 className="font-semibold">
        Кадоме аз гуфтаҳои зерин аз ҳама бештар вазъи шуғли /кори падаратонро
        инъикос менамояд?
      </h3>
      <RadioGroup onValueChange={handleSelect}>
        {LABELS_QUESTION.map((label, index) => (
          <RadioGroupCard key={index} label={label} />
        ))}
      </RadioGroup>
    </>
  );
};
