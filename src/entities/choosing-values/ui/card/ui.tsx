'use client';

import { RadioGroup, RadioGroupCard } from '@/shared';
import { useTest } from '@/shared/providers/test-provider';
import { useTranslations } from 'next-intl';

export const CardChoosingValues = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  const { handleTestString } = useTest();
  const t = useTranslations();

  const handleSelect = (value: string) => {
    onSelect(value);
    handleTestString(value, 'seventh');
  };

  return (
    <div>
      <h3 className="font-semibold">{t('education_question.question')}</h3>
      <RadioGroup onValueChange={handleSelect}>
        <RadioGroupCard label={t('labels_values_choosing.1')} />
        <RadioGroupCard label={t('labels_values_choosing.2')} />
        <RadioGroupCard label={t('labels_values_choosing.3')} />
        <RadioGroupCard label={t('labels_values_choosing.4')} />
        <RadioGroupCard label={t('labels_values_choosing.5')} />
        <RadioGroupCard label={t('labels_values_choosing.6')} />
        <RadioGroupCard label={t('labels_values_choosing.7')} />
      </RadioGroup>
    </div>
  );
};
