export const KeyFindings = () => {
  return (
    <div className="bg-[#F2F5F8] rounded-xl p-10 ">
      <h3 className="py-2 text-xl font-bold">Ключевые выводы:</h3>
      <div className="leading-9">
        <ul className="text-[#2B2B2B]">
          <li>
            <span className="font-bold">
              {' '}
              Онлайн-тесты сталкиваются с теми же проблемами надежности
              результатов,{' '}
            </span>
            что и в дистанционном образовании, но им нужен опыт, чтобы правильно
            справляться с ним.
          </li>
          <li>
            <span className="font-bold">
              Удаленные экзамены не поощряют мошенничество.{' '}
            </span>{' '}
            Исследования показывают почти идентичные цифры.
          </li>
          <li>
            <span className="font-bold">
              Существует всего несколько популярных методов онлайн-тестирования.{' '}
            </span>
            Мы перечисляем и описываем их.
          </li>
        </ul>
      </div>
    </div>
  );
};
