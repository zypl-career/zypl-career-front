'use client';

import { FC } from 'react';
import { TForgotComponentsProps } from './types';
import { Button, SuccessPasswordIcon } from '@/shared';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const ForgotSuccess: FC<TForgotComponentsProps> = () => {
  const t = useTranslations('forgotPassowrdSections');
  return (
    <div className="bg-white max-w-96 container rounded-md px-5 py-5">
      <div className="flex text-center flex-col gap-4 justify-center items-center">
        <SuccessPasswordIcon />
        <h1 className="font-bold text-2xl">{t('successFull.title')}</h1>
        <p className="text-gray-700">{t('successFull.subtitle')}</p>
        <Button asChild showRightArrowIcon rounded="full" className="w-full">
          <Link href="/auth/login">{t('buttons.login')}</Link>
        </Button>
      </div>
    </div>
  );
};
