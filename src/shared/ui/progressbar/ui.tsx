import { FC } from 'react';
import { progressBar } from '.';
import { TProgressBarProps } from '.';

export const ProgressBar: FC<TProgressBarProps> = ({ percentage, size }) => {
  return (
    <div className={progressBar({ size })}>
      <div
        className="absolute top-0 left-0 h-full bg-purple-700 rounded"
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="absolute top-0 left-0 h-full flex items-center justify-end pr-2 text-white">
        {percentage}%
      </div>
    </div>
  );
};
