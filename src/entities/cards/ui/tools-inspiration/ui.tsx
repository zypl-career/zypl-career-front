'use client';

import React, { FC } from 'react';
import { ToolsInspirationProps } from '.';

export const ToolsInspiration: FC<ToolsInspirationProps> = ({
  Icons,
  title,
  description,
}) => {
  return (
    <div className="border border-gray-200 w-full md:w-[490px] p-5 md:p-[32px] my-2 rounded-md transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
      <Icons />
      <p className="md:text-[20px] font-bold pb-8">{title}</p>
      <p className="text-[#7E7E7E]">{description}</p>
    </div>
  );
};
