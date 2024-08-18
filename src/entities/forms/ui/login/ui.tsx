'use client';

import { redirect } from 'next/navigation';
import { Button, Form, FormControl, FormField, FormItem, FormMessage, Input, PasswordInput } from '@ui';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSignIn } from "./services";
import { SignInSchema } from "./schema";
import { TSignIn } from "./types";

export const LoginForm = () => {
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
          message: 'Неверный логин или пароль',
        });
      },
      onSuccess: () => {
        redirect('/');
      },
    });
  };

  return (
    <div className="flex justify-center py-10 theme:bg-primaryBg theme:text-primary">
      <div className="md:w-[408px] bg-white rounded-md px-5 theme:bg-primaryBg theme:border theme:border-primary">
        <p className="font-bold text-2xl py-5">Войти в систему</p>
        <p className="text-gray-500 theme:text-primary">
          Пожалуйста, войдите в систему, используя свою учетную запись
          zypl.career
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="py-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      variant="outline"
                      label="Email*"
                      type="email"
                      placeholder="Введите почту"
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
                    <PasswordInput label="Пароль*" variant="outline" placeholder="Введите пароль" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="py-10">
              <Button variant="status" showRightArrowIcon>
                Войти
              </Button>

              <div className="flex justify-center items-center my-4">
                <span className="w-20 border-t border-gray-300"></span>
                <span className="text-[#6B7280] text-sm px-2 theme:text-primary">
                  У вас нет аккаунта?
                </span>
                <span className="w-20 border-t border-gray-300"></span>
              </div>
              <Button variant="login">Зарегистрироваться</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
