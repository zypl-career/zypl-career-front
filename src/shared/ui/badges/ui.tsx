import { FC } from 'react';
import { cn } from '@/shared/utils';

import type { TBadgeProps } from '.';

const badgeVariants = {
  base: 'rounded-3xl px-5 lg:mx-2 mx-1 my-2 py-2 cursor-pointer transform transition-transform duration-300 ease-in-out inline-block',
  states: {
    default:
      'bg-gray-100 text-gray-700 hover:bg-[#9746B3] hover:text-white active:bg-gray-200 active:text-gray-700 active:scale-75 active:shadow-lg',
    white:
      'bg-white text-gray-700 hover:bg-[#9746B3] hover:text-white active:bg-gray-200 active:text-gray-700 active:scale-75 active:shadow-lg',
  },
};

export const Badge: FC<TBadgeProps> = ({ title, variant = 'default' }) => {
  return (
    <div className={cn(badgeVariants.base, badgeVariants.states[variant])}>
      <p>{title}</p>
    </div>
  );
};
