import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { buttonVariants } from '@/shared';

export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    showGlassesIcon?: boolean;
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
  | 'cluster';
