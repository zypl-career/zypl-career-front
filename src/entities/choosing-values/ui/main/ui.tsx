'use client';

import { Button } from '@/shared';
import { CardChoosingValues } from '@/entities/choosing-values/ui';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const MainChoosingValues = () => {
  const [disableContinueButton, setDisableContinueButton] = useState('');
  const router = useRouter();
  return (
    <div>
      <CardChoosingValues onSelect={setDisableContinueButton} />
      <div className="flex flex-col sm:flex-row items-center mt-8 mb-40">
        <Button variant="ghost" className="order-2 sm:order-1">
          Отменить
        </Button>
        <Button
          variant="subscribe"
          size="subscribe"
          className="order-1 sm:order-2"
          disabled={!disableContinueButton}
          onClick={() => router.push('your-result')}
        >
          Далее
        </Button>
      </div>
    </div>
  );
};
