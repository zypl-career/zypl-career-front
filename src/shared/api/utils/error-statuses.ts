import { redirect } from 'next/navigation';
import { toast } from 'sonner';
import { unAuthenticate } from './utils';

export const errorStatus: Record<number, (msg?: string) => void> = {
  400: (msg?: string) =>
    toast.warning('Данные не найдены', { description: msg }),
  422: (msg?: string) =>
    toast.warning('Данные не найдены', { description: msg }),
  403: (msg?: string) => unAuthenticate(msg),
  404: () => redirect('/404'),
  401: (msg?: string) => unAuthenticate(msg),
  409: (msg?: string) =>
    toast.warning('Такой пользователь уже существует', { description: msg }),
  500: () => redirect('/'),
};
