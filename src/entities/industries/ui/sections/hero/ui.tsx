import { Industries } from '@/shared';

export const IndustriesPartners = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-[#F8F8F8] px-20">
      <div className="py-5 px-2  md:py-32">
        <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
          Отрасли
        </p>
        <p className="md:w-[522px] text-gray-600">
          Изучите различные отрасли, в которых вы можете оказать влияние.
          Ознакомьтесь с обзорами отрасли, чтобы узнать больше о каждой отрасли,
          в том числе о ведущих профессиях и перспективах роста.
        </p>
      </div>
      <div className="lg:w-96 py-24">
        <Industries />
      </div>
    </div>
  );
};
