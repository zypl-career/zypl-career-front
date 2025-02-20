import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z
    .string({
      required_error: 'Обязательное поле',
    })
    .email(),
});

export const passwordCodeSchema = z.object({
  code: z
    .number({
      required_error: 'Обязательное поле',
      invalid_type_error: 'Должно быть числом',
    })
    .nonnegative()
    .int()
    .gte(1000, { message: 'Код должен быть 4-значным числом' })
    .lte(9999, { message: 'Код должен быть 4-значным числом' }),
});

export const newPasswordSchema = z
  .object({
    newPassword: z.string().min(2, { message: 'Обязательное поле' }),
    confirmPassword: z
      .string()
      .min(2, { message: 'Обязательное поле' })
      .optional(),
  })
  .superRefine(({ confirmPassword, newPassword }, ctx) => {
    if (confirmPassword !== newPassword) {
      ctx.addIssue({
        code: 'custom',
        message: 'Пароль не совпадает!',
        path: ['confirmPassword'],
      });
    }
  });
