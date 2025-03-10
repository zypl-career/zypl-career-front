import { TTestResponse, TTestResponseWithoutAuth } from '@providers';

export const isTestAuth = (
  data?: TTestResponse | TTestResponseWithoutAuth,
): data is TTestResponseWithoutAuth => {
  return (data as TTestResponseWithoutAuth)?.info !== undefined;
};
