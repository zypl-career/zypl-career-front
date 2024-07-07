import { Button, Input } from '@/shared';

export const LoginForm = () => {
  return (
      <div className="flex justify-center">
        <div className="md:w-[408px] bg-white rounded-md px-5">
          <p className="font-bold text-2xl py-5">Войти в систему</p>
          <p className="text-gray-500">
            Пожалуйста, войдите в систему, используя свою учетную запись
            zypl.career
          </p>
          <div className="py-5">
            <div>
              <Input label="Email*" variant="outline" />
              <div className="relative">
                <Input label="Пароль*" variant="outline" />
                <p className="absolute right-0 top-16 mt-2 text-sm text-[#4B5563] underline cursor-pointer transform transition-transform duration-200 active:scale-95">
                  Забыли пароль?
                </p>
              </div>
            </div>
            <div className="py-10">
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
        </div>
      </div>
  );
};
