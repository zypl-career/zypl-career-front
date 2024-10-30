import type { FC, ReactNode } from 'react';

export type TFProps = {
  condition: boolean;
  children: ReactNode;
};

export const If: FC<TFProps> = ({ condition, children }) =>
  condition ? children : null;
