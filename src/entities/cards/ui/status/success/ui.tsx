import { Button, SuccessIcon } from '@/shared';

export const StatusSuccess = () => {
  return (
    <div className="py-5 bg-white w-[300px] md:w-[360px] rounded-md">
      <div className="flex justify-center">
        <SuccessIcon />
      </div>
      <div className="md:w-[352px] text-center">
        <p className="font-bold text-2xl">Регистрация</p>
        <p className="mb-8">
          Регистрация прошла успешно, в почту отправлено письмо для
          подтверждения, перейдите по ссылке в письме.
        </p>
        <div className="mt-4 flex justify-center px-5">
          <Button variant="status" showRightArrowIcon={true}>
            На главную
          </Button>
        </div>
      </div>
    </div>
  );
};
