import { FC } from 'react';
import { cn } from '@utils';

import type { TBadgeProps } from './types';

const badgeVariants = {
  base: 'select-none rounded-3xl px-5 lg:mx-2 mx-1 my-2 py-2 cursor-pointer transform transition-transform duration-300 ease-in-out inline-block border',
  states: {
    default:
      'bg-gray-100 text-gray-700 hover:bg-[#9746B3] hover:text-white active:scale-95 active:shadow',
    white:
      'bg-white text-gray-700 hover:bg-[#9746B3] hover:text-white active:scale-95 active:shadow',
  },
};

export const Badge: FC<TBadgeProps> = ({
  title,
  variant = 'default',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        '',
        badgeVariants.base,
        badgeVariants.states[variant],
        className,
      )}
      {...props}
    >
      {title}
    </div>
  );
};
