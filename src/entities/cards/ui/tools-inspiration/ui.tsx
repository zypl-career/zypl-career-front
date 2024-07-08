'use client';

import React, { FC } from 'react';
import { ToolsInspirationProps } from '.';

export const ToolsInspiration: FC<ToolsInspirationProps> = ({
  Icons,
  title,
  description,
}) => {
  return (
    <div className="border border-gray-200 w-full md:w-[413px] md:p-[32px] rounded-xl">
      <Icons />
      <p className="md:text-[20px] font-bold pb-8">{title}</p>
      <p className="text-[#7E7E7E]">{description}</p>
    </div>
  );
};
