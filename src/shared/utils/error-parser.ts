import { TSignUp } from '@/entities/forms/ui/registration/types';
import { toast } from 'sonner';

export type ErrorType<T = TSignUp> = {
  [key in keyof T]: string[];
};

export const parseError = <T extends TSignUp>(error: ErrorType<T>) => {
  for (const key in error) {
    error[key].forEach((err) => {
      toast.warning(key, { description: err });
    });
  }
};
