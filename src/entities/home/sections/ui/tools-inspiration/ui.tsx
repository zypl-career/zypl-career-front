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
        <p className="my-2">{t('description')}</p>
      </div>
      <div className="mx-2 md:mx-0">
        <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {toolsData.map((tool, index) => (
            <Link
              href={tool.link}
              key={index}
              className="first:col-span-full last:col-span-full theme:border-primary border border-gray-200 w-full p-5 md:p-[32px] my-2 rounded-md transition-transform transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            >
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
