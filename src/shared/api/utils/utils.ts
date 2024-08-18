import { removeAccessToken } from '@/shared';
import { redirect } from 'next/navigation';
import axios from 'axios';
import { toast } from '@ui';

export const unauthenticate = (message?: string) => {
  removeAccessToken();
  removeHeaders();
  toast({ title: 'Время авторизации закончилось', description: message });
  redirect('/login');
};

export const removeHeaders = () =>
  delete axios.defaults.headers.common['Authorization'];
