import { z } from 'zod';

export const SignUpSchema = z.object({
  name: z.string(),
  surname: z.string(),
  patronymic: z.string(),
  gender: z.string(),
  age: z.union([z.string().min(2), z.number().min(2)]),
  district: z.string(),
  role: z.string(),
  school: z.string(),
  email: z
    .string()
    .min(2, { message: 'Обязательное поле' })
    .email({ message: 'min' }),
  password: z.string().min(2, { message: 'Обязательное поле' }),
  confirmPassword: z.string().min(2, { message: 'Обязательное поле' }).optional(),
});
