import { FC } from 'react';
import { WarningIcon } from '@/shared';

import type { TWarnContentProps } from '.';

export const WarnContent: FC<TWarnContentProps> = ({ title }) => {
  return (
    <div className="bg-[#FDF4D3] rounded-2xl p-4 flex flex-items md:flex-row items-start md:items-center gap-4 md:gap-6 ">
      <WarningIcon className="flex-shrink-0" />
      <p className=" lg:leading-8 text-sm md:text-base lg:text-lg font-bold">
        {title}
      </p>
    </div>
  );
};
