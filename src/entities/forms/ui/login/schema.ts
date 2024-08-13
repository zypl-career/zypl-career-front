import { z } from 'zod';

export const SignInSchema = z.object({
  email: z
    .string()
    .min(2, { message: 'Обязательное поле' })
    .email({ message: 'min' }),
  password: z.string().min(2, { message: 'Обязательное поле' }),
});
