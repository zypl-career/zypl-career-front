import { HtmlHTMLAttributes } from 'react';

export type TBadgeProps = HtmlHTMLAttributes<HTMLDivElement> & {
  title: string;
  variant?: 'default' | 'white';
};
