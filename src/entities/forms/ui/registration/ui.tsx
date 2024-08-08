import { Button, Input, Select } from '@/shared';

export const FormRegister = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="p-6 bg-white rounded-lg md:w-[847px]">
        <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Персональные данные</h3>
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
              <Input label="Фамилия*" variant="outline" />
              <Input label="Имя*" variant="outline" />
            </div>
            <Input
              className="w-full md:w-[393px]"
              label="Отчество"
              variant="outline"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
              <Select
                label="Пол*"
                options={['Мужской', 'Женский']}
                variant="outline"
                className="mt-3"
              />
              <div className="lg:mt-6">
                <Input label="Возраст" variant="outline" />
              </div>
            </div>
            <Input
              className="w-full md:w-[393px]"
              label="Район"
              variant="outline"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
              <Select
                label="Тип занятости"
                options={['Полная', 'Частичная']}
                variant="outline"
                className="mt-3"
              />
              <div className="lg:mt-6">
                <Input label="Школа" variant="outline" />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
          <Input
            className="w-full md:w-[393px]"
            label="Email*"
            variant="outline"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
            <Input label="Пароль*" variant="outline" type="password" />
            <Input
              label="Подтвердите пароль*"
              variant="outline"
              type="password"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button variant="auth" showRightArrowIcon={true}>
            Зарегистрироваться
          </Button>
        </div>
        <div className="flex justify-center items-center my-4">
          <span className="w-20 border-t border-gray-300"></span>
          <span className="text-[#6B7280] text-sm px-2">
            У вас есть аккаунт?
          </span>
          <span className="w-20 border-t border-gray-300"></span>
        </div>
        <div className="flex justify-center">
          <Button variant="outlineSecondary">Войти в систему</Button>
        </div>
      </div>
    </div>
  );
};
