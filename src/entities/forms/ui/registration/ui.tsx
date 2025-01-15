'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  SelectField,
} from '@ui';
import { districts } from '@constants';
import { useUserStore } from '@stores';
import { setFieldError } from '@utils';
import { SignUpSchema } from './schema';
import { useSignUp } from './services';
import { TGender, TSignUp } from './types';
import { useSignIn } from '../login/services';

export const FormRegister = () => {
  const t = useTranslations('formRegister');
  const router = useRouter();

  const genders: TGender[] = useMemo(() => {
    return [
      { label: t('male'), value: 'male' },
      { label: t('female'), value: 'female' },
    ];
  }, [t]);

  const roleList = useMemo(() => {
    return [
      { id: 'teacher', name: t('teacher') },
      {
        id: 'student',
        name: t('student'),
      },
      {
        id: 'parents',
        name: t('parents'),
      },
    ];
  }, [t]);

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
  const { setUser } = useUserStore();
  const signUp = useSignUp();
  const signIn = useSignIn();

  const onSubmit = (data: TSignUp) => {
    const mappedData = {
      ...data,
      age: Number(data.age),
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...sendData } = mappedData;

    signUp.mutate(sendData, {
      onError() {
        setFieldError(form);
      },
      onSuccess: () => {
        signIn.mutate(sendData, {
          onSuccess: (user) => {
            setUser(user);
            router.push('/');
          },
        });
      },
    });
  };

  return (
    <div className="flex justify-center py-10">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="py-5">
            <div className="p-6 bg-white rounded-lg md:w-[847px]">
              <h2 className="text-2xl font-bold mb-4">{t('title')}</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">
                  {t('personalData')}
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
                              label={t('surname')}
                              variant="outline"
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
                              label={t('name')}
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
                            label={t('patronymic')}
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
                            <SelectField
                              label={t('role')}
                              options={roleList}
                              printType="name"
                              valueType="id"
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
                            <SelectField
                              label={t('gender')}
                              options={genders}
                              printType="label"
                              valueType="value"
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
                              label={t('age')}
                              type="number"
                              {...field}
                              onChange={(e) => field.onChange(parseInt(e.target.value, 10) || '')}
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
                              label={t('school')}
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
                          <SelectField
                            placeholder={t('districtPlaceholder')}
                            label={t('district')}
                            options={districts}
                            printType="label"
                            valueType="value"
                            variant="outline"
                            className="w-full md:w-[393px]"
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
                <h3 className="text-xl font-semibold mb-2">{t('security')}</h3>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className="w-full md:w-[393px]"
                          label={t('email')}
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
                            label={t('password')}
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
                            label={t('confirmPassword')}
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
                <Button
                  type="submit"
                  className="md:w-[400px]"
                  rounded="full"
                  showRightArrowIcon
                >
                  {t('registerButton')}
                </Button>
              </div>
            </div>
          </form>
        </Form>
        <div className="text-center mt-4">
          <p>
            {t('alreadyHaveAccount')}{' '}
            <Link href="/login" className="text-blue-500 hover:underline">
              {t('loginLink')}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
