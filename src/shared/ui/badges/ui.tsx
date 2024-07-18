import { FC } from 'react';
import { TBadgeProps } from '.';

export const Badge: FC<TBadgeProps> = ({ title }) => {
  return (
    <div className="bg-gray-100 rounded-3xl px-5 lg:mx-2 mx-1 my-2 py-2 cursor-pointer transform transition-transform duration-300 ease-in-out active:scale-75 active:bg-gray-200 active:shadow-lg inline-block hover:bg-[#9746B3] text-gray-700 hover:text-white active:text-gray-700">
      <p>{title}</p>
    </div>
  );
};
