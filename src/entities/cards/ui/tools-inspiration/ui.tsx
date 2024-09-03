import { FC, createElement } from 'react';
import { ToolsInspirationProps } from './types';

export const ToolsInspiration: FC<ToolsInspirationProps> = ({
  Icons,
  title,
  description,
}) => {
  return (
    <div className="theme:border-primary border lg:h-72 border-gray-200 w-full md:w-[432px] p-5 md:p-[32px] my-2 rounded-md transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
      {createElement(Icons, {
        className: 'theme:stroke-primary theme:fill-primary',
      })}
      <p className="md:text-[20px] font-bold pb-5">{title}</p>
      <p className="text-[#7E7E7E] theme:text-primary">{description}</p>
    </div>
  );
};
