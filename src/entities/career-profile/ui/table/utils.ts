import {
  TTestResponse,
  TTestResponseWithoutAuth,
} from '@/shared/providers/test-provider';

export const isTestAuth = (
  data?: TTestResponse | TTestResponseWithoutAuth,
): data is TTestResponseWithoutAuth => {
  return (data as TTestResponseWithoutAuth).info !== undefined;
};
