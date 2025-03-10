'use client';

import { RadioGroup, RadioGroupCard } from '@/shared';
import { LABELS_QUESTION } from '.';
import { useTestStore } from '@providers';

export const CardQuestionnaireValues = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  const { toggleTest } = useTestStore();

  const handleSelect = (value: string) => {
    onSelect(value);
    toggleTest(value, 'sixth');
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
