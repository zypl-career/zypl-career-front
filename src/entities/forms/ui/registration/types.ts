import { z } from 'zod';
import { SignUpSchema } from './schema';

export type TSignUp = z.infer<typeof SignUpSchema>;

export type IUserData = {
  name: string;
  surname: string;
  gender: string;
  role: string;
  email: string;
  password: string;
  patronymic: string;
  age: number | string;
  district: string;
  school: string;
  confirmPassword?: string;
}
