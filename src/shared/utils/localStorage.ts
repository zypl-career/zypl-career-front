type TAccessToken = {
  access: string;
  refresh: string;
};

export const getAccessToken = (): TAccessToken => {
  return JSON.parse(localStorage.getItem('accessToken') ?? '{}');
};

export const setAccessToken = (token: string) => {
  return localStorage.setItem('accessToken', token);
};

export const removeAccessToken = () => {
  return localStorage.removeItem('accessToken');
};
