import { Button, Password } from '@/shared';

export const ConfirmPass = () => {
  return (
    <div className="bg-white w-[300px] md:w-[408px] rounded-md px-5 py-5">
      <p className="font-bold  md:text-2xl">Сменить пароль</p>
      <p className="text-gray-500 py-2">
        Впишите новый пароль и больше не забывайте его
      </p>
      <div className="py-5">
        <Password label="Пароль" variant="outline" />
        <div className="py-4">
          <Password label="Подтвердите пароль" variant="outline" />
        </div>
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
