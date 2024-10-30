'use client';

import Link from 'next/link';
import { toolsData } from '.';
import { ToolsInspiration } from '@/entities';
import { useTranslations } from 'next-intl';

export const ToolsInspirationUI = () => {
  const t = useTranslations('ToolsInspiration');

  return (
    <section className="py-10 theme:border theme:border-primary theme:bg-primaryBg theme:text-primary">
      <div className="container my-5">
        <p className="text-3xl font-bold">{t('title')}</p>
        <p className="my-2 md:w-[800px]">{t('description')}</p>
      </div>
      <div className="mx-2 md:mx-0">
        <div className="container grid grid-cols-1 md:grid-cols-3">
          {toolsData.map((tool, index) => (
            <Link href={tool.link} key={index}>
              <ToolsInspiration
                Icons={tool.Icons}
                title={t(`tools.${tool.key}.title`)}
                description={t(`tools.${tool.key}.description`)}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
