'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@ui';
import { TForgotComponentsProps, TNewPasswordSchema } from './types';
import { changePassword } from '../services';
import { newPasswordSchema } from './schema';
import { useTranslations } from 'next-intl';

export const ForgotPasswordPassword: FC<TForgotComponentsProps> = ({
  onDone,
  values,
}) => {
  const form = useForm<TNewPasswordSchema>({
    defaultValues: { newPassword: '', confirmPassword: '' },
    resolver: zodResolver(newPasswordSchema),
  });

  const t = useTranslations('forgotPassowrdSections');

  const handleChangePassword = async (data: TNewPasswordSchema) => {
    try {
      const { message } = await changePassword(
        values.email || '',
        data.newPassword,
        values.code ?? 0,
      );
      onDone({
        message,
        values: { ...values, newPassword: data.newPassword },
        key:
          message === 'Password successfully changed'
            ? 'success'
            : 'newPassword',
      });
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  const handleBack = () => {
    onDone({
      message: '',
      values: { ...values, newPassword: form.watch('newPassword') },
      key: 'code',
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleChangePassword)}
        className="bg-white max-w-96 container rounded-md px-5 py-5"
      >
        <h1 className="font-bold text-2xl mb-4">{t('password.title')}</h1>
        <p className="text-gray-500 mb-6">{t('password.subtitle')}</p>
        <div className="flex flex-col gap-3 mb-5">
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('password.newPassword')}</FormLabel>
                <FormControl>
                  <Input
                    variant="outline"
                    type="password"
                    placeholder="****"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('password.confirmPassword')}</FormLabel>
                <FormControl>
                  <Input
                    variant="outline"
                    type="password"
                    placeholder="****"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button
            variant="default"
            showRightArrowIcon
            isLoading={form.formState.isSubmitting}
            rounded="full"
            type="submit"
          >
            {t('buttons.update')}
          </Button>
          <Button
            variant="outline"
            rounded="full"
            type="button"
            className="w-full"
            onClick={handleBack}
          >
            {t('buttons.back')}
          </Button>
        </div>
      </form>
    </Form>
  );
};
