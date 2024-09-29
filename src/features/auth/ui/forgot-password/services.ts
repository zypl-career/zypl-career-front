import { apiService } from '@api';

export const sendCode = async (email: string) => {
  return apiService
    .post<{ message: string }>('/user/send-code', { email })
    .then(({ data }) => data)
    .catch(() => {
      throw new Error('Ошибка при отправке кода');
    });
};

export const checkCode = async (email: string, code: number) => {
  return apiService
    .post<{ message: string }>('/user/verify-email', { email, code })
    .then(({ data }) => data);
};

export const changePassword = async (
  email: string,
  newPassword: string,
  code: number,
) => {
  return apiService
    .post<{
      message: string;
    }>('/user/change-password', { email, newPassword, code })
    .then(({ data }) => data);
};
