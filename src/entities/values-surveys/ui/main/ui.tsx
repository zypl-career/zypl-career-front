'use client';

import { CardValuesSurveys } from '@/entities';
import { Button } from '@/shared';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export const MainValuesSureys = () => {
  const router = useRouter();
  const [disableContinueButton, setDisableContinueButton] = useState('');
  const t = useTranslations('valuesSurveys');
  return (
    <div>
      <CardValuesSurveys onSelect={setDisableContinueButton} />
      <div className="flex flex-col sm:flex-row items-center mt-8 mb-40">
        <Button variant="ghost" className="order-2 sm:order-1">
          {t('cancel')}
        </Button>
        <Button
          variant="subscribe"
          size="subscribe"
          className="order-1 sm:order-2"
          onClick={() => router.push('test-fourth')}
          disabled={!disableContinueButton}
        >
          {t('next')}
        </Button>
      </div>
    </div>
  );
};
