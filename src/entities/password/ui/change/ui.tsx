import { Button, Input } from '@/shared';

export const ChangePass = () => {
  return (
    <div className="bg-white w-[300px] md:w-[408px] rounded-md px-5 py-5">
      <p className="font-bold  md:text-2xl">Сменить пароль</p>
      <p className="text-gray-500">
        Мы отправили код подтверждения на вашу электронную почту
      </p>
      <div className="py-5">
        <Input label="Код потдверждения" variant="outline" />
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
