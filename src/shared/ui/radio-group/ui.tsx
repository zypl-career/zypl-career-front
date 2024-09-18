import { FC } from 'react';
import { RadioGroupItem } from '@/shared';

import type { TRadioGroupProps } from '.';

export const RadioGroupCard: FC<TRadioGroupProps> = ({ label }) => {
  return (
    <div className="p-4 bg-white border border-gray-100 rounded-lg my-2">
      <div className="flex items-center">
        <RadioGroupItem value={label} id={`option-${label}`} label={label} />
      </div>
    </div>
  );
};
