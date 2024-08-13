import { RadioGroupCard } from '@/shared';
import { LABELS_VALUES_CHOOSING } from './constants';

export const CardChoosingValues = () => {
  return (
    <div>
      <h3 className="font-semibold lg:px-80">
        Сатҳи баландтарини таҳсилоти падаратон
      </h3>
      {LABELS_VALUES_CHOOSING.map((label, index) => (
        <RadioGroupCard key={index} label={label} />
      ))}
    </div>
  );
};
