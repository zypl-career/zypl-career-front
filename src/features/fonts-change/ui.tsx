'use client';

import { Button } from '@ui';
import { useEffect, useState } from 'react';

export const FontsChange = () => {
  const [adjustmentFactor, setAdjustmentFactor] = useState(1);
  const [type, setType] = useState<'minus' | 'plus'>();

  const increaseFontSize = () => {
    setAdjustmentFactor((prevFactor) => prevFactor * 1.1); // Increase by 10%
    setType('plus');
  };

  const decreaseFontSize = () => {
    setAdjustmentFactor((prevFactor) => prevFactor / 1.1); // Decrease by 10%
    setType('minus');
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
    if (type) {
      traverseDOM(document.body);
    }
  }, [type, adjustmentFactor]);

  return (
    <div className="space-y-2.5">
      <h1 className="font-semibold">Шрифт:</h1>
      <div className="flex items-center gap-1">
        <Button onClick={decreaseFontSize}>-</Button>
        <Button onClick={increaseFontSize}>+</Button>
      </div>
    </div>
  );
};
