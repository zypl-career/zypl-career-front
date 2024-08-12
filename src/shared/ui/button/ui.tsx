'use client';

import * as React from 'react';
import { cn } from '@/shared/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { ArrowIcon } from '@/shared';

import type { TVariantType, TSizeType, TButtonProps } from './types';

const buttonVariants = cva(
  'theme:bg-primaryBg theme:text-primary theme:border theme:border-primary inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-purple-800 theme:bg-primary theme:text-primaryBg text-primary-foreground cursor-pointer hover:bg-primary/90',
        destructive:
          'bg-destructive cursor-pointer text-destructive-foreground hover:bg-destructive/90',
        outline:
          'theme:text-primary theme:border-primary theme:hover:bg-primary theme:hover:text-primaryBg  border border-input bg-transparent text-black cursor-pointer hover:bg-accent hover:text-accent-foreground',
        purpleOutline:
          'border border-[#371141] rounded-2xl text-[#111827] bg-background cursor-pointer hover:text-accent-foreground transform transition-transform duration-200 active:scale-110',
        secondary:
          'theme:bg-primary theme:text-primaryBg bg-white text-purple-900 cursor-pointer hover:bg-secondary/80',
        auth: 'bg-purple-800 rounded-2xl cursor-pointer font-[600] text-white w-full md:w-[400px] transform transition-transform duration-200 active:scale-110',
        status:
          ' bg-purple-800 rounded-2xl md:text-[20px] cursor-pointer font-[600] text-white w-full transform transition-transform duration-200 active:scale-110',
        register:
          'theme:bg-primary theme:text-primaryBg bg-purple-800 rounded-2xl cursor-pointer font-[600] text-white w-full transform transition-transform duration-200 active:scale-110',
        login:
          'border border-[#9CA3AF] text-[#4B5563] md:text-[20px] cursor-pointer w-full bg-background font-[600] hover:text-accent-foreground rounded-2xl w-full transform transition-transform duration-200 active:scale-110',
        outlineSecondary:
          'border border-[#9CA3AF] text-[#4B5563] cursor-pointer bg-background font-[600] hover:text-accent-foreground rounded-2xl w-full md:w-[400px] transform transition-transform duration-200 active:scale-110',
        ghost: 'text-gray-600 font-semibold',
        link: 'text-primary underline-offset-4 cursor-pointer hover:underline',
        none: 'bg-none text-[#6B7280] font-bold md:text-[20px]',
        subscribe:
          'theme:bg-primaryBg theme:border-primary bg-[#7E3794] rounded-3xl md:text-[17px] cursor-pointer font-[600] text-white w-full transform transition-transform duration-200 active:scale-110',
        outlineCard:
          'theme:border-primary theme:text-primary theme:bg-primaryBg border border-[#D7D7D7] text-[#6B7280] cursor-pointer bg-background font-[600] hover:text-accent-foreground rounded-3xl md:w-[115px] transform transition-transform duration-200 active:scale-110',
        gray: 'bg-gray-200 text-gray-700 py-2 px-4 rounded transform transition-transform duration-200 active:scale-110',
        white:
          'border border-[#D1D5DB] bg-white px-4 py-2 rounded-3xl lg:w-[114px] flex items-center justify-center',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
        subscribe: 'w-full lg:w-[212px] p-2',
        followFuture: 'w-full md:w-[534px] p-2',
        cluster: 'w-full lg:w-[376px] p-2',
      },
      rounded: {
        default: 'rounded',
        sm: 'rounded-lg',
        md: 'rounded-xl',
        lg: 'rounded-2xl',
        full: 'rounded-full',
      }
    },
    defaultVariants: {
      variant: 'default' as TVariantType,
      size: 'default' as TSizeType,
    },
  },
);

const Button = React.forwardRef<
  HTMLButtonElement,
  TButtonProps>
  ((
    {
      className,
      variant,
      size,
      rounded = 'default',
      showRightArrowIcon = false,
      asChild = false,
      children,
      startIcon,
      endIcon,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, rounded, size, className }))}
        ref={ref}
        {...props}
      >
        {startIcon}
        {children}
        {endIcon}
        {showRightArrowIcon ? (
          <ArrowIcon
            className={cn(
              'ml-2 animate-moveRight fill-white theme:fill-primaryBg',
              { 'fill-black': variant !== 'default' }
            )}
          />
        ) : null}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
