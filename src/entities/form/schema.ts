import { z } from 'zod';

export const CreateUserFast = z.object({
  gender: z.string({ required_error: 'Обязательное поле' }),
  age: z.union([z.string().min(2), z.number().min(2)]),
  district: z.string({ required_error: 'Обязательное поле' }),
});
