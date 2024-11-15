import { removeAccessToken } from '@/shared';
import { redirect } from 'next/navigation';
import axios from 'axios';
import { toast } from 'sonner';

export const unAuthenticate = (message?: string) => {
  removeAccessToken();
  removeHeaders();
  toast.warning('Время авторизации закончилось', { description: message });
  redirect('/login');
};

export const removeHeaders = () =>
  delete axios.defaults.headers.common['Authorization'];
