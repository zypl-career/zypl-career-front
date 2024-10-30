export type PageParams = {
  params: { id: string };
};

export type TResponse<T> = {
  total: number;
  page: number;
  limit: number;
  data: T;
};
