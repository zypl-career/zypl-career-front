import { NextIcon } from '@/shared';

export const NextEducational = ({ title }) => {
  return (
    <div className="bg-white flex justify-between h-[72px] items-center cursor-pointer px-5 rounded-xl my-2 mx-4  transform transition-transform duration-300 ease-in-out active:scale-75">
      <p>{title}</p>
      <NextIcon />
    </div>
  );
};
