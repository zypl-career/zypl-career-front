'use client';

import { FC } from 'react';
import { TForgotComponentsProps } from './types';
import { Button, SuccessPasswordIcon } from '@/shared';
import Link from 'next/link';

export const ForgotSuccess: FC<TForgotComponentsProps> = () => {
  return (
    <div className="bg-white max-w-96 container rounded-md px-5 py-5">
      <div className="flex text-center flex-col gap-4 justify-center items-center">
        <SuccessPasswordIcon />
        <h1 className="font-bold text-2xl">Отлично</h1>
        <p className="text-gray-700">
          Ваш пароль успешно изменен. Теперь вы можете войти в систему,
          используя новый пароль
        </p>
        <Button asChild showRightArrowIcon rounded="full" className="w-full">
          <Link href="/auth/login">Войти в систему</Link>
        </Button>
      </div>
    </div>
  );
};
