import { FC, createElement } from 'react';
import { ToolsInspirationProps } from './types';

export const ToolsInspiration: FC<ToolsInspirationProps> = ({
  Icons,
  title,
  description,
}) => {
  
  const isContentLong = title.length > 20 || description.length > 100;

  return (
    <div
      className={`theme:border-primary border border-gray-200 w-full p-5 md:p-[32px] my-2 rounded-md transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer ${
        isContentLong ? 'h-auto' : 'md:h-72'
      }`}
    >
      {createElement(Icons, {
        className: 'theme:stroke-primary theme:fill-primary',
      })}
      <p className="md:text-[20px] font-bold pb-5">{title}</p>
      <p className="text-[#7E7E7E] theme:text-primary">{description}</p>
    </div>
  );
};
