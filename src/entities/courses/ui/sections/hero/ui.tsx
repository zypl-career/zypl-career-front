import { TabsCourses } from '@/entities';
import { useTranslations } from 'next-intl';

export const CoursesHero = () => {
  const t = useTranslations();
  
  return (
    <div className="container px-5">
      <h2 className="text-3xl font-bold py-8">{t('ToolsInspiration.tools.courses.title')}</h2>
      <p>
        {t('ToolsInspiration.tools.courses.description')}
      </p>
      <div className="my-5">
        <TabsCourses />
      </div>
    </div>
  );
};
