'use client';

import { Button } from '@ui';
import { useEffect, useState } from 'react';
import { FontSize } from './constants';

export const FontSizesChange = () => {
  const [zoom, setZoom] = useState<FontSize>(FontSize.BASE);

  useEffect(() => {
    const initialValue = document.body.style.zoom;

    document.body.style.zoom = `${zoom}%`;

    return () => {
      document.body.style.zoom = initialValue;
    };
  }, [zoom]);

  return (
    <div className="flex items-center gap-2">
      <h1 className="font-semibold text-white">Шрифт:</h1>
      <div className="flex items-center gap-1">
        <Button
          disabled={zoom === FontSize.BASE}
          onClick={() => setZoom(100)}
          className="size-14 text-xl bg-transparent text-white theme:text-primary"
          variant="outline"
          rounded="sm"
        >
          A
        </Button>
        <Button
          disabled={zoom === FontSize.LARGE}
          onClick={() => setZoom(125)}
          className="size-14 text-2xl bg-transparent text-white theme:text-primary"
          variant="outline"
          rounded="sm"
        >
          A
        </Button>
        <Button
          disabled={zoom === FontSize.X_LARGE}
          onClick={() => setZoom(150)}
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
