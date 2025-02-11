'use client';

import { useTranslations } from 'next-intl';
import { missionContent } from '.';
import { ru } from '@/shared';

export const OurMissions = () => {
  const t = useTranslations('ourMissions');
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-10 pb-40 px-5 lg:px-28 theme:bg-primaryBg theme:text-primary theme:border theme:border-primary">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full theme:bg-primaryBg theme:border-primary theme:border">
        <h1 className="text-2xl font-bold mb-4">{t('title')}</h1>
        <h2 className="py-4">{t('subtitle')}</h2>
        <ul className="list-disc pl-4">
          {ru.ourMissions.missions.map((_, index) => (
            <li key={index}>{t(`missions.${index}`)}</li>
          ))}
        </ul>
        <h2 className="text-2xl font-bold mt-6 mb-4">{t('goalTitle')}</h2>
        <ul className="list-disc list-inside">
          {ru.ourMissions.goals.map((_, index) => (
            <li key={index}>
              <strong>{t(`goals.${index}.title`)}:</strong>{' '}
              {t(`goals.${index}.description`)}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-4">{t('portalTitle')}</h2>
        <ul className="list-disc list-inside">
          {ru.ourMissions.portal.map((_, index) => (
            <li key={index}>
              <strong>{t(`portal.${index}.title`)}:</strong>{' '}
              {t(`portal.${index}.description`)}
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-4">{t('joinUsTitle')}</h2>
        <p>{missionContent.joinUs}</p>
      </div>
    </section>
  );
};
