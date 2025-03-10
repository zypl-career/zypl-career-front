'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { createElement, useEffect, useMemo } from 'react';
import { Button } from '@ui';
import { cn } from '@utils';
import { useTestStore } from '@providers';
import { feedbackOptions } from './constants';
import { array } from 'zod';

export const FeedbackContent = () => {
  const router = useRouter();
  const t = useTranslations('feedbackContent');
  const { test, setTestInteraction } = useTestStore();
  const disableContinueButton = useMemo(
    () => test.first?.some((el) => el === 0),
    [test.first],
  );

  console.log(test.first);

  useEffect(() => {
    localStorage.setItem('timeStart', new Date().toString());
  }, []);

  return (
    <div className="py-4">
      <div className="bg-white rounded-lg border p-6 theme:border-primary theme:bg-primaryBg theme:text-primary">
        {feedbackOptions.map((option, index) => (
          <div
            key={option.id}
            className={`py-4 theme:border-primary ${index < feedbackOptions.length - 1 ? 'border-b' : ''}`}
          >
            <div className="text-container flex flex-col sm:flex-row items-center justify-between">
              <div className="theme:text-primary text-gray-700">
                {t(`options.${option.id}`)}
              </div>
              <div className="icons-container flex space-x-2 mt-4 sm:mt-0">
                {option.icons.map((el, idx) => (
                  <div
                    key={index + idx + 1}
                    className="text-2xl transition-transform transform hover:scale-110 focus:outline-none"
                    onClick={() => setTestInteraction(idx + 1, index)}
                  >
                    {createElement(el, {
                      className: cn(
                        'hover:grayscale-0 cursor-pointer',
                        test.first?.[index] === idx + 1
                          ? 'grayscale-0'
                          : 'grayscale',
                      ),
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center my-8">
        <Button variant="ghost" className="order-2 sm:order-1">
          {t('cancel')}
        </Button>
        <Button
          showRightArrowIcon
          variant="default"
          className="order-1 sm:order-2"
          rounded="full"
          disabled={disableContinueButton}
          onClick={() => router.push('interests')}
        >
          {t('continue')}
        </Button>
      </div>
    </div>
  );
};
