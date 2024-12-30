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
      className={`cursor-pointer ${
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
