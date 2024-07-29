import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { selectVariants } from '.';

export type TSelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> &
  VariantProps<typeof selectVariants> & {
    asChild?: boolean;
    showFlagIcon?: boolean;
    size?: TSizeType;
    label?: string;
  };

export type TVariantType =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link';
export type TSizeType = 'default' | 'sm' | 'lg' | 'icon';
