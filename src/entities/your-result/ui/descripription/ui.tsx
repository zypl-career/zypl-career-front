import { TableResults } from '@/entities';
import { useTranslations } from 'next-intl';

export const YourResultDesc = () => {
  const t = useTranslations('YourResultDesc');

  return (
    <div className="container">
      <div className="py-10">
        <h3 className="font-semibold text-3xl">{t('title')}</h3>
        <p className="text-gray-600 lg:w-[800px] pb-5">{t('description')}</p>
        <hr className="bg-gray-900" />
      </div>
      <div>
        <TableResults title={t('clusters')} />
      </div>
    </div>
  );
};
