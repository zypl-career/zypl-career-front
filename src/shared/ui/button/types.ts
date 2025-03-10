import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/shared';
import { ReactNode } from 'react';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean;
    showRightArrowIcon?: boolean;
    rounded?: TRounded;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
  };

export type TVariantType =
  | 'default'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | 'link'
  | 'auth'
  | 'outlineSecondary'
  | 'status'
  | 'login'
  | 'none'
  | 'purpleOutline'
  | 'register'
  | 'subscribe'
  | 'outlineCard'
  | 'gray'
  | 'white';
export type TSizeType =
  | 'default'
  | 'sm'
  | 'lg'
  | 'icon'
  | 'subscribe'
  | 'followFuture'
  | 'full';

export type TRounded =
  | 'default'
  | 'sm'
  | 'md'
  | 'lg'
  | 'full'
  | 'followFuture'
  | 'cluster'
  | 'md';
