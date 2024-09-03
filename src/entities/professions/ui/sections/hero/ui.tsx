import { Professions } from '@/shared';

export const HeroPartners = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="lg:w-96 pt-24 flex justify-center order-1 md:order-2">
          <Professions />
        </div>
        <div className="py-5 md:py-32 order-2 md:order-1">
          <p className="text-2xl md:text-5xl font-bold md:pb-8">Профессии</p>
          <p className="md:w-[522px] text-gray-600">
            Ищите и изучайте сотни профессий с информацией, включающей описания
            основных выполняемых задач, требуемого уровня квалификации,
            заработной платы и перспектив роста на рабочем месте.
          </p>
        </div>
      </div>
    </div>
  );
};
