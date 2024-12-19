import { z } from 'zod';

export const CreateUserFast = z.object({
  gender: z.string({ required_error: 'Обязательное поле' }),
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
  district: z.string({ required_error: 'Обязательное поле' }),
});
