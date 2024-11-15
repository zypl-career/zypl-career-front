import { NextIcon } from '@/shared';

export const NextEducational = ({ title }: { title: string }) => {
  return (
    <div className="bg-white flex justify-between my-4 py-8 items-center cursor-pointer px-5 rounded-xl transform transition-transform duration-300 ease-in-out active:scale-90">
      <p>{title}</p>
      <NextIcon className="flex-shrink-0" />
    </div>
  );
};
