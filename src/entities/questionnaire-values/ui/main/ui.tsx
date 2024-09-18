'use client';

import { CardQuestionnaireValues } from '@/entities';
import { Button } from '@/shared';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export const MainQuestionnaireValues = () => {
  const [disableContinueButton, setDisableContinueButton] = useState('');
  const router = useRouter();
  return (
    <div>
      <CardQuestionnaireValues onSelect={setDisableContinueButton} />
      <div className="flex flex-col sm:flex-row items-center mt-8 mb-40 lg:px-80">
        <Button variant="ghost" className="order-2 sm:order-1">
          Отменить
        </Button>
        <Button
          variant="subscribe"
          showRightArrowIcon={true}
          size="subscribe"
          className="order-1 sm:order-2"
          disabled={!disableContinueButton}
          onClick={() => router.push('choosing-values')}
        >
          Далее
        </Button>
      </div>
    </div>
  );
};
