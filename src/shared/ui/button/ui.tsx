'use client';

import * as React from 'react';
import { cn } from '@/shared/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { ArrowIcon } from '@/shared';

import type { TVariantType, TSizeType, TButtonProps } from '.';

const buttonVariants = cva(
  'inline-flex gap-2 items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'theme:bg-primary theme:text-primaryBg text-primary-foreground  cursor-pointer hover:bg-primary/90',
        destructive:
          'bg-destructive cursor-pointer  text-destructive-foreground hover:bg-destructive/90',
        outline:
          'theme:text-primary theme:border-primary theme:hover:bg-primary theme:hover:text-primaryBg  border border-input bg-transparent text-black cursor-pointer hover:bg-accent hover:text-accent-foreground',
        purpleOutline:
          'border border-[#371141] rounded-2xl text-[#111827]  bg-background cursor-pointer  hover:text-accent-foreground  transform transition-transform duration-200 active:scale-110',
        secondary:
          'theme:bg-primary theme:text-primaryBg bg-white text-purple-900 cursor-pointer hover:bg-secondary/80',
        auth: 'bg-purple-800 rounded-2xl cursor-pointer font-[600] text-white w-full md:w-[400px] transform transition-transform duration-200 active:scale-110',
        status:
          'bg-purple-800 rounded-2xl md:text-[20px] cursor-pointer font-[600] text-white w-full transform transition-transform duration-200 active:scale-110',
        register:
          'theme:bg-primary theme:text-primaryBg bg-purple-800 rounded-2xl cursor-pointer font-[600] text-white w-full transform transition-transform duration-200 active:scale-110',
        login:
          'border border-[#9CA3AF] text-[#4B5563] md:text-[20px] cursor-pointer w-full bg-background font-[600] hover:text-accent-foreground rounded-2xl w-full transform transition-transform duration-200 active:scale-110',
        outlineSecondary:
          'border border-[#9CA3AF] text-[#4B5563] cursor-pointer  bg-background font-[600] hover:text-accent-foreground rounded-2xl w-full md:w-[400px] transform transition-transform duration-200 active:scale-110',
        ghost: 'hover:bg-accent cursor-pointer  hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 cursor-pointer  hover:underline',
        none: 'bg-none text-[#6B7280] font-bold md:text-[20px]',
        subscribe:
          ' bg-[#7E3794] rounded-3xl md:text-[17px] cursor-pointer font-[600] text-white w-full transform transition-transform duration-200 active:scale-110',
        outlineCard:
          'border border-[#D7D7D7] text-[#6B7280] cursor-pointer  bg-background font-[600] hover:text-accent-foreground rounded-3xl md:w-[115px] transform transition-transform duration-200 active:scale-110',
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
          <ArrowIcon className="ml-2 animate-moveRight" />
        ) : null}
      </Comp>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
