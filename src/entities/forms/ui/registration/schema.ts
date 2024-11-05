import { z } from 'zod';

export const SignUpSchema = z
  .object({
    name: z.string().min(2, { message: 'Обязательное поле' }),
    surname: z.string().min(2, { message: 'Обязательное поле' }),
    patronymic: z.string().min(2, { message: 'Обязательное поле' }),
    gender: z.string().min(2, { message: 'Обязательное поле' }),
    age: z.union([z.string().min(2), z.number().min(2)]),
    district: z.string().min(2, { message: 'Обязательное поле' }),
    role: z.string().min(2, { message: 'Обязательное поле' }),
    school: z.string().min(2, { message: 'Обязательное поле' }),
    email: z
      .string()
      .min(2, { message: 'Обязательное поле' })
      .email({ message: 'min' }),
    password: z.string().min(2, { message: 'Обязательное поле' }),
    confirmPassword: z
      .string()
      .min(2, { message: 'Обязательное поле' })
      .optional(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Пароль не совпадает!',
        path: ['confirmPassword'],
      });
    }
  });
