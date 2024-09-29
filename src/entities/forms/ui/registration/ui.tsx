'use client';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Select,
} from '@ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SignUpSchema } from './schema';
import { useSignUp } from './services';
import { TSignUp } from './types';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { genderList, roleList } from './consts';
import { useSignIn } from '../login/services';

export const FormRegister = () => {
  const router = useRouter();

  const form = useForm<TSignUp>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      name: '',
      surname: '',
      gender: 'male',
      role: 'student',
      email: '',
      password: '',
      patronymic: '',
      age: '',
      district: '',
      school: '',
      confirmPassword: '',
    },
  });

  const signUp = useSignUp();
  const signIn = useSignIn();

  const onSubmit = (data: TSignUp) => {
    const mappedData = {
      ...data,
      age: Number(data.age),
      role: roleList.find((r) => r.name === data.role)?.id || '',
      gender: genderList.find((r) => r.name === data.gender)?.id || '',
    };
    if (data.password !== data.confirmPassword) {
      return form.setError('password', {
        type: 'custom',
        message: 'Пароль не совпадает!',
      });
    }
    signUp.mutate(mappedData, {
      onSuccess: () => {
        signIn.mutate(mappedData);
        router.push('/');
      },
    });
  };
  return (
    <div className="flex justify-center py-10">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="py-5">
            <div className="p-6 bg-white rounded-lg md:w-[847px]">
              <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  Персональные данные
                </h3>
                <div className="">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
                    <FormField
                      control={form.control}
                      name="surname"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              variant="outline"
                              label="Фамилия*"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              variant="outline"
                              label="Имя*"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="patronymic"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="w-full md:w-[393px]"
                            variant="outline"
                            label="Отчество"
                            type="text"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              label="Роле*"
                              options={['Студент', 'Учитель', 'Родители']}
                              variant="outline"
                              className="mt-3"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Select
                              label="Пол*"
                              options={['Мужской', 'Женский']}
                              variant="outline"
                              className="mt-3"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              variant="outline"
                              label="Возраст"
                              type="number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="school"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              variant="outline"
                              label="Школа"
                              type="text"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="district"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="w-full md:w-[393px]"
                            label="Район"
                            variant="outline"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Безопасность</h3>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="w-full md:w-[393px]"
                          label="Email*"
                          variant="outline"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            label="Пароль*"
                            variant="outline"
                            type="password"
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
                        <FormControl>
                          <Input
                            label="Подтвердите пароль*"
                            variant="outline"
                            type="password"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <Button variant="auth" type="submit" showRightArrowIcon={true}>
                  Зарегистрироваться
                </Button>
              </div>
              <div className="flex justify-center items-center mt-4">
                <span className="w-20 border-t border-gray-300"></span>
                <span className="text-[#6B7280] text-sm px-2">
                  У вас есть аккаунт?
                </span>
                <span className="w-20 border-t border-gray-300"></span>
              </div>
            </div>
          </form>
        </Form>
        <div className="flex justify-center">
          <Link href={'/login'}>
            <Button variant="outlineSecondary">Войти в систему</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
