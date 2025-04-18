'use client';

import { RadioGroup, RadioGroupCard } from '@ui';
import { useTestStore } from '@providers';
import { useTranslations } from 'next-intl';

export const CardChoosingValues = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  const { toggleTest } = useTestStore();
  const t = useTranslations('test.seventh');

  const handleSelect = (value: string) => {
    onSelect(value);
    toggleTest(value, 'seventh');
  };

  return (
    <div>
      <h3 className="font-semibold">{t('question')}</h3>
      <RadioGroup onValueChange={handleSelect}>
        <RadioGroupCard label={t('answers.0')} />
        <RadioGroupCard label={t('answers.1')} />
        <RadioGroupCard label={t('answers.2')} />
        <RadioGroupCard label={t('answers.3')} />
        <RadioGroupCard label={t('answers.4')} />
        <RadioGroupCard label={t('answers.5')} />
        <RadioGroupCard label={t('answers.6')} />
        <RadioGroupCard label={t('answers.7')} />
      </RadioGroup>
    </div>
  );
};
