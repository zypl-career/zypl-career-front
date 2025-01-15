import { z } from 'zod';
import { UserEditSchema } from './schema';

export type TUserEditRequest = z.infer<typeof UserEditSchema>;

export type TUserEditResponse = {
  message: string;
};

export type TGender = {
  label: string;
  value: string;
};
