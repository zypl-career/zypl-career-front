'use client';

import { FC, useCallback, useState } from 'react';
import { Button, Form, FormField, FormItem, FormMessage, Input, Timer } from '@ui';
import { TForgotComponentsProps, TPasswordCodeSchema } from './types';
import { checkCode } from '../services';
import { toast } from 'sonner';
import { passwordCodeSchema } from './schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';

export const ForgotPasswordCode: FC<TForgotComponentsProps> = ({
  onDone,
  values,
}) => {
  const [timerCount, setTimerCount] = useState<number>(60);
  const form = useForm<TPasswordCodeSchema>({
    resolver: zodResolver(passwordCodeSchema),
    mode: 'onSubmit',
  });

  const t = useTranslations('forgotPassowrdSections');

  const handleSendCode = useCallback(async ({ code }: TPasswordCodeSchema) => {
    try {
      const { message } = await checkCode(values.email || '', code ?? 0);
      onDone({
        message,
        values: { ...values, code },
        key: message === 'Email successfully verified' ? 'newPassword' : 'code',
      });
    } catch (error: any) {
      toast.error(error?.message);
    }
  }, [onDone, values]);

  const handleBack = useCallback(() => {
    onDone({
      message: '',
      values: { ...values, code: form.watch('code') },
      key: 'email',
    });
  }, [form, onDone, values]);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSendCode)} className="bg-white max-w-96 container rounded-md px-5 py-5">
        <h1 className="font-bold text-2xl mb-4">{t('code.title')}</h1>
        <p className="text-gray-500 mb-6">
          {t('code.subtitle')}
        </p>
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <Input
                variant="outline"
                label={t('code.code')}
                placeholder="0000"
                {...field}
                onChange={(e) => field.onChange(Number(e.target.value))}
              />
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col gap-4 my-5">
          <Button
            variant="default"
            showRightArrowIcon
            disabled={form.formState.isSubmitting}
            rounded="full"
            type="submit"
          >
            {t('buttons.next')}
          </Button>
          <Button variant="outline" rounded="full" type="button" onClick={handleBack}>
            {t('buttons.back')}
          </Button>
        </div>
        <p className="text-gray-500 text-sm">
          <Timer hidden defaultCount={60} onTick={setTimerCount} />
          {t('code.resend', { count: timerCount })}
        </p>
      </form>
    </Form>
  );
};
