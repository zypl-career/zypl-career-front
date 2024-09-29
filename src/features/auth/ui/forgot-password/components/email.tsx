import { Button, Input, toast } from '@ui';
import { FC, useState } from 'react';
import { TForgotComponentsProps } from './types';
import { sendCode } from '../services';

export const ForgotPasswordEmail: FC<TForgotComponentsProps> = ({ onDone }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async () => {
    try {
      setIsLoading(true);
      const { message } = await sendCode(email);
      onDone({
        message,
        values: { email },
        key: message === 'code successfully sended' ? 'code' : 'email',
      });
    } catch (error: any) {
      toast({ variant: 'error', title: error?.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white max-w-96 container rounded-md px-5 py-5">
      <p className="font-bold  md:text-2xl">Восстановление пароля</p>
      <div className="py-5">
        <Input
          label="Email*"
          variant="outline"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          disabled={isLoading}
        />
      </div>
      <div className="flex flex-col gap-4">
        <Button
          variant="default"
          showRightArrowIcon
          disabled={isLoading}
          onClick={handleSendCode}
          rounded="full"
        >
          Далее
        </Button>
        <Button variant="ghost">Назад</Button>
      </div>
    </div>
  );
};
