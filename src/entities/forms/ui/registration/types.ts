import { z } from 'zod';
import { SignUpSchema } from './schema';
import { TUserLogin } from '../login/types';

export type TSignUp = z.infer<typeof SignUpSchema>;

export type TUserData = TUserLogin & {
  id: string;
  name: string;
  surname: string;
  patronymic: string;
  gender: string;
  age: number | string;
  district: string;
  role: string;
  school: string;
  email: string;
  password?: string;
  confirmPassword?: string;
};

export type TUserResponse = {
  payload: TUserData;
  message: string;
};

export type TGender = {
  label: string;
  value: string;
};
