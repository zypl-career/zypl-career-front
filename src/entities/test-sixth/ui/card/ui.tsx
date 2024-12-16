'use client';

import { RadioGroup, RadioGroupCard } from '@/shared';
import { useTest } from '@/shared/providers/test-provider';
import { useTranslations } from 'next-intl';

export const CardQuestionnaireValues = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  const { handleTestString } = useTest();
  const t = useTranslations();

  const handleSelect = (value: string) => {
    onSelect(value);
    handleTestString(value, 'sixth');
  };

  return (
    <div>
      <h3 className="font-semibold">{t('survey_question_6')}</h3>
      <RadioGroup onValueChange={handleSelect}>
        <RadioGroupCard label={t('label_6_1')} />
        <RadioGroupCard label={t('label_6_2')} />
        <RadioGroupCard label={t('label_6_3')} />
        <RadioGroupCard label={t('label_6_4')} />
        <RadioGroupCard label={t('label_6_5')} />
        <RadioGroupCard label={t('label_6_6')} />
        <RadioGroupCard label={t('label_6_7')} />
        <RadioGroupCard label={t('label_6_8')} />
        <RadioGroupCard label={t('label_6_9')} />
        <RadioGroupCard label={t('label_6_10')} />
        <RadioGroupCard label={t('label_6_11')} />
      </RadioGroup>
    </div>
  );
};
