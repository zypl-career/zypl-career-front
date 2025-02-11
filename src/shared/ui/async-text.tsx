'use client';

import { FC, useEffect, useState } from 'react';
import { Skeleton } from '@ui';

export const fetchText = (url: string) => {
  return fetch(url).then((response) => response.text());
};

type AsyncTextProps = {
  file: string;
  getText?: (file: string) => Promise<string>;
};

export const AsyncText: FC<AsyncTextProps> = ({
  file,
  getText = fetchText,
}) => {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    const fetchContent = async () => {
      const resolvedText = await getText(file);
      setText(resolvedText);
    };

    fetchContent();
  }, [file, getText]);

  return text ?? <Skeleton className="h-5 w-10" />;
};
