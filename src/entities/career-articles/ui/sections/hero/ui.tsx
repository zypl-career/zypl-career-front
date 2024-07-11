import { CareerArticles } from '@/shared';

export const HeroCareerArticles = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-white px-20">
      <div className="py-5 px-2  md:py-32">
        <p className="text-2xl md:text-5xl md:w-[522px] font-bold md:pb-8">
          Карьерные статьи
        </p>
        <p className="md:w-[522px] text-gray-600">
          Изучите советы и рекомендации и откройте для себя информацию по многим
          темам карьеры, таким как опыт работы, стажировка, написание резюме и
          подача заявления о приеме на работу.
        </p>
      </div>
      <div className="lg:w-96 py-24">
        <CareerArticles />
      </div>
    </div>
  );
};
