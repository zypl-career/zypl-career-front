import { NextCard } from '@/entities';

export const YourChildren = () => {
  return (
    <div className="py-10 px-5 lg:px-28">
      <h3 className="font-semibold text-2xl">Ваши дети</h3>
      <p className="text-gray-600">
        Пожалуйста, выберите ученика, чтобы ознакомиться с результатами его
        теста.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10">
        <div>
          <NextCard
            title="Абдуллоев Хусниддин Абдуллоевич"
            description="Школа №71 г. Душанбе"
          />
          <NextCard
            title="Абдуллоев Хусниддин Абдуллоевич"
            description="Школа №71 г. Душанбе"
          />
        </div>
        <div>
          <NextCard
            title="Абдуллоев Хусниддин Абдуллоевич"
            description="Школа №71 г. Душанбе"
          />
          <NextCard
            title="Абдуллоев Хусниддин Абдуллоевич"
            description="Школа №9 (гимназия им. Низами)"
          />
        </div>
      </div>
    </div>
  );
};
