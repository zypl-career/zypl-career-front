'use client';

import { ReactNode, useState } from 'react';

export const Counter = ({ children }: { children: (x: number) => ReactNode }) => {
  const [x, setX] = useState(0);

  return (
    <div>
      {children(x)}
      <div>
        <button onClick={() => setX(x + 1)}>+</button>
      </div>
    </div>
  );
};

export const Test = () => {
  return <Counter>{(x) => <h1>{x}</h1>}</Counter>;
};
