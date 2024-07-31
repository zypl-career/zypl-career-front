import { NextCard } from '@/entities';

export const YourPupil = () => {
  return (
    <div className="py-10 px-5 lg:px-28">
      <h3 className="font-semibold text-2xl">Ваши ученики</h3>
      <p className="text-gray-600">
        Пожалуйста, выберите ученика, чтобы ознакомиться с результатами его
        теста.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10">
        <div>
          <NextCard
            title="Хусниддин Абдуллоев Абдуллоевич"
            description="Школа №71 г. Душанбе"
          />
          <NextCard
            title="Зухрия Алиева Алиджановона"
            description="Школа №71 г. Душанбе"
          />
          <NextCard
            title="Вохидов Акбаршох  Вохидович"
            description="Школа №71 г. Душанбе"
          />
          <NextCard
            title="Махмадова Мубориза Махмадовна"
            description="Школа №9 (гимназия им. Низами)"
          />
          <NextCard
            title="Махмадова Мубориза Махмадовна"
            description="Школа №9 (гимназия им. Низами)"
          />
        </div>
        <div>
          <NextCard
            title="Хусниддин Абдуллоев Абдуллоевич"
            description="Школа №71 г. Душанбе"
          />
          <NextCard
            title="Зухрия Алиева Алиджановона"
            description="Школа №71 г. Душанбе"
          />
          <NextCard
            title="Вохидов Акбаршох  Вохидович"
            description="Школа №71 г. Душанбе"
          />
          <NextCard
            title="Махмадова Мубориза Махмадовна"
            description="Школа №9 (гимназия им. Низами)"
          />
          <NextCard
            title="Махмадова Мубориза Махмадовна"
            description="Школа №9 (гимназия им. Низами)"
          />
        </div>
      </div>
    </div>
  );
};
