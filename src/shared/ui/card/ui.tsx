import { FC } from 'react';
import { TCardItemProps } from './types';
import { cn } from '@/shared';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const CardValue: FC<TCardItemProps> = ({ data = [] }) => {
  const t = useTranslations('cardFeedback');

  return (
    <nav className="hidden lg:block bg-white theme:border-primary theme:bg-primaryBg theme:text-primary rounded-lg border py-4 px-6 w-96 self-baseline sticky top-5">
      <div className="flex flex-col divide-y theme:divide-primary">
        {data.map((item) => (
          <div className="flex items-center py-4 space-x-2" key={item.id}>
            <div
              className={cn(
                'w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 text-black theme:border-primary theme:text-primary',
                {
                  'bg-purple-500 border-purple-500 theme:border-primary theme:bg-primaryBg':
                    item.isDone,
                  'border-purple-500 text-purple-500 theme:border-primary theme:text-primary':
                    item.active,
                },
              )}
            >
              {item.isDone ? (
                <Check className="text-white theme:text-primary" />
              ) : (
                item.id
              )}
            </div>
            <div
              className={cn('font-semibold flex-1', {
                'text-purple-500 theme:text-primary': item.active,
              })}
            >
              {item.id === '01'
                ? t('title_values')
                : item.id === '02'
                  ? t('title_skills')
                  : t('title_interests')}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};
