'use client';

import { RadioGroup, RadioGroupCard } from '@/shared';
import { LABELS_QUESTION } from '.';
import { useTest } from '@/shared/providers/test-provider';
import { useTranslations } from 'next-intl';

export const CardQuestionnaireValues = ({
  onSelect,
}: {
  onSelect: (value: string) => void;
}) => {
  const { handleTestString } = useTest();
  const t = useTranslations('testFourth');
  const handleSelect = (value: string) => {
    onSelect(value);
    handleTestString(value, 'fourth');
  };
  console.log(t('heading'));

  return (
    <>
      <h3 className="font-semibold">{t('heading')}</h3>
      <RadioGroup onValueChange={handleSelect}>
        {LABELS_QUESTION.map((label, index) => (
          <RadioGroupCard key={index} label={t(`labels.option${index + 1}`)} />
        ))}
      </RadioGroup>
    </>
  );
};
