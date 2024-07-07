import { SuccessIcon, ExcellentIcon } from '@/shared';
import { StatusCard } from '@/entities';

const TestPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="px-5 md:px-24 py-10">
        <StatusCard
          Icon={SuccessIcon}
          title="Регистрация"
          message="Регистрация прошла успешнодля, в почту отпарв адыовадлс, для подтверждения перейдите по ссылке в письме"
        />
        <br />
        <StatusCard
          Icon={ExcellentIcon}
          title="Отлично"
          message="Ваш пароль успешно изменен. Теперь вы можете войти в систему, используя новый пароль"
        />
      </div>
    </div>
  );
};

export default TestPage;
