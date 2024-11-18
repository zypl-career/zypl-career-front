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
    handleTestString(value, 'fourth');
  };

  return (
    <>
      <h3 className="font-semibold">{t('survey_question.question')}</h3>
      <RadioGroup onValueChange={handleSelect}>
        <RadioGroupCard label={t('labels_question.1')} />
        <RadioGroupCard label={t('labels_question.2')} />
        <RadioGroupCard label={t('labels_question.3')} />
        <RadioGroupCard label={t('labels_question.4')} />
        <RadioGroupCard label={t('labels_question.5')} />
        <RadioGroupCard label={t('labels_question.6')} />
        <RadioGroupCard label={t('labels_question.7')} />
        <RadioGroupCard label={t('labels_question.8')} />
        <RadioGroupCard label={t('labels_question.9')} />
        <RadioGroupCard label={t('labels_question.10')} />
      </RadioGroup>
    </>
  );
};
