import { Input, Select } from '@/shared';

export const FormRegister = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="p-6 bg-white rounded-lg md:w-[847px]">
        <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Персональные данные</h3>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Фамилия*" variant="outline" />
            <Input label="Имя*" variant="outline" />
            <Input label="Отчество" variant="outline" />
            <Select
              label="Пол*"
              options={['Мужской', 'Женский']}
              variant="outline"
              className="mt-3"
            />
            <Input label="Возраст" variant="outline" />
            <Input label="Район" variant="outline" />
            <Select
              label="Тип занятости"
              options={['Полная', 'Частичная']}
              variant="outline"
              className="mt-3"
            />
            <Input label="Школа" variant="outline" />
          </div>
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
          <Input label="Email*" variant="outline" />
          <div className="grid grid-cols-2 gap-4">
            <Input label="Пароль*" variant="outline" type="password" />
            <Input
              label="Подтвердите пароль*"
              variant="outline"
              type="password"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
