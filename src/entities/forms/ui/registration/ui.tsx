import { Input } from '@/shared';

export const FormRegister = () => {
  return (
    <div className="">
      <p>Регистрация</p>
      <div className="flex items-center">
        <p>Персональные данные</p>
        <Input label="Фамилия*" variant="outline" />
        <Input label="Имя*" variant="outline" />
      </div>
      <div>
        <Input label="Имя*" variant="outline" />
      </div>
      <div className="flex items-center">
        <Input label="Тип занятости" variant="outline" />
        <Input label="Школа" variant="outline" />
      </div>
      <div>
        <p>Безопастность</p>

        <Input label="Email*" variant="outline" />
      </div>
      <div>
        <Input label="Тип занятости" variant="outline" />
        <Input label="Школа" variant="outline" />
      </div>
    </div>
  );
};
