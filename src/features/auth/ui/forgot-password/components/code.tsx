'use client';

import { FC, useState } from 'react';
import { Button, Input, Timer, toast } from '@ui';
import { TForgotComponentsProps } from './types';
import { checkCode } from '../services';

export const ForgotPasswordCode: FC<TForgotComponentsProps> = ({
  onDone,
  values,
}) => {
  const [code, setCode] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async () => {
    try {
      setIsLoading(true);
      const { message } = await checkCode(values.email || '', code ?? 0);
      onDone({
        message,
        values: { ...values, code },
        key: message === 'Email successfully verified' ? 'newPassword' : 'code',
      });
    } catch (error: any) {
      toast({ variant: 'error', title: error?.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white max-w-96 container rounded-md px-5 py-5">
      <h1 className="font-bold text-2xl mb-4">Сменить пароль</h1>
      <p className="text-gray-500 mb-6">
        Мы отправили код подтверждения на вашу электронную почту
      </p>
      <Input
        label="Код потдверждения"
        placeholder="0000"
        value={code}
        onChange={(e) => setCode(Number(e.target.value))}
      />
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
      <p className="text-gray-500 text-sm">
        Повторная отправка через 43 сек <Timer defaultCount={60} />
      </p>
    </div>
  );
};
