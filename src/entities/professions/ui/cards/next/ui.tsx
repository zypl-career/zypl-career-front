import { FC } from 'react';
import { NextIcon } from '@/shared';
import type { TNextCardProps } from './types';

export const NextCard: FC<TNextCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white flex justify-between lg:w-[522px] lg:h-[72px] items-center px-5 rounded-xl my-2 theme:bg-primaryBg theme:text-primary theme:border theme:border-primary">
      <div>
        <p>{title}</p>
        <p className="text-gray-400 text-sm theme:text-primary">{description}</p>
      </div>
      <NextIcon />
    </div>
  );
};
