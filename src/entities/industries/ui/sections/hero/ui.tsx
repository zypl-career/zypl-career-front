import { Industries } from '@/shared';

export const IndustriesHero = () => {
  return (
    <section className="bg-[#F8F8F8]">
      <div className="container flex flex-col md:flex-row justify-between">
        <div className="lg:w-96 py-24 flex justify-center order-1 md:order-2">
          <Industries />
        </div>
        <div className="py-5 md:py-32 order-2 md:order-1">
          <p className="text-2xl md:text-5xl font-bold md:pb-8">Отрасли</p>
          <p className="md:w-[522px] text-gray-600">
            Изучите различные отрасли, в которых вы можете оказать влияние.
            Ознакомьтесь с обзорами отрасли, чтобы узнать больше о каждой
            отрасли, в том числе о ведущих профессиях и перспективах роста.
          </p>
        </div>
      </div>
    </section>
  );
};
