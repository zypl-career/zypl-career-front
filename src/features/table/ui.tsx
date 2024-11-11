import { TableResults } from '@/entities';
import { useTranslations } from 'next-intl';

export const Table = () => {
  const t = useTranslations('table');

  return (
    <>
      <TableResults title={t('clusters')} />
      <TableResults title={t('clusters')} />
    </>
  );
};
