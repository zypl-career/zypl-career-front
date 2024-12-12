'use client';

import { Button } from '@ui';
import { useEffect, useState } from 'react';
import { fontSizes } from './constants';

export const FontSizesChange = () => {
  const [adjustmentFactor, setAdjustmentFactor] = useState(0.1);
  const [type, setType] = useState<'minus' | 'plus'>();
  const [typeSize, setTypeSize] = useState<keyof typeof fontSizes>();

  const changeFontSize = (sizeKeys: keyof typeof fontSizes) => {
    const size = fontSizes[sizeKeys];
    setTypeSize(sizeKeys);

    setAdjustmentFactor((prev) => {
      if (prev > size) {
        setType('minus');
        return prev / 1.5;
      }
      setType('plus');
      return prev * 1.5;
    });
  };

  useEffect(() => {
    const adjustFontSize = (element: HTMLElement) => {
      const computedStyle = window.getComputedStyle(element);
      const currentFontSize = parseFloat(computedStyle.fontSize);
      const result =
        type === 'minus'
          ? currentFontSize - adjustmentFactor
          : currentFontSize + adjustmentFactor;
      element.style.fontSize = `${result <= 0 ? 0 : result}px`;
    };

    const traverseDOM = (element: HTMLElement) => {
      adjustFontSize(element);
      Array.from(element.children).forEach((child) =>
        traverseDOM(child as HTMLElement),
      );
    };

    traverseDOM(document.body);
  }, [adjustmentFactor, type]);

  return (
    <div className="flex items-center gap-2">
      <h1 className="font-semibold text-white">Шрифт:</h1>
      <div className="flex items-center gap-1">
        <Button
          disabled={typeSize === 'base'}
          onClick={() => changeFontSize('base')}
          className="size-14 text-xl bg-transparent text-white theme:text-primary"
          variant="outline"
          rounded="sm"
        >
          A
        </Button>
        <Button
          disabled={typeSize === 'large'}
          onClick={() => changeFontSize('large')}
          className="size-14 text-2xl bg-transparent text-white theme:text-primary"
          variant="outline"
          rounded="sm"
        >
          A
        </Button>
        <Button
          disabled={typeSize === 'xLarge'}
          onClick={() => changeFontSize('xLarge')}
          className="size-14 text-3xl bg-transparent text-white theme:text-primary"
          variant="outline"
          rounded="sm"
        >
          A
        </Button>
      </div>
    </div>
  );
};
