'use client';

import { useTranslations } from 'next-intl';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  PasswordInput,
} from '@ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useSignIn } from './services';
import { SignInSchema } from './schema';
import { TSignIn } from './types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {
  const t = useTranslations('loginForm');
  const router = useRouter();
  const form = useForm<TSignIn>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      password: '',
      email: '',
    },
  });

  const signIn = useSignIn();

  const onSubmit = (data: TSignIn) => {
    signIn.mutate(data, {
      onError: () => {
        form.setError('password', {
          type: 'custom',
          message: t('loginError'),
        });
      },
      onSuccess: () => {
        router.push('/');
      },
    });
  };

  return (
    <div className="flex justify-center py-10 theme:bg-primaryBg theme:text-primary">
      <div className="md:w-[408px] bg-white rounded-md px-5 theme:bg-primaryBg theme:border theme:border-primary">
        <p className="font-bold text-2xl py-5">{t('title')}</p>
        <p className="text-gray-500 theme:text-primary">{t('description')}</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      variant="outline"
                      label={t('emailLabel')}
                      type="email"
                      placeholder={t('emailPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <PasswordInput
                      label={t('passwordLabel')}
                      variant="outline"
                      placeholder={t('passwordPlaceholder')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end mt-8 mb-4 text-gray-600">
              <Link href="forgot-password" className="underline">
                {t('forgotPassword')}
              </Link>
            </div>
            <div className="">
              <Button
                rounded="full"
                className="w-full"
                showRightArrowIcon
                type="submit"
              >
                {t('loginButton')}
              </Button>
              <div className="flex justify-center items-center my-4">
                <span className="w-20 border-t border-gray-300"></span>
                <span className="text-[#6B7280] text-sm px-2 theme:text-primary">
                  {t('noAccountMessage')}
                </span>
                <span className="w-20 border-t border-gray-300"></span>
              </div>
            </div>
          </form>
        </Form>
        <div className="pb-10">
          <Button variant="login" rounded="full" asChild>
            <Link href="/auth/register">{t('registerButton')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
