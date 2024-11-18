'use client';

import { RadioGroup, RadioGroupCard } from '@/shared';
import { useTranslations } from 'next-intl';
import { useTest } from '@/shared/providers/test-provider';

export const CardValuesSurveys = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  const { handleTestString } = useTest();
  const t = useTranslations();

  const handleSelect = (value: string) => {
    onSelect(value);
    handleTestString(value, 'third');
  };

  return (
    <div>
      <h3 className="font-semibold py-4">
        {t('survey.question') || 'Вопрос не найден'}
      </h3>
      <RadioGroup onValueChange={handleSelect}>
        <RadioGroupCard label={t('labels.0')} />
        <RadioGroupCard label={t('labels.1')} />
        <RadioGroupCard label={t('labels.2')} />
        <RadioGroupCard label={t('labels.3')} />
        <RadioGroupCard label={t('labels.4')} />
      </RadioGroup>
    </div>
  );
};
