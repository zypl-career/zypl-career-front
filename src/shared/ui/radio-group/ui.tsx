import { FC } from 'react';
import { RadioGroup, RadioGroupItem } from '@/shared';

import type { TRadioGroupProps } from '.';

export const RadioGroupCard: FC<TRadioGroupProps> = ({ label }) => {
  return (
    <div className="p-4 bg-white border rounded-lg my-2 lg:mx-80">
      <RadioGroup>
        <div className="flex items-center">
          <RadioGroupItem value="option" id={`option-${label}`} label={label} />
        </div>
      </RadioGroup>
    </div>
  );
};
