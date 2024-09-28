'use client';

import { createElement, useEffect, useMemo } from 'react';
import { Button } from '@ui';
import { feedbackOptions } from './constants';
import { useTest } from '@/shared/providers/test-provider';
import { cn } from '@utils';
import { useRouter } from 'next/navigation';

export const FeedbackContent = () => {
  const router = useRouter();
  const { test, handleTestValue } = useTest();
  const disableContinueButton = useMemo(() => test.first?.some((el) => el === 0), [test.first]);

  useEffect(() => {
    localStorage.setItem('timeStart', new Date().toString());
  }, []);
  
  return (
    <div className="py-4">
      <div className="bg-white rounded-lg border p-6">
        {feedbackOptions.map((option, index) => (
          <div
            key={option.id}
            className={`py-4 ${index < feedbackOptions.length - 1 ? 'border-b' : ''}`}
          >
            <div className="text-container flex flex-col sm:flex-row items-center justify-between">
              <div className="text-gray-700">{option.text}</div>
              <div className="icons-container flex space-x-2 mt-4 sm:mt-0">
                {option.icons.map((el, idx) => (
                  <div
                    key={index + idx + 1}
                    className="text-2xl transition-transform transform hover:scale-110 focus:outline-none"
                    onClick={() => handleTestValue(idx + 1, index)}
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
          Отменить
        </Button>
        <Button
          variant="subscribe"
          showRightArrowIcon={true}
          size="subscribe"
          className="order-1 sm:order-2"
          disabled={disableContinueButton}
          onClick={() => router.push('interests')}
        >
          Продолжить
        </Button>
      </div>
    </div>
  );
};
