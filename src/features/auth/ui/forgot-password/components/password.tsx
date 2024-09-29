'use client';

import { Button, Input, toast } from '@ui';
import { ChangeEvent, FC, useState } from 'react';
import { TForgotComponentsProps } from './types';
import { changePassword } from '../services';

export const ForgotPasswordPassword: FC<TForgotComponentsProps> = ({
  onDone,
  values,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [password, setPassword] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleChangePassword = async () => {
    try {
      setIsLoading(true);
      const { message } = await changePassword(
        values.email || '',
        password.newPassword,
        values.code ?? 0,
      );
      onDone({
        message,
        values: { ...values, newPassword: password.newPassword },
        key:
          message === 'Password successfully changed'
            ? 'success'
            : 'newPassword',
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
        label="Пароль"
        placeholder="0000"
        name="newPassword"
        value={password.newPassword}
        onChange={handleUpdate}
      />
      <Input
        label="Подтвердите пароль"
        placeholder="0000"
        name="confirmPassword"
        value={password.confirmPassword}
        onChange={handleUpdate}
      />
      <div className="flex flex-col gap-4">
        <Button
          variant="default"
          showRightArrowIcon
          disabled={isLoading}
          onClick={handleChangePassword}
          rounded="full"
        >
          Сменить пароль
        </Button>
        <Button variant="ghost">Назад</Button>
      </div>
    </div>
  );
};
