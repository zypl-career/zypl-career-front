'use client';

import { RadioGroup, RadioGroupCard } from '@/shared';
import { LABELS } from '.';
import { useTest } from '@/shared/providers/test-provider';
import { useTranslations } from 'next-intl';

export const CardValuesSurveys = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  const { handleTestString } = useTest();
  const t = useTranslations('valuesSurveys');

  const handleSelect = (value: string) => {
    onSelect(value);
    handleTestString(value, 'third');
  };

  return (
    <div>
      <h3 className="font-semibold py-4">{t('selectQuestion')}</h3>
      <RadioGroup onValueChange={handleSelect}>
        {LABELS.map((label, index) => (
          <RadioGroupCard key={index} label={label} />
        ))}
      </RadioGroup>
    </div>
  );
};
