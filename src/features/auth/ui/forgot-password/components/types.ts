import { z } from 'zod';
import { TForgotPasswordSteps } from '../types';
import {
  passwordCodeSchema,
  newPasswordSchema,
  forgotPasswordSchema,
} from './schema';

export type TOnDoneParams = {
  message: string;
  key: TForgotPasswordSteps;
  values: Partial<TForgotComponentsValues>;
};
export type TForgotComponentsValues = {
  email: string;
  code: number;
  newPassword: string;
};

export type TForgotComponentsProps = {
  onDone: ({ message, values }: TOnDoneParams) => void;
  values: Partial<TForgotComponentsValues>;
};

export type TPasswordCodeSchema = z.infer<typeof passwordCodeSchema>;
export type TNewPasswordSchema = z.infer<typeof newPasswordSchema>;
export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
