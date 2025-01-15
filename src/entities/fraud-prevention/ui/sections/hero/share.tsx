'use client';

import Link from 'next/link';
import { FC } from 'react';
import { FacebookIcn, TgIcon, VKIcon } from '@icons';
import { TArticleData } from '@ui';

export type ShareProps = {
  data?: TArticleData;
};

export const Share: FC<ShareProps> = ({ data }) => {
  return (
    <div className="mb-4 text-gray-400">
      Поделитесь на:
      <div className="flex items-center gap-5 py-2 my-2">
        <Link
          href={`https://vk.com/share.php?url=${window.location.href}&title=${data?.title}&description=${data?.description}&image=${data?.image}`}
          target="_blank"
          rel="noopener"
        >
          <VKIcon />
        </Link>
        <Link
          href={`https://t.me/share/url?url=${window.location.href}&text=${data?.title}`}
          target="_blank"
          rel="noopener"
        >
          <TgIcon />
        </Link>
        <Link
          href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
          target="_blank"
          rel="noopener"
        >
          <FacebookIcn />
        </Link>
      </div>
    </div>
  );
};
