import { FutureGrowthIcon, MoneyIcon, SkillsLevelIcon } from '@/shared';

export const SociologyCards = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex justify-around">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-2">
            <MoneyIcon className="mr-2" />
            <p>Даромади моҳона</p>
          </div>
          <p className="text-lg font-bold">аз 2,500 сомонӣ</p>
        </div>
        <div className="flex flex-col items-center border-l border-[#E5E7EB] pl-6">
          <div className="flex items-center mb-2">
            <SkillsLevelIcon className="mr-2" />
            <p>Skills level</p>
          </div>
          <p className="text-lg font-bold">12</p>
        </div>
        <div className="flex flex-col items-center border-l border-[#E5E7EB] pl-6">
          <div className="flex items-center mb-2">
            <FutureGrowthIcon className="mr-2" />
            <p>Future growth</p>
          </div>
          <p className="text-lg font-bold">Moderate</p>
        </div>
      </div>
    </div>
  );
};
