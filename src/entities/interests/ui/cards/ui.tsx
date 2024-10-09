'use client';

import Image from 'next/image';
import { CARDS_DATA_INTERES } from './constants';
import { Button, cn } from '@/shared';
import { useTest } from '@/shared/providers/test-provider';
import { TCardDataInters } from './types';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export const CardsInteres = () => {
  const router = useRouter();
  const [cards, setCards] = useState(CARDS_DATA_INTERES);
  const { handleTestInteraction } = useTest();
  const disableContinue = cards.some(
    ([left, right]) => !left.selected && !right.selected,
  );

  const handleSelected = (
    left: TCardDataInters,
    right: TCardDataInters,
    clicked: 'left' | 'right',
    index: number,
  ) => {
    setCards((prev) =>
      prev.map((p, i) => {
        if (i === index) {
          left.selected = false;
          right.selected = false;
          return [
            { ...left, selected: clicked === 'left' },
            { ...right, selected: clicked === 'right' },
          ];
        }
        return p;
      }),
    );
    const name = clicked === 'left' ? left.name : right.name;
    handleTestInteraction(name, index);
  };

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-5">
        {cards.map(([left, right], index) => (
          <div className="flex items-center gap-4 lg:gap-10" key={index}>
            <div
              key={left.name}
              className={cn(
                'flex flex-col cursor-pointer flex-1 items-center  p-6 rounded-lg shadow-md transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl',
                left.selected ? 'border-2 border-primary' : 'bg-white',
              )}
              onClick={() => handleSelected(left, right, 'left', index)}
            >
              <div className="w-28 h-28 lg:w-48 lg:h-48 mb-4 relative">
                <Image src={left.src} alt={left.title} />
              </div>
              <h2 className="text-sm lg:text-lg font-semibold mb-2 text-center">
                {left.title}
              </h2>
            </div>
            <p>Или</p>
            <div
              key={right.name}
              className={cn(
                'flex flex-col cursor-pointer flex-1 items-center  p-6 rounded-lg shadow-md transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl',
                right.selected ? 'border-2 border-primary' : 'bg-white',
              )}
              onClick={() => handleSelected(left, right, 'right', index)}
            >
              <div className="w-28 h-28 lg:w-48 lg:h-48 mb-4 relative">
                <Image src={right.src} alt={right.title} />
              </div>
              <h2 className="text-sm lg:text-lg font-semibold mb-2 text-center">
                {right.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col sm:flex-row items-center mt-8 mb-40">
        <Button variant="ghost" className="order-2 sm:order-1">
          Отменить
        </Button>
        <Button
          variant="subscribe"
          size="subscribe"
          className="order-1 sm:order-2"
          disabled={disableContinue}
          onClick={() => router.push('values-surveys')}
        >
          Продолжить
        </Button>
      </div>
    </section>
  );
};
