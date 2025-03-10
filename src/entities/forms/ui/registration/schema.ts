import { z } from 'zod';

export const SignUpSchema = z
  .object({
    name: z.string().min(2, { message: 'Обязательное поле' }),
    surname: z.string().min(2, { message: 'Обязательное поле' }),
    patronymic: z
      .string({
        required_error: 'Обязательное поле',
      })
      .optional(),
    gender: z.string().min(2, { message: 'Обязательное поле' }),
    age: z.union([
      z.string({
        required_error: 'Обязательное поле',
      }),
      z
        .number({
          required_error: 'Обязательное поле',
        })
        .min(9, { message: 'Минимальный допустимый возрост 9 леты' })
        .max(120, { message: 'Максимальное допустимый возрост 120 леты' }),
    ]),
    district: z.string().min(2, { message: 'Обязательное поле' }),
    role: z.string().min(2, { message: 'Обязательное поле' }),
    school: z.string(),
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
