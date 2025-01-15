import { FC } from 'react';

export const PillSkeleton: FC = () => (
  <div className="animate-pulse flex flex-wrap gap-2">
    <div className="bg-gray-300 h-5 w-20 rounded-full"></div>
    <div className="bg-gray-300 h-5 w-20 rounded-full"></div>
    <div className="bg-gray-300 h-5 w-20 rounded-full"></div>
  </div>
);
