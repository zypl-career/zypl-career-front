import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { selectVariants } from '.';

export type TSelectProps = React.SelectHTMLAttributes<HTMLSelectElement> &
  VariantProps<typeof selectVariants> & {
    asChild?: boolean;
    showFlagIcon?: boolean;
  };

export type TVariantType =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';
export type TSizeType = 'default' | 'sm' | 'lg' | 'icon';
