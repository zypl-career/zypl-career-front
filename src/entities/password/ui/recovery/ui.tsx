import { Button, Input } from '@/shared';

export const PasswordRecovery = () => {
  return (
    <div className="bg-white w-[300px] md:w-[408px] rounded-md px-5 py-5">
      <p className="font-bold  md:text-2xl">Восстановление пароля</p>
      <div className="py-5">
        <Input label="Email*" variant="outline" />
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
