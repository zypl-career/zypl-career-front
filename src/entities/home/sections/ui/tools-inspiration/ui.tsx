import { toolsData, ToolsInspiration } from '@/entities';
import Link from 'next/link';

export const ToolsInspirationUI = () => {
  return (
    <section className="py-10 theme:border theme:border-primary theme:bg-primaryBg theme:text-primary">
      <div className="mx-2 md:mx-24 my-5">
        <p className="text-3xl font-bold">Инструменты для вдохновения</p>
        <p className="my-2 md:w-[800px]">
          Используйте наши инструменты, чтобы узнать свои интересы, ценности,
          навыки и увидеть, как они связаны с карьерой и возможностями обучения.
        </p>
      </div>
      <div className="mx-2 md:mx-0">
        <div className="grid grid-cols-1 md:grid-cols-3 md:px-24">
          {toolsData.map((tool, index) => (
            <Link href={tool.link} key={index}>
              <ToolsInspiration
                Icons={tool.Icons}
                title={tool.title}
                description={tool.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
