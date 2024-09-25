import { RadioGroup, RadioGroupCard } from '@/shared';
import { LABELS_VALUES_CHOOSING } from './constants';
import { useTest } from '@/shared/providers/test-provider';

export const CardChoosingValues = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  const { handleTestString } = useTest();

  const handleSelect = (value: string) => {
    onSelect(value);
    handleTestString(value, 'fifth');
  };
  return (
    <div>
      <h3 className="font-semibold">Сатҳи баландтарини таҳсилоти падаратон</h3>
      <RadioGroup onValueChange={handleSelect}>
        {LABELS_VALUES_CHOOSING.map((label, index) => (
          <RadioGroupCard key={index} label={label} />
        ))}
      </RadioGroup>
    </div>
  );
};
