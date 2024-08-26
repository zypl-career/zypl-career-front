import { TableResults } from '@/entities';

export const YourResultDesc = () => {
  return (
    <div className="lg:px-28">
      <div className="py-10">
        <h3 className="font-semibold text-3xl">Ваш результат</h3>
        <p className="text-gray-600 lg:w-[800px] pb-5">
          Поздравляем! Ваши результаты теста на профориентацию готовы. Ниже вы
          найдете основные аспекты, которые помогут вам лучше понять свои
          профессиональные интересы и направления.
        </p>
        <hr className="bg-gray-900" />
      </div>
      <div>
        <TableResults title="table" />
      </div>
    </div>
  );
};
