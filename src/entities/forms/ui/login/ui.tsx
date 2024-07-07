import {Button, Input} from "@/shared";

export const LoginForm = () => {
  return (
    <div className="md:w-[408px] bg-white px-5">
      <p>Войти в систему</p>
      <p>
        Пожалуйста, войдите в систему, используя свою учетную запись zypl.career
      </p>
      <div>
        <Input label="Email*" variant="outline" />
        <Input label="Пароль*" variant="outline" />
      </div>
      <div>
        <Button variant="status" showRightArrowIcon={true}>
          Войти
        </Button>

        <div className="flex justify-center items-center my-4">
          <span className="w-20 border-t border-gray-300"></span>
          <span className="text-[#6B7280] text-sm px-2">
            У вас нет аккаунта?
          </span>
          <span className="w-20 border-t border-gray-300"></span>
        </div>
        <Button variant="login">Зарегистрироваться</Button>
      </div>
    </div>
  );
};
