'use client';

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  RadioGroup,
  RadioGroupItem,
  SelectField,
} from '@ui';
import { useForm } from 'react-hook-form';
import { TUserFastRequest } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateUserFast } from './schema';
import { districts } from '@/shared/constants';
import { useRouter } from 'next/navigation';
import { useTestSignin } from './services';
import { setFieldError } from '@/shared';
import { useTranslations } from 'next-intl';

export const FormInfo = () => {
  const t = useTranslations('userFast');
  const router = useRouter();
  const form = useForm<TUserFastRequest>({
    resolver: zodResolver(CreateUserFast),
    defaultValues: {
      age: '',
      gender: 'male',
      district: '',
    },
  });

  const userFastCreate = useTestSignin();

  const onSubmit = (data: TUserFastRequest) => {
    const mappedData = {
      ...data,
      age: Number(data.age),
    };

    userFastCreate.mutate(mappedData, {
      onError() {
        setFieldError(form);
      },
      onSuccess: () => {
        router.push('/values');
      },
    });
  };

  return (
    <Form {...form}>
      <form
        className="bg-white py-8 px-7 max-w-md mx-2 lg:mx-auto md:mx-auto rounded-lg border my-10 "
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <p className="font-semibold mb-4 pb-3 border-b">
          {t('title')}
        </p>

        <div className="mb-4">
          <label className="block text-gray-700">{t('gender')}</label>
          <div className="mt-2">
            <RadioGroup defaultValue="male">
              <RadioGroupItem value="male" id="male" label={t('male')} />
              <RadioGroupItem value="female" id="female" label={t('female')} />
            </RadioGroup>
          </div>
        </div>
        <div className="mb-4">
          <FormField
            control={form.control}
            name="district"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <SelectField
                    label={t('region')}
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
        <div className="mb-4">
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
        </div>
        <div className="flex justify-between">
          <Button
            variant="ghost"
            type="button"
            onClick={() => router.push('/')}
          >
            {t('cancel')}
          </Button>
          <Button variant="subscribe" showRightArrowIcon size="subscribe">
            {t('continue')}
          </Button>
        </div>
      </form>
    </Form>
  );
};
