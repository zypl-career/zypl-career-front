'use client';

import { useState, useEffect, FC } from 'react';

type TTimerProps = {
  defaultCount?: number;
  onDone?: () => void;
  onTick?: (count: number) => void;
};

export const Timer: FC<TTimerProps> = ({
  defaultCount = 10,
  onDone,
  onTick,
}) => {
  const [count, setCount] = useState(defaultCount);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (count > 0) {
      timer = setInterval(() => {
        setCount(count - 1);
        onTick && onTick(count - 1);
      }, 1000);
    }
    if (count === 0) {
      onDone && onDone();
      clearInterval(timer);
    }
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return count;
};
