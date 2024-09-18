export type TTestRequest = {
  name: string;
  first: number[]
  second: string[],
  third: string;
  fourth: string;
  fifth: string;
  sixth: string;
  seventh: string;
  time_spent: number;
}

export type TTestContext = {
  test: Partial<TTestRequest>;
  setTest: (test: Partial<TTestRequest>) => void;
};

export type TTestResponse = {
  message: string
  payload: TTestResponsePayload
  without_auth: TTestResponseWithoutAuth
}

export type TTestResponsePayload = {
  userId: string
  resultTest: number[]
  id: string
  createdAt: string
  updatedAt: string
  deletedAt: any
}

export type TTestResponseWithoutAuth = {
  message: string
  info: string
  payload: number[]
}
