import { Button, Password } from '@/shared';

export const ChangePass = () => {
  return (
    <div className="bg-white w-[300px] md:w-[408px] rounded-md px-5 py-5">
      <p className="font-bold  md:text-2xl">Сменить пароль</p>
      <p className="text-gray-500">
        Мы отправили код подтверждения на вашу электронную почту
      </p>
      <div className="py-5">
        <Password label="Код потдверждения" variant="outline" />
        <p className="text-gray-500 py-2 text-sm">
          Повторная отправка через 43 сек
        </p>
      </div>
      <Button variant="status" showRightArrowIcon={true}>
        Далее
      </Button>
      <div className="flex justify-center">
        <Button variant="none">Назад</Button>
      </div>
    </div>
  );
};
