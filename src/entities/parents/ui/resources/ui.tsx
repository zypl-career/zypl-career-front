import { CardSectionParents } from '@/entities';
import { useTranslations } from 'next-intl';

export const ResourcesParents = () => {
  const t = useTranslations('ResourcesParents');

  return (
    <div className="px-5 lg:px-28 theme:bg-primaryBg theme:text-primary theme:border theme:border-primary">
      <h3 className="font-bold text-2xl">{t('title')}</h3>
      <p className="text-gray-600 theme:text-primary">{t('description')}</p>
      <CardSectionParents />
    </div>
  );
};
