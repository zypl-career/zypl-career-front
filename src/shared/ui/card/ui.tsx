import { FC } from 'react';
import { TCardItemProps } from './types';
import { cn } from '@/shared';
import { Check } from 'lucide-react';

export const CardValue: FC<TCardItemProps> = ({ data = [] }) => {
  return (
    <div className="bg-white rounded-lg border py-4 px-6 w-96 self-baseline sticky top-5">
      <div className="flex flex-col divide-y">
        {data.map((item) => (
          <div key={item.id}>
            <div className="flex items-center py-4 space-x-2">
              <div
                className={cn(
                  'w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-black',
                  {
                    'bg-purple-500 border-purple-500': item.isDone,
                    'border-purple-500 text-purple-500': item.active,
                  },
                )}
              >
                {item.isDone ? <Check className="text-white" /> : item.id}
              </div>
              <div
                className={cn('font-semibold', {
                  'text-purple-500': item.active,
                })}
              >
                {item.title}
              </div>
            </div>
            {/* <hr className="border-gray-200" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};
