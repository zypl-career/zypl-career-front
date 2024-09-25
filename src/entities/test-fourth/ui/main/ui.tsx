'use client';

import { Button } from '@/shared';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { CardQuestionnaireValues } from '..';

export const MainQuestionnaireValues = () => {
  const [disableContinueButton, setDisableContinueButton] = useState('');
  const router = useRouter();
  return (
    <div>
      <CardQuestionnaireValues onSelect={setDisableContinueButton} />
      <div className="flex flex-col sm:flex-row items-center mt-8 mb-40">
        <Button variant="ghost" className="order-2 sm:order-1">
          Отменить
        </Button>
        <Button
          variant="subscribe"
          showRightArrowIcon={true}
          size="subscribe"
          className="order-1 sm:order-2"
          disabled={!disableContinueButton}
          onClick={() => router.push('test-fifth')}
        >
          Далее
        </Button>
      </div>
    </div>
  );
};
