import { FC } from 'react';
import { cn } from '..';

type TProgressTest = {
  progress: number;
};

export const ProgressTest: FC<TProgressTest> = ({ progress }) => {
  return (
    <div className="h-10 flex items-center justify-end min-w-80 bg-gray-200 relative rounded-lg overflow-hidden">
      <div
        className="absolute left-0 top-0 bottom-0 h-full rounded-lg bg-gradient-to-r from-[#B919EB] to-[#710094]"
        style={{ width: `${progress}%` }}
      />
      <span
        className={cn(
          'text-right mr-2 relative z-10',
          progress > 90 ? 'text-white' : 'text-gray-700',
        )}
      >
        {progress}%
      </span>
    </div>
  );
};
