'use client';

import { RadioGroup, RadioGroupCard } from '@ui';
import { useTestStore } from '@providers';
import { useTranslations } from 'next-intl';

export const CardQuestionnaireValues = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  const { toggleTest } = useTestStore();
  const t = useTranslations();

  const handleSelect = (value: string) => {
    onSelect(value);
    toggleTest(value, 'fourth');
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
