import { TForgotPasswordSteps } from '../types';

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
