'use client';

import { useCallback, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { zodResolver } from '@hookform/resolvers/zod';
import { removeAccessToken, removeUserStorage } from '@utils';
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  SelectField,
  Spinner,
} from '@ui';
import { TGender } from '@entities';
import { TUserEditRequest } from './types';
import { UserEditSchema } from './schema';
import { useEditUser, useUserById } from './services';
import { districts } from '@constants';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { LogOutIcon } from 'lucide-react';
import { useUserStore } from '@stores';

export const UserEdit = () => {
  const { userData, setUser } = useUserStore();
  const router = useRouter();
  const t = useTranslations('formRegister');
  const currentUserApi = useUserById(userData?.user?.id ?? '');
  const userEditApi = useEditUser(userData?.user?.id ?? '');

  const userEditForm = useForm<TUserEditRequest>({
    values: {
      name: '',
      surname: '',
      gender: 'male',
      age: '',
      district: '',
      role: '',
      school: '',
      email: '',
      ...currentUserApi.data,
      password: '',
    },
    resolver: zodResolver(UserEditSchema),
  });

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

  const disableField = useMemo(
    () => currentUserApi.isLoading || userEditApi.isPending,
    [currentUserApi.isLoading, userEditApi.isPending],
  );

  const submitHandler = (data: TUserEditRequest) => {
    userEditApi.mutate(data, {
      onSuccess: () => {
        toast.success('Данные обновлены');
        if (currentUserApi.data) {
          setUser({ 
            ...userData, 
            access: userData?.access ?? '', 
            refresh: userData?.refresh ?? '', 
            user: currentUserApi.data ?? null,
          });
        }
      },
    });
  };

  const logoutHandler = useCallback(() => {
    removeAccessToken();
    removeUserStorage();
    router.push('/');
  }, [router]);

  return (
    <Form {...userEditForm}>
      <form
        onSubmit={userEditForm.handleSubmit(submitHandler)}
        className="bg-white rounded-md p-6 max-w-4xl mx-auto shadow mt-16 mb-20"
      >
        <header className="flex justify-between items-center mb-6">
          <h1 className="sm:text-2xl text-xl whitespace-nowrap font-bold">
            Настройки аккаунта
          </h1>
          <Button
            rounded="full"
            endIcon={<LogOutIcon size="16" />}
            onClick={logoutHandler}
          >
            {t('logout')}
          </Button>
        </header>
        <h2 className="text-xl font-bold mb-4">Персональные данные</h2>
        <main className="flex flex-col gap-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              name="surname"
              control={userEditForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={disableField}
                      label={t('surname')}
                      placeholder="Бобоев"
                      variant="outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="name"
              control={userEditForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={disableField}
                      label={t('name')}
                      placeholder="Ахмад"
                      variant="outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="patronymic"
              control={userEditForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={disableField}
                      label={t('patronymic')}
                      placeholder="Халимбердиевич"
                      variant="outline"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={userEditForm.control}
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
            <FormField
              control={userEditForm.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      variant="outline"
                      disabled={disableField}
                      label={t('age')}
                      type="number"
                      {...field}
                      onChange={(e) =>
                        field.onChange(parseInt(e.target.value, 10) || '')
                      }
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={userEditForm.control}
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
                      className="w-full"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex items-center sm:flex-row flex-col gap-4">
            <FormField
              control={userEditForm.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
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
              control={userEditForm.control}
              name="school"
              render={({ field }) => (
                <FormItem className="flex-1 w-full">
                  <FormControl>
                    <Input
                      variant="outline"
                      disabled={disableField}
                      label={t('school')}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="mb-10">
            <h2 className="text-xl font-bold mb-4">{t('security')}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                control={userEditForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full"
                        placeholder="ahmad2454@mail.ru"
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
              <div></div>
              <FormField
                control={userEditForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        label={t('password')}
                        placeholder="********"
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
                control={userEditForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        label={t('confirmPassword')}
                        placeholder="********"
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
        </main>
        <footer className="flex items-center justify-center gap-4">
          <Button
            className="text-xl font-semibold sm:w-60"
            type="button"
            rounded="full"
            variant="outline"
          >
            {t('back')}
          </Button>
          <Button
            className="text-xl font-semibold sm:w-60"
            type="submit"
            rounded="full"
            variant="default"
            disabled={disableField}
            endIcon={disableField ? <Spinner /> : null}
          >
            {t('save')}
          </Button>
        </footer>
      </form>
    </Form>
  );
};
