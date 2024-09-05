import { CardSectionTeachers } from '@/entities';

export const ResourcesTeachers = () => {
  return (
    <div className="px-5 lg:px-28 theme:bg-primaryBg theme:text-primary theme:border theme:border-primary">
      <h3 className="font-bold text-2xl">Учебные ресурсы</h3>
      <p className="text-gray-600 theme:text-primary">
        Откройте для себя ресурсы, призванные помочь вашим детям повысить
        осведомленность о карьерном росте.
      </p>
      <CardSectionTeachers />
    </div>
  );
};
