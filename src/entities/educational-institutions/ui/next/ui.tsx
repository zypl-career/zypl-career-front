import { NextIcon } from '@/shared';

export const NextEducational = ({ title }: { title: string }) => {
  return (
    <div className="bg-white flex justify-between py-8 items-center cursor-pointer px-5 rounded-xl my-2 mx-4  transform transition-transform duration-300 ease-in-out active:scale-75">
      <p>{title}</p>
      <NextIcon className="flex-shrink-0" />
    </div>
  );
};
