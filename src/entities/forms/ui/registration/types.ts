import { z } from 'zod';
import { SignUpSchema } from './schema';

export type TSignUp = z.infer<typeof SignUpSchema>;

export type IUserData = {
  name: string;
  surname: string;
  patronymic: string;
  gender: string;
  age: number | string;
  district: string;
  role: string;
  school: string;
  email: string;
  password: string;
  confirmPassword?: string;
};
