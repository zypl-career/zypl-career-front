import { z } from 'zod';
import { SignInSchema } from './schema';

export type TSignIn = z.infer<typeof SignInSchema>;

export interface TUserLogin {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  accept: string | null;
  gender: string;
  age: number;
  district: string;
  role: string;
  school: string;
  email: string;
  emailConfirmed: string;
  createdAt: string | number | Date;
  updatedAt: string | number | Date;
  deletedAt: string | number | Date;
}

export type TLoginResponse = {
  access: string;
  refresh: string;
  user: TUserLogin | null;
};
