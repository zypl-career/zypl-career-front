import { FC } from 'react';
import type { TKeyFindingsProps } from '.';

export const KeyFindingsUI: FC<TKeyFindingsProps> = ({ title }) => {
  return (
    <div className="bg-[#F2F5F8] rounded-xl">
      <h3 className="py-2 text-xl font-bold">{title}</h3>
    </div>
  );
};
