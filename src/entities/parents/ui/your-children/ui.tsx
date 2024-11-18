import { NextCard } from '@/entities';
import { useTranslations } from 'next-intl';

export const YourChildren = () => {
  const t = useTranslations('YourChildren');

  return (
    <div className="py-10 px-5 lg:px-28 theme:bg-primaryBg theme:text-primary theme:border theme:border-primary">
      <h3 className="font-semibold text-2xl">{t('title')}</h3>
      <p className="text-gray-600 theme:text-primary">{t('description')}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10">
        <div>
          <NextCard
            title="Абдуллоев Хусниддин Абдуллоевич"
            description="Школа №71 г. Душанбе"
          />
          <NextCard
            title="Абдуллоев Хусниддин Абдуллоевич"
            description="Школа №71 г. Душанбе"
          />
        </div>
        <div>
          <NextCard
            title="Абдуллоев Хусниддин Абдуллоевич"
            description="Школа №71 г. Душанбе"
          />
          <NextCard
            title="Абдуллоев Хусниддин Абдуллоевич"
            description="Школа №9 (гимназия им. Низами)"
          />
        </div>
      </div>
    </div>
  );
};
