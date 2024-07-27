import { CardSectionIndustries } from '@/entities';

export const ResourcesParents = () => {
  return (
    <div className="px-5 lg:px-28">
      <h3 className="font-bold text-2xl">Ресурсы для родителей</h3>
      <p className="text-gray-600">
        Откройте для себя ресурсы, призванные помочь вашим детям повысить
        осведомленность о карьерном росте.
      </p>
      <CardSectionIndustries />
    </div>
  );
};
