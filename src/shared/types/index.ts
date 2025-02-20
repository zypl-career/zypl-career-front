export type PageParams = {
  params: { id: string };
};

export type TResponse<T> = {
  total: number;
  page: number;
  limit: number;
  data: T;
};

export type TQueryParams = {
  page: number | string;
  limit: number | string;
};

export type TGender = 'male' | 'female';
