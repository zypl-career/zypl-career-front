'use client';

import { RadioGroup, RadioGroupCard } from '@/shared';
import { LABELS } from '.';
import { useTest } from '@/shared/providers/test-provider';

export const CardValuesSurveys = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  const { handleTestString } = useTest();

  const handleSelect = (value: string) => {
    onSelect(value);
    handleTestString(value, 'third');
  };
  return (
    <div>
      <h3 className="font-semibold">
        Кадом изҳорот вазъи молиявии оилаи шуморо ҳангоми 14 ё 15-солагиатон
        беҳтар тавсиф мекунад?
      </h3>
      <RadioGroup onValueChange={handleSelect}>
        {LABELS.map((label, index) => (
          <RadioGroupCard key={index} label={label} />
        ))}
      </RadioGroup>
    </div>
  );
};
