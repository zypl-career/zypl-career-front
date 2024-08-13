import { z } from 'zod';
import { SignInSchema } from './schema';

export type TSignIn = z.infer<typeof SignInSchema>;

export type TToken = {
  access: string;
  refresh: string;
};
